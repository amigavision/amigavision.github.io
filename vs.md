---
title: AmigaVision Compared to Other Setups
---

AmigaVision prioritizes low latency, correctness, and consistency across real hardware, FPGA, and emulation — with minimal setup time and a single unified distribution.

There are several other Amiga setups available for various types of hardware. This overview is meant to show how AmigaVision compares to other setups, and what we find important.

## Why AmigaVision?

AmigaVision is not about having the largest collection — it’s about having the right versions, running correctly, with minimal latency, with optimal performance on supported hardware.

AmigaVision focuses on:

* Hardware-accurate behavior
* Zero-lag video and input/output paths where possible
* Intelligent version selection (PAL/NTSC, ECS/AGA)
* A single, consistent experience across real Amigas, FPGA, and emulation

The goal is to have a setup that feels like using a well-maintained Amiga rooted in the demo scene and games development at the time — not a collection of compromises.

## Hardware *&* Platform Support

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Real Amiga Hardware Supported | ✅ | ✅ | ❌ |
| Mister FPGA Features Supported | ✅ | ❌ | ▫️◽️◻️⬜️ |
| Analogue Pocket FPGA Features Supported | ✅ | ❌ | ◻️ |
| Raspberry Pi Supported | ✅ | ✅ | ✅ |
| Emulators Supported | ✅ | ✅ | ✅ |
| PiStorm On Real Amiga Supported | ✅ | ✅ | ◻️ |

## Performance, Accuracy *&* Latency

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Lowest End-To-End Latency | ✅ | ❌ | ❌ |
| Cycle-Accurate Amiga 500 Setup Included <br>(Important for Demos)| ✅ | ❌ | ❌ |
| Preserves Original Timing & Behavior | ✅ | ❌ | ❌ |
| Low-Latency Joystick & Input Timing | ✅ | ❌ | ❌ |

## Usability *&* User Experience

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Cold Boot → Playable Game | 5s/10s | Ns/Ns | Ns |
| Workbench With Curated Useful Tools | ✅ | ✅ | ✅ |
| Best ECS/AGA Version Selected By Default | ✅ | ❌ | ❌ |
| High-Resolution Game & Demo Thumbnails | ✅ | ❌ | ❌ |
| Game Manuals Accessible on Second Device | ✅ | ❌ | ❌ |

## Distribution, Maintenance *&* Curation

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Download / Installed Size | 4GB / 9GB | 19GB / 30GB | 37GB / 57GB |
| Single Download for All Platforms | ✅ | ❌ | ◻️ |
| Curated, Non-Duplicated Game Library | ✅ | ❌ | ❌ |
| Known-Bad Game Versions Excluded | ✅ | ❌ | ❌ |
| Consistent Naming & Metadata | ✅ | ❌ | ❌ |
| Open-Source License | ✅ | ❌ | ❌ |

## Display *&* Video Output

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| High-Resolution Display Support | ✅ | ✅ | ✅ |
| Analogue Video Output With No Added Lag | ✅ | ❌ | ❌ |
| Per-Game 5×PAL Overscale Support | ✅ | ❌ | ❌ |
| Automatically Selects Correct PAL/NTSC version | ✅ | ❌ | ❌ |
| Correct NTSC Pixel Aspect Ratio | ✅ | ❌ | ❌ |

## Networking *&* Online Features

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Network Share / Host Filesystem Integration | ✅ | ❌ | ❌ |
| Internet Stack Included (Online Out-of-the-Box) | ✅ | ❌ | ❌ |
| Easy File Transfer Without Removing SD Card | ✅ | ❌ | ❌ |


## Upgrade Model *&* Data Persistence

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Separate Persistent Saves / User Data Volume | ✅ | ❌ | ❌ |
| User Data Survives Upgrades | ✅ | ❌ | ❌ |
| Upgrade Path Documented | ✅ | ❌ | ❌ |

## Filesystem *&* Reliability

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Uses Corruption-Resistant Filesystem (PFS) | ✅ | ✅ | ❌ |
| Designed To Minimize Filesystem Damage | ✅ | ✅ | ❌ |

