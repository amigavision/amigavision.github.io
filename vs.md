---
title: AmigaVision vs. Other Setups
---

[AmigaVision] is the ultimate Amiga games *&* demo scene setup for MiSTer *&* Pocket FPGAs, Raspberry Pi + emulators — and Amiga 1200, 4000 *&* CD32.

It prioritizes low latency, correctness, and consistency across real hardware, FPGA, and emulation — with minimal setup time and a single unified distribution.

There are several other Amiga setups available for various types of hardware. This overview is meant to show how AmigaVision compares to other setups, and what we find important.

## Why AmigaVision?

AmigaVision is not about having the largest collection of files — it’s about having the **right versions**, running **correctly**, with **minimal latency**, and **minimal time between power-on and play**.

### Core Design Priorities:

### ⏱️ Cold Boot → Playable Game
Time-to-fun matters. From power-on to interacting with a game, the entire startup path is designed to be short, deterministic, and free of unnecessary layers, configuration screens, or guesswork.

### 🧠 Intelligent Version Selection
The correct PAL/NTSC and ECS/AGA version is selected automatically. You shouldn’t need deep Amiga knowledge to know which variant runs correctly, has the right timing, or avoids known bugs — AmigaVision makes that choice for you.

### ⏱️ Lowest End-To-End Latency & Hardware-Accurate Behavior
Input, video, and audio timing are treated as a single system. Wherever possible, buffering, abstraction layers, and latency-adding defaults are avoided so games behave and *feel* as close to real hardware as possible.

### 📦 Download / Installed Size
Smaller images are a result of curation, not a limitation. Duplicate titles, broken releases, incorrect regional variants, and unused versions are intentionally excluded to keep the system efficient — with respect for both your time and your storage space.

### 🧩 A Single, Consistent Experience Across Platforms
Real Amigas, FPGA, and emulation should behave the same. Platform-specific quirks and “this works differently over there” setups are a non-starter — the goal is one coherent system with consistent behavior everywhere it runs.

---

**Everything else in AmigaVision — platform support, configuration choices, filesystem layout, and library curation — flows from these decisions.**

The goal is to have a setup that feels like using a well-maintained Amiga rooted in the demo scene and games development from back in the day — not a collection of compromises.


<table style="font-weight: 700; width: auto; margin-left: auto">
  <tr>
    <td style="text-align: center" rowspan="3"> Legend </td>
    <td> ✅ Supported </td>
  </tr>
  <tr>
    <td> ❌ Not Supported </td>
  </tr>
  <tr>
    <td> ⬜️ Not Applicable to Platform </td>
  </tr>
</table>

## 🖥️ Hardware *&* Platform Support

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Real Amiga Hardware Supported | ✅ | ✅ | ❌ |
| Mister FPGA Supported | ✅ | ❌[^1] | ⬜️ |
| Analogue Pocket FPGA Supported | ✅ | ❌ | ⬜️ |
| Raspberry Pi Supported | ✅ | ✅ | ✅ |
| Emulators Supported | ✅ | ✅ | ✅ |
| PiStorm on Real Amiga Supported | ✅ | ✅ | ⬜️ |
{: .feature-compare data-responsive-table="true" }

## ⏱️ Performance, Accuracy *&* Latency

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Lowest End-To-End Latency[^2] | ✅ | ❌ | ❌ |
| Cycle-Accurate Amiga 500 Setup Included <br>(Important for Demos)| ✅ | ❌ | ❌ |
| Low-Latency Joystick & Input Timing[^3] | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🕹️ Usability *&* User Experience

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Cold Boot → Playable Game — MiSTer[^4] | 13s | 35s[^1] | ⬜️ |
| Cold Boot → Playable Game — Raspberry Pi |  |  |  |
| Cold Boot → Playable Game — Emulator[^22] | 10s | 1m 6s | ⬜️ |
| Workbench With Curated Useful Tools | ✅ | ✅ | ✅ |
| Optimal ECS/AGA & PAL/NTSC  Versions Selected[^5] | ✅ | ❌ | ❌ |
| Zaparoo NFC Card Support[^10] | ✅  | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

