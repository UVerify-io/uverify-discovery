---
title: "More than just a fingerprint: Why your pet should use UVerify"
description: "Meet Sofia, a handmade pet necklace maker who discovered that blockchain technology does not add complexity to her business. It actually makes her life easier."
publishedAt: "2026-05-06T00:00:00Z"
tags: ["blockchain", "cardano", "nfc", "use-case", "decentralized", "small-business", "pets"]
ogImage: "/blog/pet-necklace-decentralized-app/cover-1000x420.png"
draft: false
---

We call the person in this story Sofia, but feel free to replace the name with your own if any of this sounds familiar.

Sofia makes handmade pet necklaces. Each one is crafted from recycled leather, stamped by hand, and finished with a small NFC chip embedded in the clasp. Scan the chip with any smartphone and you get the pet's name, the owner's contact number, and a note the owner left behind.

She is not a software engineer. She does not want to be one. She wants to make necklaces.

## The Stack She Did Not Build

For a long time, the digital side of what Sofia does would have required someone to build and maintain a significant piece of infrastructure.

A web server to receive the NFC scan and route it to the right page. A database to store the pet records. A frontend to render them. Authentication so nobody could tamper with someone else's pet profile. Backups. Monitoring. SSL certificates. A domain. A cloud hosting subscription and a bill at the end of every month.

Every one of those pieces is a dependency. A server goes down and the necklace becomes a blank piece of leather. If she ever decides to move on and tear down her services, every chip in every necklace stops working overnight. The database has to be backed up or a hardware failure takes every record with it.

Sofia is not running a tech startup. She is running a craft business. None of this should be her problem.

## What She Actually Did

Sofia discovered UVerify. And you might be thinking: is that not just a service that puts a fingerprint on a blockchain to prove nobody tampered with the data? It is much more than that. Every certificate is effectively a decentralized application. Here is what that means in practice.

She opens the UVerify app and selects the **Pet Necklace** template. She fills in the pet's name, species, breed, and an optional note from the owner. Her input for the certificate hash is the NFC chip's hardware ID, a unique identifier burned into the chip at the factory. She submits the transaction with her Cardano wallet.

That is it. The transaction confirms on-chain in seconds. UVerify generates a URL:

```
https://app.uverify.io/verify/a3f8c1...?uv_url_owner_name=Maria+Weber&uv_url_phone=015112312356
```

She programs that URL onto the NFC chip and attaches it to the finished necklace.

---

## What Happens When the Chip Is Scanned

This is where the story gets interesting.

When someone finds a lost dog and holds their phone to the necklace, the phone reads the URL from the chip and opens it in a browser. What they see looks like a polished pet ID card: the dog's name at the top, the owner's name, and a green card with the phone number and a one-tap Call button.

Sofia does not run any of this. Think of UVerify as a window to the chain, not a vault holding the pet's data. The data is not locked to any platform and the certificates remain on-chain and accessible long after Sofia moves on to her next project.

Anyone, anywhere in the world, can resolve that URL and read the same data. No account required. No API key. No rate limit imposed by a company that might one day shut down. This is what it means to build on a public permissionless infrastructure.

---

## Sensitive Data Stays Off-Chain

Notice the URL structure. The phone number and owner name are query parameters. They are not stored in the on-chain certificate.

This is intentional. The Cardano blockchain is public and permanent. A phone number written there today will be readable in twenty years and beyond. By keeping contact details in the URL instead, the data stays off-chain. But off-chain does not mean unprotected. UVerify stores a fingerprint of those URL parameters on-chain alongside the certificate. When the chip is scanned, UVerify checks the URL parameters against that fingerprint. If someone reprograms the chip with a different phone number without updating the certificate, verification fails. You cannot silently swap the data.

To legitimately update a phone number, Sofia resubmits the certificate with the new details. Once the new certificate is on-chain, the owner can reprogram the chip themselves using any NFC tool on their phone. No need to send the necklace back. This same integrity check applies beyond pet necklaces. A student diploma can store the graduate's name off-chain in the URL. Anyone who tries to change that name while keeping the original certificate will not get past the fingerprint check. The chain does not hold the name, but it holds the proof that the name has not changed.

---

## Sofia's Complete Stack

Here is a full inventory of what Sofia runs:

- A Cardano wallet. Probably a browser extension she already had.
- An NFC tool to write the URL to the chip. A free app on her phone is enough.

No server. No database. No cloud hosting subscription. No engineering team on retainer for the moment something breaks in the middle of the night.

The best part? Sofia can focus on what she actually loves: making necklaces. She does not need to become a tech company.

That is what it means for a certificate to be a decentralized application. Not marketing language. What sounds technical on the surface actually removes complexity in practice.

---

## Coming Next

The Pet Necklace template ships with UVerify out of the box. But what if your use case does not fit any of the existing templates? What if you produce artisan honey jars, limited-edition sneakers, or antique watches, and you want the verification page to reflect your brand rather than a generic layout?

The next article walks non-technical people through building a custom UVerify template from scratch.

If you want to try it out without a wallet, blockchain knowledge, or any funds, [app.preprod.uverify.io](https://app.preprod.uverify.io) is the place to start. Follow us on [LinkedIn](https://www.linkedin.com/company/uverify-io) for updates on the next article.

Full documentation is at [docs.uverify.io](https://docs.uverify.io).