## CRT, Scaling *&* Display Calibration

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Hand-Tuned Scanline Presets Included | ✅ | ❌ | ❌ |
| Shadow Mask Presets Included | ✅ | ❌ | ❌ |
| External HDMI Scaler Profiles Included <br>(e.g. RetroTink 4K) | ✅ | ❌ | ❌ |

## Era-Accurate *&* Specialized Setups

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Era-Accurate A500HD & A600HD Setups Included| ✅ | ❌ | ❌ |
| Turn-Key CD32 Setup | ✅ | ❌ | ◻️ |

## Developer *&* Power-User Friendly

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Plain-Text Configuration Files | ✅ | ✅ | ❌ |
| Version-Controlled Setup | ✅ | ❌ | ❌ |
| Deterministic Builds (Same Input → Same Output) | ✅ | ❌ | ❌ |

## Demo Scene *&* Digital Preservation

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Demo Scene Content Included[^P1] | ✅ | ❌ | ❌ |
| Disk Magazines Included[^P2] | ✅ | ❌ | ❌ |
| Disk Mags Organized Chronologically[^P3] | ✅ | ❌ | ❌ |
| Preservation-Focused Curation[^P4] | ✅ | ❌ | ❌ |


### Legend
✅ Supported  
❌ Not Supported  
◻️ Not Applicable to Platform

## Any errors in this comparison?

We strive to keep this overview accurate, and recognize that we can't always be up-to-date on everything as the projects evolve. If you see anything that mis-represents any of the projects mentioned, [file a bug in our issue tracker](https://github.com/amigavision/AmigaVision/issues), and we will correct it.

## Frequently Asked Questions

### PiMiga & AGS seem to have way more games and bigger size images?

They do — and that also means:

- Duplicate AGA/ECS titles
- Incorrect versions
- Broken releases
- Erroneous PAL/NTSC variants

AmigaVision intentionally curates **fewer, verified titles** so you don’t need deep Amiga knowledge to get the correct experience. And we are not leaving anything out, just removing unnecessary content that we don't consider relevant.

### Why not RetroArch or generic emulation?
Amiga emulation is unusually sensitive to:

- Cycle timing
- Chipset behavior
- Input latency
- Display scaling

Generic emulator stacks optimize for flexibility.  
AmigaVision optimizes for **Amiga-specific correctness**.

### Why does latency matter this much?
Because the Amiga was designed around:

- CRT displays
- Direct joystick polling
- Tight audio/video synchronization

Added latency fundamentally changes how games *feel*, even if they can seem to look correct in a screenshot or video.

### Who is AmigaVision for?
- People who care how games *play*, not just how many there are  
- FPGA and real-hardware users who want parity  
- Anyone tired of tweaking configs instead of playing


## What AmigaVision is Not

### AmigaVision is not a “maximum content” distribution
It does not aim to include every known dump, crack, or regional variant. Games are selected and curated so that the correct version runs by default.

### AmigaVision is not a RetroArch-style abstraction layer
It does not try to make the Amiga behave like a generic “core” inside a universal frontend. Amiga-specific behavior is preserved rather than normalized, and it has an Amiga-native launcher.

### AmigaVision is not a “tweak it yourself” hobby project
You should not need deep Amiga knowledge, endless config edits, or per-game fixes just to get accurate results.

### AmigaVision is not trying to replace original hardware — instead aiming for making it easier to use
Real Amigas, original disks, and hands-on experience is respected — AmigaVision exists to make those experiences easier to access, not to redefine or obsolete them. The AmigaVision team was part of this experience in the 80s and 90s, and treasures it for the real revolution it was at the time.


<!--

|                                   |             |       |          |        |
|                                   |             |       |          |        |

-->

<!--

## Older overview table

Will be folded into the above sections.

| Feature                           | AmigaVision | AGS&nbsp;3 | PiMiga |
|-----------------------------------|:-----------:|:-----:|:------:|
| Real Amiga hardware supported     | ✅          | ✅     | ❌     |
| MiSTer FPGA features supported[^1]| ✅          | ❌     | ◻️    |
| Pocket FPGA features supported    | ✅          | ❌     | ◻️    |
| Raspberry Pi supported            | ✅          | ✅     | ✅     |
| Emulators supported               | ✅          | ✅     | ✅     |
| Open Source License               | ✅          | ❌     | ❌     |
| Download/Install Size             | 4GB/9GB| 19GB/30GB| 37GB/57GB|
| Cold Boot → Selecting a Game[^2]  | 5s/Ns.      | Ns/Ns | Ns     |
| Lowest Audio/Input/Output Latency [^3] | ✅     | ❌     | ❌     |
| Workbench setup with useful tools | ✅          | ✅     | ✅     |
| Automatically Selects Best PAL/NTSC & ECS/AGA Version
 [^4] | ✅          | ❌     | ❌     |
