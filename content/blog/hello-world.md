---
title: "Hello World: Why Blockchain Document Certification Matters"
description: "An introduction to UVerify and how we use the Cardano blockchain to make document certification tamper-proof, instant, and accessible to everyone."
publishedAt: "2026-05-01T00:00:00Z"
tags: ["blockchain", "cardano", "certification", "intro"]
ogImage: "/og-image.png"
draft: false
---

## The Problem with Traditional Certificates

Every year, billions of documents are issued. Diplomas, lab reports, insurance certificates, product passports. And every year, a significant fraction of them are forged.

Traditional verification is slow. You call an issuer, wait for a response, hope their records survived the last database migration. It is manual, expensive, and fragile.

There had to be a better way.

## Enter the Blockchain

A blockchain is an append-only ledger replicated across thousands of independent nodes. Once a record is written, no single party can alter it. Not even the original author. This makes it a perfect notary.

UVerify uses the **Cardano blockchain** to store a cryptographic fingerprint (SHA-256 hash) of your document on-chain. Optionally, UVerify also allows you to store metadata alongside the file hash. The document itself never touches the blockchain. Only its fingerprint does. This means:

- **Privacy**: the content stays with you
- **Immutability**: the timestamp and fingerprint cannot be altered
- **Open verification**: anyone with the document can verify it in seconds

## How UVerify Works

1. **Upload or hash your document.** The client computes the SHA-256 hash.
2. **Sign and submit.** A Cardano wallet signs a transaction containing the hash.
3. **Receive a certificate.** UVerify stores the fingerprint on-chain with metadata.
4. **Share and verify.** Anyone can visit `https://uverify.io` and verify the document instantly.

No account required to verify. No trusted third party.
Custom certificates with your branding are also available.

## A Sample Code Block

Imagine you wrote a song and want to prove you created it on a certain date. With UVerify, you can hash the lyrics and store that hash on Cardano. Here's how simple it is with the UVerify TypeScript SDK:

```zsh
npm install @uverify/sdk
```

```typescript
import { Address, Bytes, COSE, PrivateKey, TransactionWitnessSet } from '@evolution-sdk/evolution';
import { make as makeEvolutionClient } from '@evolution-sdk/evolution/sdk/client/Client';
import { preprod } from '@evolution-sdk/evolution/sdk/client/Chain';
import { addressFromSeed } from '@evolution-sdk/evolution/sdk/wallet/Derivation';
import { UVerifyClient, WaitForTimeoutError } from '@uverify/sdk';

const song = `The Immutable Record

Verse 1:
The blockchain never lies,
every hash a testament,
written in the morning skies,
a proof that time has lent.

Chorus:
Immutable and true,
a fingerprint in chain,
no one can undo
what we forever claim.

Verse 2:
A song, a word, a deed,
all anchored to the block,
the world can verify
what time has come to lock.`;
```

SDKs for Python and Java are also available. Full documentation is in the [Developer Docs](https://docs.uverify.io/sdk). We will create and fuel a wallet on-the-fly, so you can run this code immediately and see how it works.

```typescript
const WALLET_FILE = new URL('./wallet.txt', import.meta.url);
const VERIFY_URL = 'https://app.preprod.uverify.io/verify';
const CEXPLORER_TX_URL = 'https://preprod.cexplorer.io/tx';

function walletFromMnemonic(mnemonic: string) {
  const evolutionClient = makeEvolutionClient(preprod).withSeed({
    mnemonic,
    addressType: 'Enterprise',
  });

  const { address: addressObj } = addressFromSeed(mnemonic, {
    addressType: 'Enterprise',
    networkId: 0,
  });
  const addressHex = Address.toHex(addressObj);
  const addressBech32 = Address.toBech32(addressObj);
  const paymentKey = PrivateKey.fromMnemonicCardano(mnemonic);

  const signTx = async (unsignedTx: string): Promise<string> => {
    const witnessSet = await evolutionClient.signTx(unsignedTx);
    return TransactionWitnessSet.toCBORHex(witnessSet);
  };

  const signMessage = (message: string): Promise<{ key: string; signature: string }> => {
    const payload = new TextEncoder().encode(message);
    const { signature, key } = COSE.SignData.signData(addressHex, payload, paymentKey);
    return Promise.resolve({ key: Bytes.toHex(key), signature: Bytes.toHex(signature) });
  };

  return { address: addressBech32, mnemonic, signTx, signMessage };
}

function createWallet() {
  const mnemonic = PrivateKey.generateMnemonic(256);
  return walletFromMnemonic(mnemonic);
}

async function sha256hex(data: Uint8Array): Promise<string> {
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

let storedMnemonic: string | undefined;
try {
  storedMnemonic = (await Deno.readTextFile(WALLET_FILE)).trim();
} catch {
  // wallet.txt does not exist yet
}

const isNew = storedMnemonic === undefined;
const wallet = isNew ? createWallet() : walletFromMnemonic(storedMnemonic!);
const { address, signTx, signMessage, mnemonic } = wallet;

const client = new UVerifyClient({ signMessage, signTx });
const { waitFor, fundWallet, issueCertificates } = client;

if (isNew) {
  await Deno.writeTextFile(WALLET_FILE, mnemonic);
  console.log('Created new wallet:', address);
  console.log('Mnemonic saved to wallet.txt. Keep this file safe.\n');
  await waitFor(await fundWallet(address));
} else {
  console.log('Restored wallet:', address, '\n');
}

const hash = await sha256hex(new TextEncoder().encode(song))
const metadata = JSON.stringify({
  genre: 'rock',
  author: 'Alice Smith',
  date: new Date().toISOString().slice(0, 10),
});

const txHash = await issueCertificates(address, [
  { hash, metadata, algorithm: 'SHA-256' },
]);
console.log(`Transaction submitted: ${CEXPLORER_TX_URL}/${txHash}\n`);
await waitFor(txHash);
console.log(`Certified! View your certificate at ${VERIFY_URL}/${hash}`);
```

Copy and paste this code into a file named `index.ts`. Next to it create a `deno.json` with the following content:

```json
{
  "imports": {
    "@evolution-sdk/evolution": "npm:@evolution-sdk/evolution@0.5.7",
    "@evolution-sdk/evolution/sdk/client/Client": "npm:@evolution-sdk/evolution@0.5.7/sdk/client/Client",
    "@evolution-sdk/evolution/sdk/client/Chain": "npm:@evolution-sdk/evolution@0.5.7/sdk/client/Chain",
    "@evolution-sdk/evolution/sdk/wallet/Derivation": "npm:@evolution-sdk/evolution@0.5.7/sdk/wallet/Derivation",
    "@uverify/sdk": "npm:@uverify/sdk@0.1.7"
  }
}
```

Now you can run the code with:

```zsh
deno run -A index.ts
```

That's it! In just a few lines of code, you've created a wallet, hashed your song, and issued a certificate on the Cardano blockchain. You can now share the song and its certificate URL with anyone. They can verify the authenticity in seconds without needing an account or trusting a third party.

## What's Next

UVerify is expanding its template library. Digital product passports for the EU sustainability regulations, tokenizable certificates and lab report certification for regulated industries are all on the way.

Follow us on [X / Twitter](https://x.com/uvfyhq) or join the [Discord community](https://discord.gg/Dvqkynn6xc) to stay updated.

We are just getting started.
