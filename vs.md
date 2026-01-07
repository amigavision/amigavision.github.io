---
title: AmigaVision Compared to Other Setups
---

There are plenty of other Amiga setups available for various types of hardware. This overview is meant to show how AmigaVision compares to other setups, and what we prioritize.

| Feature                           | AmigaVision | AGS 3 | RetroPie | PiMiga |
|-----------------------------------|:-----------:|:-----:|:--------:|:------:|
| Real Amiga hardware supported     | ✅          | ✅     | ❌       | ❌     |
| MiSTer FPGA features supported[^1]| ✅          | ❌     | N/A      | N/A   |
| Pocket FPGA features supported    | ✅          | ❌     | N/A      | N/A   |
| Raspberry Pi supported            | ✅          | ✅     | ✅       | ✅     |
| Emulators supported               | ✅          | ✅     | ✅       | ✅     |
| Open Source License               | ✅          | ❌     | ✅       | ❌     |
| Download Size                     | 4GB         | 19GB  |          | 37GB   |
| Size on disk                      | 9GB         | 30GB  |          |        |
| Time from boot to game select[^2] | 5s/Ns.      | Ns/Ns | Ns       | Ns     |
| Lowest Audio Latency [^3]         | ✅          | ❌     | ❌       | ❌     |
| Lowest Input Latency [^3]         | ✅          | ❌     | ❌       | ❌     |
| Lowest Output Latency [^3]        | ✅          | ❌     | ❌       | ❌     |
| No duplication of ECS/AGA games   | ✅          | ❌     | N/A      | ❌     |
| Correct NTSC/PAL version [^4]     | ✅          | ❌     | ❌       | ❌     |
| Per-game 5x overscale support[^5] | ✅          | ❌     | ❌       | ❌     |
| Cycle-accurate Amiga 500 Setup included | ✅    | ❌    | ❌        | ❌     |
| High-resolution Display Support   | ✅          | ✅    | ✅        | ✅     |
| PiStorm Support on Amiga HW       | ✅          | ✅    | N/A      | N/A    |
| Lag-free Analogue Video Output    | ✅          | ❌    | ❌       | ❌      |
| Curated Lists of Games & Demos [^6]| ✅         | ❌    |          |        |
| High-Resolution Game & Demo Thumbnails | ✅     | ❌    | ❌       | ❌     |
| Single download for all platforms | ✅          | ❌    | ❌       | ❌     |
| Original manuals accessible via QR [^7] | ✅    | ❌    | ❌       | ❌     |
| [Zaparoo] NFC Card Support[^8]    | ✅          | ❌    | ❌       | ❌     |



<!-->

|                                   |             |       |          |        |
|                                   |             |       |          |        |

-->

[^1]: Makes use of MiSTer-specific features, like shared network drives, Wi-Fi, etc.

[^2]: When a platform supports both MiSTer and Raspberry Pi, the times are given in that order. Otherwise, assume Raspberry Pi boot time. Tests are done with the exact same SD card on all systems.

[^3]: This refers to latency on systems that are variable. On systems that support FPGAs, like MiSTer, the latency will be identical across setups.

[^4]: Will pick the correct NTSC or PAL resolution based on where the game was developed automatically, without you having to know which one is the correct version.

[^5]: For more information on 5×PAL Overscale and why it is important for 4K and 1080p dislays, [see this overview](https://amiga.vision/overscale). 

[^6]: "Top 100" lists and similar does not mean anything is curated.

[^7]: Several Amiga launchers have manuals included, but that doesn't do you much good when you are trying to play the game, and they can't be accessed during the game. QR links let you open up the original game manuals on a phone or tablet to use simultaneously with playing the game.

[^8]: Only supported on MiSTer at the moment.

[Zaparoo]:https://zaparoo.org