| Per-game 5x overscale support[^5] | ✅          | ❌     | ❌     |
| Cycle-accurate Amiga 500 Setup included | ✅    | ❌     | ❌     |
| High-resolution Display Support   | ✅          | ✅     | ✅     |
| PiStorm Support on Amiga HW       | ✅          | ✅    | ◻️     |
| Analogue Video Output with No Lag | ✅          | ❌    | ❌     |
| High-Resolution Game & Demo Thumbnails | ✅     | ❌    | ❌     |
| Single download for all platforms | ✅          | ❌    | ❌     |
| Game manuals accessible on second device [^7] | ✅ | ❌ | ❌     |
| [Zaparoo] NFC Card Support[^8]    | ✅          | ❌    | ❌     |


## Footnotes

[^1]: Makes use of MiSTer-specific features, like shared network drives, Wi-Fi, etc.

[^2]: When a platform supports both MiSTer and Raspberry Pi, the times are given in that order. Otherwise, assume Raspberry Pi boot time. Tests are done with the exact same SD card on all systems.

[^3]: This refers to latency on systems that are variable. On systems that support FPGAs, like MiSTer, the latency will be identical across setups.

[^4]: Will pick the correct NTSC or PAL resolution based on where the game was developed automatically, without you having to know which one is the correct version. Will also pick the best version between the ECS and AGA versions, unless the game has substantial differences, like a different level set. And sometimes there are games that have game-breaking bugs in one or the other version.

[^5]: For more information on 5×PAL Overscale and why it is important for 4K and 1080p dislays, [see this overview](https://amiga.vision/overscale). 

[^7]: Several Amiga launchers have manuals included, but that doesn't do you much good when you are trying to play the game, and they can't be accessed during the game. QR links let you open up the original game manuals on a phone or tablet to use simultaneously with playing the game.

[^8]: Only supported on MiSTer at the moment.

[^n1]: Available on platforms with host filesystem or network share support (e.g. MiSTer); behavior varies by platform.
[^n2]: Includes TCP/IP stack and basic networking tools; not intended to provide modern web browsing parity.
[^n3]: Achieved via network share or host filesystem; excludes offline real-Amiga setups without networking hardware.

[^u1]: User data is stored on a separate HDF/volume that is excluded from system updates.
[^u2]: Applies when following documented upgrade procedures; some releases may require a clean install.
[^u3]: Documentation explicitly states when clean installs are required versus in-place upgrades.

[^f1]: PFS is chosen for improved robustness over FFS; no filesystem is immune to power loss or hardware failure.
[^f2]: System volumes are read-only by default, with user data isolated to reduce risk of corruption.

[^d1]: Presets are provided for supported platforms (e.g. MiSTer); not applicable to all outputs.
[^d2]: Optional presets; disabled by default unless explicitly enabled by the user.
[^d3]: Profiles are provided as presets or recommendations; requires compatible external hardware.

[^p1]: Includes a curated selection of demos rather than an exhaustive archive.
[^p2]: Selected disk magazine issues included based on historical relevance.
[^p3]: Chronological ordering reflects original release dates where known.
[^p4]: Focuses on historically accurate presentation rather than modern enhancements.

[^e1]: Optional configurations intended to reflect specific historical hardware periods; not default setups.
[^e2]: Availability depends on platform support (e.g. MiSTer).

[^i1]: Supported controllers vary by platform; keyboard and mouse remain available.
[^i2]: Implemented via intelligent input mapping or WHDLoad options where applicable.
[^i3]: Supported through CD32-compatible mappings; not all software uses additional buttons.

[^s1]: System volumes are read-only by default; this reduces persistence risk but does not claim absolute immunity.
[^s2]: Write access can be enabled intentionally by advanced users.

-->


[Zaparoo]:https://zaparoo.org
