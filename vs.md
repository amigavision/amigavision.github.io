---
title: AmigaVision Compared to Other Setups
---

AmigaVision prioritizes low latency, correctness, and consistency across real hardware, FPGA, and emulation — with minimal setup time and a single unified distribution.

There are several other Amiga setups available for various types of hardware. This overview is meant to show how AmigaVision compares to other setups, and what we find important.

## Why AmigaVision?

AmigaVision is not about having the largest collection — it’s about having the **right versions**, running **correctly**, with **minimal latency**, and **minimal time between power-on and play**.

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

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Real Amiga Hardware Supported | ✅ | ✅ | ❌ |
| Mister FPGA Features Supported[^1] | ✅ | ❌ | ⬜️ |
| Analogue Pocket FPGA Features Supported | ✅ | ❌ | ⬜️ |
| Raspberry Pi Supported | ✅ | ✅ | ✅ |
| Emulators Supported | ✅ | ✅ | ✅ |
| PiStorm on Real Amiga Supported | ✅ | ✅ | ⬜️ |
{: .feature-compare data-responsive-table="true" }

## ⏱️ Performance, Accuracy *&* Latency

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Lowest End-To-End Latency | ✅ | ❌ | ❌ |
| Cycle-Accurate Amiga 500 Setup Included <br>(Important for Demos)| ✅ | ❌ | ❌ |
| Low-Latency Joystick & Input Timing | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🕹️ Usability *&* User Experience

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Cold Boot → Playable Game | 5s/10s | Ns/Ns | Ns |
| Workbench With Curated Useful Tools | ✅ | ✅ | ✅ |
| Best ECS/AGA Version Selected By Default | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

<!-- These are not implemented yet
| High-Resolution Game & Demo Thumbnails | ✅ | ❌ | ❌ |
| Game Manuals Accessible on Second Device | ✅ | ❌ | ❌ |
-->

## 📦 Distribution *&* Curation

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Download Size <br> Installed Size | 4 GB<br>9 GB | 19 GB&ndash;34 GB<br>30 GB&ndash;52 GB | 37 GB<br>57 GB |
| Single Download for All Platforms | ✅ | ❌ | ⬜️ |
| Curated, Non-Duplicated Game Library | ✅ | ❌ | ❌ |
| Open-Source License | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 📺 Display *&* Video Output

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| High-Resolution Display Support | ✅ | ✅ | ✅ |
| Analogue Video Output With No Added Lag | ✅ | ❌ | ❌ |
| Per-Game 5×PAL Overscale Support | ✅ | ❌ | ❌ |
| Automatically Selects Correct PAL/NTSC Version | ✅ | ❌ | ❌ |
| Correct NTSC Pixel Aspect Ratio | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🌐 Networking *&* Online Features

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Network Share / Host Filesystem Integration | ✅ | ❌ | ❌ |
| Internet Stack Included (Online Out-of-the-Box) | ✅ | ❌ | ❌ |
| Easy File Transfer Without Removing SD Card | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 💾 Upgrade Model *&* Data Persistence

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Separate Persistent Saves / User Data Volume | ✅ | ❌ | ❌ |
| User Data Survives Upgrades | ✅ | ❌ | ❌ |
| Upgrade Path Documented | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🧱 Filesystem *&* Reliability

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Uses Corruption-Resistant Filesystem (PFS) | ✅ | ✅ | ❌ |
| Designed To Minimize Filesystem Damage | ✅ | ✅ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 📐 CRT, Scaling *&* Display Calibration

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Hand-Tuned Scanline Presets Included | ✅ | ❌ | ❌ |
| Shadow Mask Presets Included | ✅ | ❌ | ❌ |
| External HDMI Scaler Profiles Included <br>(e.g. RetroTink 4K) | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

## 🕰️ Era-Accurate *&* Specialized Setups

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Era-Accurate A500HD & A600HD Setups Included| ✅ | ❌ | ❌ |
| Turn-Key [CD32](/cd32) Setup | ✅ | ❌ | ⬜️ |
{: .feature-compare data-responsive-table="true" }

