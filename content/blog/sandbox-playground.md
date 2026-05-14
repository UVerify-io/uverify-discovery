---
title: "I Have a Toy for You and You Will Like It: How to Play with the UVerify Sandbox"
description: "Spin up a full local blockchain, scaffold a custom certificate template for an imaginary academy, use the UVerify Claude skill to style it with AI, then flood the chain with 1,500 demo certificates, all in an afternoon."
publishedAt: "2026-05-11T00:00:00Z"
tags: ["sandbox", "cardano", "tutorial", "certification", "ai", "devtools"]
ogImage: "/blog/sandbox-playground/cover-1000x420.png"
draft: false
---

If you read the [previous article on the sandbox internals](/blog/sandbox-yano-yaci-store), you already know that there is a local playground, what it is made of, and roughly what it can do. What that article did not cover is how to actually play. This one does.

We will build a custom certificate template for a fictional institution called **Building Block Academy**, simulate issuing certificates in bulk for fictional students on the local devnet, evaluate the on-chain costs, and inspect the final issued certificates in the UI. At the end, we will submit the finished template to the public UVerify UI repository so anyone can see **Building Block Academy**'s student certificates at `app.uverify.io`.

You will need:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 24+
- [uv](https://docs.astral.sh/uv/): `brew install uv` on macOS or the PowerShell one-liner on Windows
- [Deno](https://deno.com/): for the load test at the end
- [Claude Code](https://claude.ai/claude-code): optional, but having an LLM handle the template styling saves a lot of time

---

## Step 1: Scaffold a Template for Building Block Academy

The sandbox UI compiles templates at startup from a volume-mounted folder. You do not need the full `uverify-ui` source. The `template add` command scaffolds everything for you:

```bash
uv run sandbox.py template add BuildingBlockCertificate
```

Node.js is required here because the UVerify CLI runs via `npx`. The command creates `sandbox/custom-ui-templates/BuildingBlockCertificate/` with a working React component and registers it in `additional-templates.json`.

Open the generated file:

```bash
open sandbox/custom-ui-templates/BuildingBlockCertificate/src/Certificate.tsx
```

The scaffold gives you a minimal but complete template that already renders its certificate hash, metadata, and the standard UVerify timestamp. It works out of the box. The next step is making it look like it belongs to Building Block Academy.

---

## Step 2: Let Claude Design It

This is where the UVerify Claude skill comes in. Install it once:

```
/plugin marketplace add UVerify-io/uverify-claude-skill
/plugin install uverify@uverify-plugins
```

Then, in any Claude Code session opened at the `uverify-examples` folder, type:

```
/uverify
```

Claude now knows the full `@uverify/core` template API: the `Template` base class, `layoutMetadata`, `render()`, the `UVerifyMetadata` and `UVerifyCertificateExtraData` types, theming, and the `uv_url_` prefix for keeping personal data off-chain.

Describe what you want. Something like:

> I want a certificate template for Building Block Academy, an online blockchain education platform. Their landing page uses a dark navy background, gold accents, and a monospace font for hashes. The certificate should show the graduate's name, the course title, the completion date, and a short skills summary. The graduate's name should not be stored on-chain.

Claude will read `Certificate.tsx`, understand the `layoutMetadata` keys you need, and rewrite the component. The graduate's name goes into a `uv_url_recipientName` field so it stays off-chain but is still visible when someone visits the certificate URL. Everything else (course title, completion date, skills) gets stored as metadata.

From there, iterate freely. Ask Claude to adjust the font, swap the color scheme, add the academy logo as an SVG inline, or tighten the layout for mobile. The skill knows which props come from `metadata`, which come from `extra`, and which come from `certificate`, so you will not waste time debugging undefined values.

---

## Step 3: Use the Local UVerify UI to Issue a Test Certificate

Once you are happy, start the sandbox:

```bash
uv run sandbox.py start --clean
```

Open `http://localhost:3000`, click **Create**, and enter a fictional student and certificate ID, for example `Building-Block-Academy-00112233-998877665`. Select your template from the Certificate Template dropdown, fill in the form fields, and click **Use Demo Wallet**. The Demo Wallet is a disposable wallet that gets funded automatically at that point. The certificate confirms on-chain in a second or two once you click **Create Trust Certificate**.

---

## Step 4: Create a Data Plan

This was a single certificate. The real fun starts when you issue hundreds or thousands of certificates to see how the system performs at scale and what the on-chain costs look like. The simulator generates realistic bulk metadata from a *plan* file. Copy the example and shape it for Building Block Academy:

```bash
cp sandbox/simulator/plan.example.json sandbox/simulator/plan.buildingblock.json
```

Edit `plan.buildingblock.json`. A plan that fits the template you just built might look like this:

```json
{
  "courseName":   { "type": "one-of", "values": [
    "Cardano Fundamentals", "Smart Contract Development with Aiken",
    "DeFi Protocol Design", "Blockchain Security", "NFT Engineering",
    "Governance and DRep Participation"
  ]},
  "completedAt":  { "type": "random-string", "regex": "202[45]-[01][0-9]-[0-2][0-9]" },
  "grade":        { "type": "one-of",        "values": ["Distinction", "Merit", "Pass"] },
  "creditsEarned":{ "type": "random-number", "range": { "min": 10, "max": 40 } },
  "issuer":       { "type": "static",        "value": "Building Block Academy" }
}
```

Plan files follow `plan*.json` naming and are gitignored (except `plan.example.json`), so your local plans stay local.

---

## Step 5: Run the Simulator

```bash
uv run sandbox.py simulate \
  --template BuildingBlockCertificate \
  --plan sandbox/simulator/plan.buildingblock.json \
  --amount 1500 \
  --batch-size 15
```

The simulator generates 1,500 metadata files, then submits them in batches of 15 certificates per transaction. A wallet is created automatically on first run and funded from the sandbox faucet with three UTxOs of 500 ADA each, which is more than enough. The output looks like this:

```
[100/100] Submitting 15 certificate(s) …
  fe418affb5b3667aff7b95084eb8f80d9cc107e8d3492cbbaf6b1b6a7b4e87a2
  fe55c96ac1c9aa5adefc0d1d537a33bc0fcee078f1b26743b48f944481293611
  fe645b6d1028311cdeea7fd6843dea1954c77e8f402b478d7f8c5951fcf52602
  fedc52f9d7ff76d120f95d15350dcf7c335544594f049bf3061939f4a7768865
  fef65cd8837ec08ac03323592f139577565329c6f8f3498849accb045e42457c
  ff611fa073f82d8f431a2f5a75d9b9bdd2393da02ed77482f30a5c555e7e2906
  ff68fd08e764def25c9260549cd6980243e9f722718813aae9685fc63f8042e8
  ff7eb54740fbb0603fd93ae34c13aaa5addcd1ddb25dcaa4b5ad88b868d01f78
  ff8f452b8669ce0dd54488254bd5fc58e4649099d8f957a1f64da8d8b524896b
  ffa736097fbb0b172a51f6d8ee4a387233363a21d9858419badc7d31a019b797
  ffc76932e5986de882a0930114f70c05b2c538581529cb6a0f78ec23c184d8a2
  ffddf56aa793c118b559524ea7166e42dbb4fb144ce8c403338ec5c6cd49f192
  ffecfc988dfd16b38057b14d87bfb7f4a490459c63ca330c62c7a6eb0f5ce4e0
  fff9e33a293613dcf009711c9d355bd1bd31d71bef0117fa31ac125f7ca99d91
  fffdcca1145af6e495fd543a6999c8f5cb6d5e2c16cae5fa4e8d998acf1c67be
  tx:  5a79d808ea1ed3d63ad919b7a0f88ca22bd674a76c1f99fd8f440e02187f008d
  fee: 0.938905 ADA
  Waiting for confirmation …
  Confirmed ✓

──────────────────────────────────────────────────
Transactions : 100
Certificates : 1500
Total fees   : 105.029809 ADA
Results      : results.json
```

If your machine goes to sleep mid-run, the simulator saves progress to `results.json` after every confirmed transaction. On the next run it asks whether to continue or start over. Pick **y** and it skips the already-submitted hashes without resubmitting anything.

Batch size affects cost. Larger batches pack more certificates per transaction and drive the per-certificate fee down. The practical ceiling is around 70-80 certificates per transaction depending on metadata size, after which Plutus ExUnits become the limiting factor rather than the transaction size limit. If you just need a fingerprint and an Arweave hash or IPFS CID, you can fit more certificates per transaction and reduce costs further. Play around with it and see how it affects the total fees.

---

## Step 6: Look at What You Made

Grab any certificate hash from the output (or from `sandbox/simulator/results.json`) and open it:

```
http://localhost:3000/verify/fe418affb5b3667aff7b95084eb8f80d9cc107e8d3492cbbaf6b1b6a7b4e87a2
```

Your Building Block Academy template renders with the metadata from that specific certificate: course name, grade, credits, date. The timestamp is the slot from the confirmed block. The issuer is the wallet address that signed the transaction. All of it is pulled directly from on-chain data. No database, no backend state.

You can also browse the raw transactions in Yaci Viewer at `http://localhost:3001` and inspect the UTxOs in Yaci Store at `http://localhost:8080`.

---

## Step 7: Share It with the World

The sandbox is great for development, but the real UVerify deployment at `app.uverify.io` can host your template too. To get it included:

1. Push your template to a public GitHub repository.
2. Pin an exact commit hash (no branch names or tags).
3. Open an issue on the [uverify-ui repository](https://github.com/UVerify-io/uverify-ui/issues/new?template=add-external-template.yaml) using the **Add External Template** issue template.

The template asks for the repo URL, the pinned commit hash, the path to `Certificate.tsx`, a description of the use case, and a checklist confirming local testing. Submissions that pass the checklist review get added to `additional-templates.json` and become available at `app.uverify.io` for anyone to use. You can restrict who sees the template by adding a whitelist to the `Certificate.tsx` template class:

```
  public whitelist = [
    'addr1qyleluql6elu7sktvncqfufnq675hlt9z922ah9sm45dmp7kjn0vsay0vq28379mczjmglmam3svuxyka0tyw0uchwjqmxmhg3',
    'addr_test1qqleluql6elu7sktvncqfufnq675hlt9z922ah9sm45dmp7kjn0vsay0vq28379mczjmglmam3svuxyka0tyw0uchwjqcsxhyw',
  ];
```

Only certificates issued by one of those addresses will be visible in the UI.

---

## Wrapping Up

You now have a running local Cardano devnet, a custom certificate template designed with AI assistance, and 1,500 demo certificates on-chain. Total time: an afternoon at most, probably less.

The sandbox resets cleanly with `uv run sandbox.py start --clean` whenever you want a fresh state. Your template files persist in `sandbox/custom-ui-templates/` and survive the reset.

If something breaks or you want to show off what you built, the [Discord](https://discord.gg/Dvqkynn6xc) is the right place. Full SDK and API documentation is at [docs.uverify.io](https://docs.uverify.io).

Now go build something real with it.
