---
title: "Who Signed This? Why Blockchain and Identity Are Complementary"
description: "A hash on the blockchain proves a document existed. It does not prove who stood behind it. How KERI credentials, the Veridian wallet, and one small announcement certificate close that gap for university diplomas and NFC-tagged products."
publishedAt: "2026-07-04T00:00:00Z"
tags: ["identity", "keri", "vlei", "veridian", "cardano", "certification", "nfc"]
ogImage: "/blog/blockchain-and-identity/cover-1000x420.png"
draft: false
---

A blockchain is very good at answering two questions. Did this exact document exist? And since when? Once a hash is recorded on Cardano, nobody can backdate it, swap it, or quietly make it disappear. That is proof of **what** and proof of **when**, and it is the foundation UVerify is built on.

There is a third question it cannot answer on its own: **who** put it there.

Every UVerify certificate names an issuer. But that issuer is a Cardano address, a string like `addr1qxy8...k3mp`. Addresses are pseudonymous by design. The blockchain guarantees that the same key signed the transaction, not that the key belongs to the organization it claims to represent. Identity systems solve exactly that problem, and they have the opposite blind spot. A verifiable credential proves who someone is, but it comes with no tamper-proof public timeline of what that someone did. Neither technology replaces the other. Together they complete each other.

## A Diploma and a Doubt

Picture an employer checking a job application. The applicant attached a diploma and a UVerify link. The employer opens it, drops the PDF onto the page, and the hash matches. The certificate was issued two years ago, long before the job posting existed. So far, the blockchain has done its job perfectly.

Then the employer looks at the issuer field. The metadata says "Building Block Academy". The address says `addr1qxy8...k3mp`.

Here is the uncomfortable part: metadata is written by whoever paid the transaction fee. Anyone can create a wallet, write "Building Block Academy" into a certificate, and anchor it on-chain. The blockchain preserved that claim faithfully, tamper-proof, forever. It just never promised the claim was true.

The classic workaround is publishing the official address somewhere off-chain, on the academy's website or in a PDF. That works until the website moves, the page gets redesigned, or the person who knew about it leaves. A trust anchor that lives in a CMS is not much of an anchor.

## Enter Verifiable Organizational Identity

This is where decentralized identity comes in. The [Key Event Receipt Infrastructure (KERI)](https://keri.one/) gives an organization a self-certifying identifier, an Autonomic Identifier (AID), whose key history is cryptographically verifiable and independent of any blockchain or registry. On top of KERI, Authentic Chained Data Container (ACDC) credentials attach verifiable claims to that identifier. The most mature ecosystem here is the [verifiable Legal Entity Identifier (vLEI)](https://www.gleif.org/en/vlei/introducing-the-verifiable-lei-vlei). A vLEI is not self-issued. It reaches the organization through a vetted chain: the Global Legal Entity Identifier Foundation (GLEIF) issues to a Qualified vLEI Issuer, the issuer verifies the legal entity and issues to it. When an institution holds a vLEI credential, a real-world verification process stands behind it.

Organizations hold and manage these credentials in an identity wallet. [Veridian](https://www.veridian.id/) is exactly that: it creates KERI identifiers, receives credentials, and keeps the signing keys on the device.

So the academy now has two disconnected proofs. A wallet that issues diplomas on Cardano, and a credential that proves it is Building Block Academy. The missing piece is a public, permanent link between the two.

## The Announcement Certificate

UVerify closes that gap with a single on-chain certificate, the **IdentityAuth** binding. The academy announces its diploma wallet by issuing one certificate from that exact wallet:

```json
{
  "uverify_template_id": "IdentityAuth",
  "uverify_update_policy": "first",
  "t": "AUTH",
  "ct": "identity",
  "i": "EKtQ1lym...",
  "s": "EBNaNu-M...",
  "o": "https://keria.building-block.example/oobi/...",
  "p": "0BB1..."
}
```

The fields carry the identity side of the handshake. `i` is the academy's KERI AID from Veridian. `s` is the schema of the credential it holds. `o` is the Out-of-Band Introduction (OOBI) endpoint where anyone can resolve the identifier's key state. And `p` is a signature over the wallet's payment credential, made with the identity's own signing key.

The result is a two-way handshake. The Cardano transaction signature proves control of the wallet, and the UVerify backend reads the payment credential from that signature rather than from metadata, so it cannot be spoofed. The KERI signature proves control of the identity. Each side vouches for the other, and the whole binding sits on-chain with a timestamp, immutable like every other certificate.

From that moment on, every diploma issued from `addr1qxy8...k3mp` inherits the binding. The employer's view changes from "issued by some address that calls itself an academy" to "issued by a wallet publicly bound to a verified organizational credential". The full chain of trust reads:

GLEIF → Qualified vLEI Issuer → Building Block Academy → diploma wallet → diploma certificate → the PDF in the application.

Every link in that chain is cryptographically verifiable, and no link depends on a website staying online. If the wallet is ever compromised or retired, the academy issues a REVOKE certificate and the binding is publicly closed, with the full history preserved. The credential API answers the question at any time:

```
GET /api/v1/credential/{paymentCredential}?type=identity
```

## The Same Pattern in a Chip

Diplomas are documents, but the pattern reaches further, into physical products. UVerify offers **EdDSA chips** (patent pending), Near Field Communication (NFC) chips named after the Edwards-curve Digital Signature Algorithm (EdDSA) keypair they carry. On every scan the chip signs a fresh challenge, so copying the public data does not clone the product. The chip's public key is announced on-chain with a **ProductVerification** certificate, issued from a company wallet just like a diploma.

And here the identity binding pays off a second time, because it belongs to the wallet, not to a single certificate. If the wallet announcing the chip's public key is the same wallet that issued the IdentityAuth certificate, the product page picks up the vLEI and credential information automatically. No new identity issuance needed. Say Building Block Academy wants to sell authenticated merch: it announces the chips from its already-bound diploma wallet, and every scan proves two things at once. The chip is genuine and cannot be a copy, and behind it stands a verified legal entity, not just a name printed on the packaging. One IdentityAuth certificate per wallet covers everything that wallet ever issues, whether it is a diploma or a hoodie.

Blockchain proves what existed and when. Identity proves who stood behind it. A diploma, a product, a lab report: they only become trustworthy when both questions have an answer. That is why blockchain and identity are not competitors. They are complementary, and the binding between them fits into one small certificate.

Want to build this flow yourself? The [identity documentation](https://docs.uverify.io/identity) covers the full lifecycle, and the local sandbox ships a complete KERI stack with `uv run sandbox.py start --keria` so you can test the whole handshake without touching mainnet.