<!-- These are not implemented yet
| High-Resolution Game & Demo Thumbnails | ✅ | ❌ | ❌ |
| Game Manuals Accessible on Second Device | ✅ | ❌ | ❌ |
-->

## 📦 Distribution *&* Curation

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Download Size | 4&nbsp;GB | 17&#8209;34&nbsp;GB[^6] | 37&nbsp;GB |
| Installed size | 9&nbsp;GB | 30&#8209;52&nbsp;GB[^6] | 57&nbsp;GB |
| Single Download for All Platforms[^21] | ✅ | ❌ | ⬜️ |
| Curated, Non-Duplicated Game Library[^7] | ✅ | ❌ | ❌ |
| Open-Source License | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 📺 Display *&* Video Output

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| High-Resolution RTG Display Support | ✅ | ✅ | ✅ |
| Analog Video Output With No Added Lag[^8] | ✅ | ❌ | ❌ |
| Per-Game 5×PAL Overscale Support[^9] | ✅ | ❌ | ❌ |
| Correct NTSC Pixel Aspect Ratio[^11] | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🌐 Networking *&* Online Features

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Easy Network File Transfer to the Amiga Without Removing SD Card[^12] | ✅ | ❌ | ❌ |
| Internet Stack Included (Online Out-of-the-Box)[^13] | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 💾 Upgrade Model *&* Data Persistence

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Separate Persistent Saves / User Data Volume[^14] | ✅ | ✅ | ❌ |
| User Data Survives Upgrades | ✅ | ❌ | ❌ |
| Upgrade Path Documented | ✅ | ❌ | ❌ |
| Custom `startup-sequence` entries survive upgrades[^20] | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🧱 Filesystem *&* Reliability

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Uses Corruption-Resistant Filesystem (PFS) | ✅ | ✅ | ❌ |
| Designed To Minimize Filesystem Damage[^15] | ✅ | ✅ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 📐 CRT, Scaling *&* Display Calibration

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Scanline Presets Included[^16] | ✅ | ❌ | ❌ |
| Shadow Mask Presets Included[^17] | ✅ | ❌ | ❌ |
| External HDMI Scaler Profiles Included <br>(e.g. RetroTink 4K) | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🕰️ Era-Accurate *&* Specialized Setups

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Era-Accurate A500HD & A600HD Setups Included[^18] | ✅ | ❌ | ❌ |
| Turn-Key [CD32](/cd32) Setup[^19] | ✅ | ❌ | ⬜️ |
{: .feature-compare data-responsive-table="true" }

<!-- This may not be that differentiated

## 🏛️ Demo Scene *&* Digital Preservation

|   | AmigaVision | AGS&nbsp;3 | PiMiga&nbsp;5 |
|---|:-----------:|:----------:|:-------------:|
| Demo Scene Content Included | ✅ | ❌ | ❌ |
| Disk Magazines Included | ✅ | ❌ | ❌ |
| Disk Mags Organized Chronologically | ✅ | ❌ | ❌ |
| Preservation-Focused Curation | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

-->

## Any errors in this comparison?

We strive to keep this overview accurate, and recognize that we can't always be up-to-date on everything as the projects evolve. If you see anything that mis-represents any of the projects mentioned, [file a bug in our issue tracker](https://github.com/amigavision/AmigaVision/issues), and we will correct it.

## Download AmigaVision

