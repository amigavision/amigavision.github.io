---
title: The best SD cards to use with MiSTer, Raspberry Pi, and handheld emulation setups
---

When picking an SD card to use with the MiSTer, Raspberry Pi, or any SD card-based retro gaming setup, there is the general (and sane!) advice to go for the trusted brands, like SanDisk and Samsung. Also to make sure you have a reliable supplier, since it’s easy to get sold a fake card — if the price is too good to be true, it probably is.

But the other thing to consider is — don’t optimize for speed. Optimize for reliability. The retro gaming files you load on your FPGA/emulation device are not very large. There’s no need to go for cards that optimize for speed, it will not make a meaningful difference. The SD card reader on any of these devices don't deliver meaningful speed increases beyond UHS-I anyway, which is what both of these cards are rated at.

What you want are cards rated for *reliability*. There are two SD cards in particular we want to highlight — and this isn’t an affiliate link thing or anything, just linking you to the manufacturer’s pages:

* **[Samsung Pro Endurance](https://semiconductor.samsung.com/consumer-storage/memory-card/micro-sd-pro-endurance/)** — These are SD cards that trade a little bit of speed for extreme reliability. Rated for constant writes for 16 years (140K hours!), these cards are designed for CCTV cameras, dash cams, etc. 5 year warranty for any failures — although if the card fails, that’s hardly any solace, so make sure you do regular backups.
* **[SanDisk Max Endurance](https://shop.sandisk.com/products/memory-cards/microsd-cards/sandisk-max-endurance-uhs-i-microsd)** — This is SanDisk’s equivalent, rated for 15 years (130K hours) of constant writes, and comes with a 3 year warranty. Note: [Do *not* get the High Endurance version](https://ripitapart.com/2020/07/16/reverse-engineering-and-analysis-of-sandisk-high-endurance-microsdxc-card/), only the Max Endurance uses the longer-lasting technology.

These both use the superior pMLC technology for endurance and reliability instead of the more common and more error-prone TLC technology.

When choosing a card for your SD card based emulation/FPGA setup, it doesn’t make any sense to optimize for speed — rather, choose these (marginally) more expensive variants for extreme reliability.

Only downside? They don’t come in extremely high capacity versions, but if you have more than 256GB of ROMs/disc images, you should probably reconsider how many of those games you can actually play in a human lifetime. 😄