## 🛠️ Developer *&* Power-User Friendly

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Plain-Text Configuration Files | ✅ | ✅ | ❌ |
| Version-Controlled Setup | ✅ | ❌ | ❌ |
| Deterministic Builds (Same Input → Same Output) | ✅ | ❌ | ❌ |
| Custom `startup-sequence` entries survive upgrades | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

<!-- This may not be that differentiated

## 🏛️ Demo Scene *&* Digital Preservation

|         | AmigaVision | AGS&nbsp;3 | PiMiga |
|---------|:-----------:|:-----:|:------:|
| Demo Scene Content Included | ✅ | ❌ | ❌ |
| Disk Magazines Included | ✅ | ❌ | ❌ |
| Disk Mags Organized Chronologically | ✅ | ❌ | ❌ |
| Preservation-Focused Curation | ✅ | ❌ | ❌ |
{: .feature-compare data-responsive-table="true" }

-->

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

[^1]: Makes use of MiSTer-specific features, like shared network drives, Wi-Fi, etc.



<!--

## Older overview table

Will be folded into the above sections.

| Real Amiga hardware supported     | ✅          | ✅     | ❌     |
| MiSTer FPGA features supported[^1]| ✅          | ❌     | ⬜️    |
| Pocket FPGA features supported    | ✅          | ❌     | ⬜️    |
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
| PiStorm Support on Amiga HW       | ✅          | ✅    | ⬜️     |
| Analogue Video Output with No Lag | ✅          | ❌    | ❌     |
| High-Resolution Game & Demo Thumbnails | ✅     | ❌    | ❌     |
| Single download for all platforms | ✅          | ❌    | ❌     |
| Game manuals accessible on second device [^7] | ✅ | ❌ | ❌     |
| [Zaparoo] NFC Card Support[^8]    | ✅          | ❌    | ❌     |


## Footnotes


[^2]: When a platform supports both MiSTer and Raspberry Pi, the times are given in that order. Otherwise, assume Raspberry Pi boot time. Tests are done with the exact same SD card on all systems.

[^3]: This refers to latency on systems that are variable. On systems that support FPGAs, like MiSTer, the latency will be identical across setups.

[^4]: Will pick the correct NTSC or PAL resolution based on where the game was developed automatically, without you having to know which one is the correct version. Will also pick the best version between the ECS and AGA versions, unless the game has substantial differences, like a different level set. And sometimes there are games that have game-breaking bugs in one or the other version.

[^5]: For more information on 5×PAL Overscale and why it is important for 4K and 1080p dislays, [see this overview](https://amiga.vision/overscale). 

[^7]: Several Amiga launchers have manuals included, but that doesn't do you much good when you are trying to play the game, and they can't be accessed during the game. QR links let you open up the original game manuals on a phone or tablet to use simultaneously with playing the game.

[^8]: Only supported on MiSTer at the moment.

[^n1]: Available on platforms with host filesystem or network share support (e.g. MiSTer); behavior varies by platform.

[^n2]: Includes TCP/IP stack and basic networking tools for use with specialized Amiga internet tools; not intended to provide modern web browsing parity.

[^n3]: Achieved via network share or host filesystem; excludes offline real-Amiga setups without networking hardware.

[^u1]: User data is stored on a separate HDF/volume that is excluded from system updates.

[^f1]: PFS is chosen for improved robustness over FFS; no filesystem is immune to power loss or hardware failure.

[^p1]: Includes a curated selection of demos rather than an exhaustive archive.

[^p2]: Selected disk magazine issues included based on historical relevance.

[^p3]: Chronological ordering reflects original release dates where known.

-->


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
  window.addEventListener('load', () => {
    if (typeof window.littlefoot !== 'function') return;
    window.littlefoot({
      activateOnHover: false,
      dismissOnUnhover: false,
      anchorPattern: /fn/i
    });
  });
</script>