You can [download AmigaVision here](/https://amiga.vision/download).

## Frequently Asked Questions

### PiMiga & AGS seem to have way more games and bigger size images?

They do — and that also means:

- Duplicate AGA/ECS titles
- Incorrect versions
- Broken releases
- Erroneous PAL/NTSC variants
- Various random content (photo collections, etc)

AmigaVision intentionally curates **fewer, verified titles** so you don’t need deep Amiga knowledge to get the correct experience. And it is not leaving anything out, just removing unnecessary and duplicate content that is not considered relevant.

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
- FPGA, emulator and real-hardware users who want parity with the original experience
- Anyone tired of tweaking configs instead of playing


## What AmigaVision is *Not*

### AmigaVision is *not* a “maximum content” distribution
It does not aim to include every known dump, crack, or regional variant. Games are selected and curated so that the correct version runs by default.

### AmigaVision is *not* a RetroArch-style abstraction layer
It does not try to make the Amiga behave like a generic “core” inside a universal frontend. Amiga-specific behavior is preserved, and it has an Amiga-native launcher that works identically on every setup.

### AmigaVision is *not* a “tweak it yourself” hobby project
You should not need deep Amiga knowledge, endless config edits, or per-game fixes just to get accurate results.

### AmigaVision is *not* trying to replace original hardware — instead aiming to make it easier to use
Real Amigas, original disks, and hands-on experience is respected — AmigaVision exists to make those experiences easier to access, not to redefine or obsolete them. The AmigaVision team was part of this experience in the 80s and 90s, and treasures it for the real revolution it was at the time.

<!-- Footnotes -->

[^1]: AGS *can* be made to work with MiSTer if you edit out a lot of the `startup-sequence`, but does not run on MiSTer out of the box. It also does not make use of MiSTer-specific features, like shared network drives, MiSTer's RTG high resolution graphics support, etc.
[^2]: This includes input, audio and output latency, and refers to latency on systems that are variable, like Raspberry Pi. On systems that support FPGAs, like MiSTer, the latency will be generally be identical across setups, if the setup runs on MiSTer.
[^3]: AmigaVision uses 1ms USB polling on systems that support it, like MiSTer and Raspberry Pi. If running emulators on a desktop OS like Windows, macOS or Linux, it is up to the operating system settings.
[^4]: How long it takes from turning on a device to get to the game selection screen. When a platform supports both MiSTer and Raspberry Pi, the times are given in that order. Otherwise, assume Raspberry Pi boot time. Exact same SD card on all systems. Desktop load times will be comparable in relative terms.
[^5]: AmigaVision picks the correct NTSC or PAL resolution based on where the game was developed, you don't have to know which one is the correct version. We also pick the best version between the ECS and AGA versions — unless the game has substantial differences, like a different level set.
[^6]: AGS has multiple different setups with widely different file sizes, so this lists the lower and upper range.
[^7]: AmigaVision excludes any broken and redundant versions of games. AmigaVision also has many useful curated lists made by various people online, top lists, and games organized by publisher, by musician, etc.
[^8]: Most ways to output Amiga to analog CRT TVs from computers and Raspberry Pi introduce latency. AmigaVision is configured for zero-lag MiSTer analog output, and on the Raspberry Pi via the RGB-Pi 2 adapter, supported in RePlayOS, which is what AmigaVision is built on.
[^9]: For 4K and 1080p displays, 5×PAL Overscale will let you run a lot of games using much more of your display. This is currently supported on MiSTer, and we are working on getting it supported in WinUAE, FS-UAE, and Amiberry too. [More about 5×PAL Overscale here](/overscale)
[^10]: [Zaparoo] is a system that lets you launch games directly using physical NFC games instead of navigating menus. Currently supported on MiSTer, Raspberry Pi version coming soon.
[^11]: Most Amiga setups scale NTSC resolutions incorrectly. NTSC does not have square pixels, instead they use taller pixels. This is currently supported on MiSTer and Amiberry. [More about using the correct 5:6 Pixel Aspect Ratio here](/ntsc)).
[^12]: This refers to a shared drive mounted inside the Amiga that you can transfer files in and out using a computer. Currently supported on MiSTer, and we hope it will be available on Raspberry Pi shortly. Not available on real hardware without network hardware.
[^13]: Includes TCP/IP stack and basic networking tools for use with specialized Amiga internet tools; not intended to provide modern web browsing parity.
[^14]: User data is stored on a separate HDF/volume that is excluded from system updates.
[^15]: PFS is chosen for improved robustness over Amiga's default FFS file system; no filesystem is immune to power loss or hardware failure.
[^16]: AmigaVision defaults to using CRT scanlines on all supported platforms, since this is how Amiga games and demos looked like in the past. You can of course disable these, but friends don't let friends play Amiga games with sharp pixels. 😉
[^17]: Shadow masks emulate the way CRT TVs Supplied on platforms that support shadow masks, like MiSTer.
[^18]: Workbench setups for AmigaOS 1.3 and AmigaOS 2.0. The standard AmigaVision setup uses AmigaOS 3.1.
[^19]: This is MiSTer-specific, and lets you load CD32 games directly from the menu. For emulator setups, there is usually specific functionality to play CD32 games.
[^20]: AmigaVision gives you a custom `startup-sequence` that gets stored on the separate Saves drive that you keep between upgrades, so you can customize AmigaVision without losing those customizations when a new version is available.
[^21]: Some setups have different files for every setup — e.g. one for RetroArch, one for MiSTer, one for Raspberry Pi, one for real hardware, etc. This means you need to juggle many different versions of the same setup if you have more than one device where you use Amiga. AmigaVision has a single setup that works across all platforms.
[^22]: Tests done on the only Amiga emulator that runs on Windows, Mac and Linux: [FS-UAE](https://fs-uae.net). Tests done on a MacBook M1 with SSD, with CPU settings set to Amiga 1200, but with uae_cpu_speed=max.

[AmigaVision]:https://amiga.vision
[Zaparoo]:https://zaparoo.org


<script>
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Clickable headings
       =============================== */

    const headings = document.querySelectorAll(
        "h2[id], h3[id], h4[id], h5[id], h6[id]"
    );

    headings.forEach((heading) => {
        heading.classList.add("clickable-heading");

        heading.addEventListener("click", function () {
            window.location.hash = `#${heading.id}`;
        });

        const linkIcon = document.createElement("span");
        linkIcon.innerHTML = " 🔗";
        linkIcon.style.opacity = "0";
        linkIcon.style.transition = "opacity 0.2s";
        linkIcon.style.fontSize = "80%";

        heading.appendChild(linkIcon);

        heading.addEventListener("mouseover", () => {
            linkIcon.style.opacity = "1";
        });
        heading.addEventListener("mouseout", () => {
            linkIcon.style.opacity = "0";
        });
    });

    /* ==========================================
       Responsive feature tables on mobile
       ========================================== */

    (function () {
        function buildMobileTables(table) {
            const headers = Array.from(
                table.querySelectorAll("thead th")
            ).slice(1).map(th => th.textContent.trim());

            const rows = Array.from(table.querySelectorAll("tbody tr"));
            const container = document.createElement("div");
            container.className = "table-mobile";

            rows.forEach(row => {
                const cells = Array.from(row.querySelectorAll("th, td"));
                if (cells.length < 2) return;

                const featureName = cells[0].textContent.trim();
                const values = cells.slice(1).map(td => td.innerHTML);

                const mobileTable = document.createElement("table");
                mobileTable.className = "table-mobile-inner";

                mobileTable.innerHTML = `
                    <thead>
                        <tr>
                            <th colspan="${headers.length}">
                                ${featureName}
                            </th>
                        </tr>
                        <tr>
                            ${headers.map(h => `<th>${h}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${values.map(v => `<td>${v}</td>`).join("")}
                        </tr>
                    </tbody>
                `;

                container.appendChild(mobileTable);
            });

            return container;
        }

        function enhanceTables() {
            document
                .querySelectorAll("table.feature-compare[data-responsive-table='true']")
                .forEach(table => {

                    table.classList.add("table-desktop");

                    // Insert the mobile version right after the table
                    if (!table.nextElementSibling || !table.nextElementSibling.classList.contains("table-mobile")) {
                        table.insertAdjacentElement("afterend", buildMobileTables(table));
                    }
                });
        }

        enhanceTables();
    })();

});
</script>

<!-- Footnotes → Tooltips -->
<script src="{{ '/littlefoot.js' | relative_url }}"></script>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const init =
      (window.littlefoot && window.littlefoot.littlefoot) ? window.littlefoot.littlefoot :
      (typeof window.littlefoot === "function") ? window.littlefoot :
      null;

    if (!init) return;

    init({
      activateOnHover: false,
      dismissOnUnhover: false,
      anchorPattern: /fn/i
    });
  });
</script>
