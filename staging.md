---
title: AmigaVision 2026.11.29 Adds High-Resolution Launcher, Amiga 500, 600, 1000, 2000, 3000, CDTV + PiStorm + WinUAE Support, 281 Game Updates + 7 Exclusive New Games
published: true
---

AmigaVision is the ultimate Amiga games *&* demo scene setup for emulators, MiSTer *&* Pocket FPGAs, Raspberry Pi, and real Amiga hardware.

To find out more, visit the [AmigaVision](https://amiga.vision) site.

## 💻 Platform Support

Before we get into the details of this particular update, here are the platforms currently supported — with dedicated, tested *&* handcrafted configurations — in this release:

* Original Amiga hardware, both ECS *&* AGA: Amiga 500, 600, 1000, 1200, 2000, 3000, 4000 — as well as CDTV and CD32.
* Mac, Linux and Windows support across Amiberry, Copperline *&* WinUAE emulators.
* Raspberry Pi 5 & 4.
* MiSTer, MiST, Analogue Pocket FPGAs.
* Any RetroArch-based emulator setup.
* iOS *&* Android emulators.
* TheA500 Mini.
* Original Amiga hardware with PiStorm accelerators: Amiga 500, 600 *&* 1200.

## ✅ Summary {#summary}

* **[New high-resolution launcher](#hi-res)** — Browse the collection in a new high-resolution mode, with ~30,000 1:1 pixel-perfect screenshots *&* an improved layout. High resolution is now the default on AGA & ECS setups, with smooth scrolling *&* faster navigation.
* **[7 exclusive new games](#exclusives)** — Rainbow Islands AGA, Windjammers, Battlezone, Joust, Donkey Kong Jr, Super Mario Bros (Master System) *&* Rod·Land: The Lost Pyramids bring several new arcade classics and console ports to your Amiga.
* **[OCS/ECS support](#ecs)** — A dedicated new setup for Amiga 500, 600, 1000, 2000, 3000 and CDTV that show *only* the compatible games and demos, so you won't have to hunt down the ECS version or accidentally select the AGA version. We also provide optimized launcher artwork.
* **[Windows installer *&* more emulator choices](#windows)** — Guided installations for Amiberry, WinUAE, and Copperline, with emulator detection, presets, and shaders to ensure you get the best out of AmigaVision.
* **[PiStorm support](#pistorm)** — New dedicated variant for Amiga 500/600 & Amiga 1200 setups with PiStorm.
* **[122 added game configurations](#games)** — Including new entries like **Babylonian Twins**, **Bograts**, **Sixth Sense Investigations**, **Commando AGA**, and **Double Dragon AGA**, plus editors, expansion missions, and variants listed separately.
* **["Now Playing" Support in the Launcher](#launcher)** — The launcher now shows you which song is playing, and CD32 Play/Pause button support has been added.
* **[New curated game lists](#picks)** — Explore Amiga Bill’s Modern Picks and Mr. Replay’s 50 Recommended Games.
* **[Demo scene additions *&* fixes](#demos)** — New demos, cracktros, disk magazines, and a Dealer Demos category, plus 11 new demos added to the launcher.
* **[VistaPro *&* Scenery Animator](#app-configurations)** — Added application configurations for these classic Amiga landscape renderers.
* **[146 additional game manual QR codes](#manuals)** — Even more games now link directly to their game manuals in addition to the 3,000 existing ones.
* **[Favorites, Zaparoo *&* SAM fixes](#favorites)** — Favorites now show QR codes for game manuals, and omit ranking numbers when added from ordered lists. Long filenames work again, and launching via NFC cards or Super Attract Mode also works again.
* **[Game updates throughout the collection](#updated-games)** — Updated packages for **159 existing game entries**, including language and hardware variants, including **Cannon Fodder**, **Banshee**, **Superfrog**, and **UFO: Enemy Unknown**.
* **[Workbench Dark Mode](#darkmode)** — A dark theme for Workbench, available from the Screen Mode menu.
* **[Updated WHDLoad *&* GenericKick support](#whdload)** — Updated WHDLoad and broader support for titles without a dedicated installer.
* **[Livestream-safe browsing](#livestream)** — NSFW thumbnails are replaced with clear placeholders, and random selections exclude NSFW-tagged entries, so you won't accidentally launch one of those games. An optional script removes adult titles and their installed content.
* **[More display corrections *&* control](#pal-ntsc)** — A broad NTSC aspect-ratio correction was made on MiSTer, several games received PAL/NTSC fixes, persistent video-mode overrides for single-standard CRTs, and an option to disable MiSTer [overscale](https://amiga.vision/overscale) for non-1080p/4K resolutions or for livestreaming that does not use full screen displays.
* **[Expanded support for original hardware](#kickstart)** — We now handle support for drives larger than 4GB with Kickstart 3.0/3.1 on original hardware. This lets the original Amiga 1200, Amiga 4000, and CD32 hardware be used without physically replacing their Kickstart chips.

## 🖥️ New High-Resolution Launcher {#hi-res}

The launcher is where every AmigaVision session begins, and this release gives it a new, clean look, with pixel art handcrafted by demo scene legends!

![AmigaVision Launcher](https://amiga.vision/images/launcher.png)

The new **high-resolution mode** is now the default both on AGA *&* ECS setups, with an improved layout and ~30,000 high-resolution 1:1 pixel-perfect screenshots and box art photos. The launcher adds a refreshed full-width high-resolution layout, transparency, and copper color gradients. The ECS variant has chipset-appropriate color-reduced artwork.

Additionally:

* **Better sequel sorting** — Roman numerals now sort correctly alongside traditionally numbered sequels. E.g. "Turrican", "Turrican II", "Turrican 3" are in the correct order.
* **Clearer menus** — Separators used to group related entries, with navigation skipping over them automatically.
* **Responsive image loading** — Navigating to another entry now aborts the previous image load, avoiding unnecessary delays.
* **Smoother scrolling *&* faster list navigation** — Large lists open faster, and scrolling has been accelerated.
* **Type more letters to jump to a title** — Narrow down your selection by typing a title's first few letters, rather than just its first letter.

You can switch between High and Medium resolutions in the launcher's Options menu. The selection lasts until reboot, so you can try the new presentation and choose what works best on your display.

## 🕹️ 7 Exclusive New Games {#exclusives}

Three arcade classics make their way to AmigaVision in new Amiga conversions: **Rainbow Islands AGA**, **Windjammers**, **Battlezone**, **Joust** **Donkey Kong Jr**, **Super Mario Bros (Master System)** *&* **Rod·Land — The Lost Pyramids**. Two colorful great AGA arcade conversions, and one golden-era arcade vector classic!

These are brought to the Amiga by current demo scene legends and people that were original Amiga game developers in the ’90s, and are all well worth your time.

### 🌈 Rainbow Islands AGA

![Rainbow Islands Arcade](https://amiga.vision/images/rainbowislands.png)

Taito’s 1987 arcade sequel to Bubble Bobble is an all-time classic, and was a fantastic Graftgold conversion on the Amiga back in the day. This new AGA conversion brings the full arcade game to the Amiga, including the hidden levels that were not in the original Amiga OCS port.

### 🥏 Windjammers

![Windjammers](https://amiga.vision/images/windjammers.png)

Neo•Geo is a legendary arcade platform, and was also available as a (very expensive!) game console. It was a 12MHz 68000-based system, but with insanely powerful sprite hardware. Some of its classics lend themselves to 1:1 arcade/console conversions to the Amiga, and Windjammers is one of them. 

One of the best head-to-head games ever, so get your friends in the room and play this! Air hockey meets tennis, with a generous helping of fighting game energy.

### 🎯 Battlezone

![Battlezone](https://amiga.vision/images/battlezone.png)

Atari’s classic 1980 vector tank game is a first-person battlefield vector monitor classic from the golden age of arcades.

This conversion runs on OCS hardware and supports dual-stick controls, bringing the original tank-driving to your Amiga.

### ⚔️ Joust

![Joust](https://amiga.vision/images/joust.png)

Classic multiplayer arcade game action brought to the Amiga — a fantastically fun and chaotic game to play with your friends. Don't let the simple appearance fool you, this is a classic for a reason.

### 🐵 Donkey Kong Jr

![Joust](https://amiga.vision/images/donkeykongjr.png)

From the golden age of the arcades, this classic plays exactly as it should.

### ⭐️ Super Mario Bros (Master System)

![Super Mario Bros](https://amiga.vision/images/smb.png)

A port of the excellent Sega Master System re-imagining of the original classic, with better graphics. Plays better, looks better.

### 🪄 Rod·Land — The Unknown Pyramid

![Rod·Land](https://amiga.vision/images/rodland.png)

An Amiga adaptation of Rod-Land's second story, also known as The Lost Levels. Uses the original Amiga game code — which fixed issues that were even present in the arcade — and includes 31 new rooms, five new bosses. Extremely charming and addictive game — if you loved the original Rod·Land, you now have an entirely new sequel to play!

## 💾 Amiga 500, 600, 1000, 2000, 3000 *&* CDTV Support {#ecs}

AmigaVision now has a dedicated **ECS setup** for older original hardware, aimed at Amiga 500, 600, 1000, 2000, 3000 *&* CDTV hardware that don't have the AGA chipset. It *only* includes OCS/ECS-compatible games and demos, saving you from accidentally launching AGA-only content. The launcher has its own reduced-color artwork and specialized configurations that fit setups with less Chip RAM.

![CDTV](https://amiga.vision/images/cdtv.jpg)

This support is still in beta — not every title runs on an unexpanded stock machine, it all depends on your particular combination of Chip RAM and Fast RAM; individual games still have their own CPU and memory requirements. Definitely give us feedback in our issue tracker on what does and doesn't work on your setup, and make sure to include chipset details and memory configurations.

The ECS setup covers the following share of the full set of titles:

|            |   AGA  |   ECS  | ECS coverage |
|------------|:------:|:------:|:------------:|
| Games      | 3,340 | 2,791 | ~84% |
| Demo Scene | 1,294 | 1,129 | ~87% |
| **Total**  | **4,634** | **3,920** | **~85%** |

This is an ideal setup if you have a mildly (or wildly!) expanded/accelerated Amiga 500, 600, 1000, 2000, 3000 or CDTV with SD/CF card support. Kickstart 3.0 or later is required.

## 🪟 Windows Installer *&* Expanded Emulator Support {#windows}

AmigaVision now includes a dedicated installer for Windows, with guided setups for **Amiberry**, **Copperline**, and **WinUAE**. It detects emulator locations, and installs the relevant configuration and shader files.

![Windows Installer](https://amiga.vision/images/windows.png)


You can also choose whether AmigaVision starts automatically when opening the emulator. 

## 🎮 New Games *&* Updates {#games}

Since the [2026.04.26 update](https://amiga.vision/2026.04.26), **122 games and special editions** have gained configurations, alongside new editors, expansion missions, and variants. These additions are separate from the package updates to existing entries below.

### ⭐ New Curated Game Lists {#picks}

**Amiga Bill’s Modern Picks** highlights modern Amiga games, while **Mr. Replay’s 50 Recommended** offers another hand-picked selection. The **Artists & Publishers** category has also been substantially expanded, with more company and creator gameographies.

### 🆕 122 Added Games *&* Special Editions

The latest additions include **Rainbow Islands AGA** — a conversion of the 1987 arcade version, including the hidden levels absent from the Amiga original — and **Battlezone**, an arcade port of the iconic twin-stick Atari vector game, and also an AmigaVision exclusive. 

Other new additions include **GhostLight 2**, **Stoned**, **OpenSWOS: Sensible World of Soccer AGA**, and two particularly enhanced classics: **Defender of the Crown Enhanced**, with gameplay features and graphics from the Atari ST and Apple IIGS versions, and **Ghostbusters II Enhanced**, with movie-accurate graphics and sounds.

Other recent additions are **Black Tiger (2026)**, **Tutankham**, **City Connection**, **Star Force**, **Time Pilot**, and **Quantox**.

Also present is **Splatterhouse**, an excellent PC Engine conversion by **Modern Vintage Gamer**, alongside **Heart of the Alien — Another World II**, **Absolute Zero**, **Jump 'n Bump**, **Mean 18**, **Neon World**, **Ooze: The Escape**, and **Solomon's Key**, an Atari ST Port. 

On the multiplayer front, we have two amazing underrated party games **Achtung! Die Kurve...** and **Knock Out 2**, as well as **Gauntlet (Atari ST Port)**. 

We also included playable demos of **Amigoonies**, **Aonic** (Sonic the Hedgehog on the Amiga!), and the **Rastan** prototype.

Other highlights include **Babylonian Twins**, and modern arcade conversions such as **Commando AGA** and **Double Dragon AGA** — and the high-framerate **Stunt Car Racer: Unleashed**. **Bograts** and **Sixth Sense Investigations** are two new overlooked and recommended AGA games.

<details>
<summary><b>Expand for Full List of 122 Added Games &amp; Editions</b></summary>

<ul>
<li>1942</li>
<li>Absolute Zero</li>
<li>Achtung! Die Kurve...</li>
<li>AmiKlotski</li>
<li>AMIner</li>
<li>Arpegio</li>
<li>BabeAnoid</li>
<li>Babylonian Twins</li>
<li>Backflip Endless</li>
<li>Battle Squadron 2</li>
<li>BattleDuel</li>
<li>Battlezone</li>
<li>Beetle</li>
<li>Black Tiger (2026)</li>
<li>BLOK</li>
<li>Bloodfest</li>
<li>Blue And Red: Fight the Robots!</li>
<li>Bograts: The Puzzling Misadventure</li>
<li>BOOM!</li>
<li>Boulder Däsh</li>
<li>Bunny&#x27;s Boing Ball Bounty</li>
<li>Burn</li>
<li>Cake Rush</li>
<li>Cake Rush: Amiga Mom Edition</li>
<li>Citadel: Remonstered</li>
<li>City Connection</li>
<li>Commando AGA</li>
<li>Connect</li>
<li>Creepy Crawlers: Goliath Reloaded</li>
<li>Defender of the Crown (Enhanced)</li>
<li>Dodgy Rocks</li>
<li>Dogfight (Richard Ling)</li>
<li>Donkey Kong Jr.</li>
<li>Double Dragon AGA</li>
<li>Dr. Dangerous: Secrets of the Temple of Xol&#x27;Tan</li>
<li>Echodrome</li>
<li>Ecliptic</li>
<li>Evil Garden</li>
<li>Extreme Violence</li>
<li>Fast Food 2</li>
<li>Fields of Glory</li>
<li>Formula One Grand Prix 16 FPS</li>
<li>Gauntlet (Atari ST Port)</li>
<li>Ghostbusters II Enhanced</li>
<li>Ghostlight 2</li>
<li>Ghouls &#x27;n Ghosts Enhanced</li>
<li>Global Effect</li>
<li>GlowPoint</li>
<li>Gun.Smoke</li>
<li>Heart of the Alien - Another World II</li>
<li>Hop to the Top</li>
<li>House of the Dead Bunnies</li>
<li>Icicle Joe: Icicle Works Returns!</li>
<li>Imperial</li>
<li>Jail Break</li>
<li>Jump &#x27;n Bump</li>
<li>Knock Out 2</li>
<li>Kung-Fu Master</li>
<li>Lin Wu&#x27;s Challenge</li>
<li>Maniac Mansion Deluxe</li>
<li>Mean 18</li>
<li>Microlyte Tankzone</li>
<li>Moon Cresta</li>
<li>Movimiento Constante</li>
<li>Ms. Pac-Man 500</li>
<li>Neon World</li>
<li>NEONnoir</li>
<li>Nibbler</li>
<li>Oids</li>
<li>Ooze: The Escape</li>
<li>OpenSWOS: Sensible World of Soccer AGA</li>
<li>Order: Omega</li>
<li>OutRun AGA</li>
<li>P.O.W.: Prisoners of War</li>
<li>Pinball Illusions: Vikings</li>
<li>Pjusk</li>
<li>Project Horizon</li>
<li>Pumpkin</li>
<li>Quantox</li>
<li>Rainbow Islands AGA</li>
<li>Rajd Przez Polske</li>
<li>Rally-X</li>
<li>RAY Pokeri</li>
<li>Rescue on Fractalus!</li>
<li>Revenge of the Grinch: A Christmas Tale</li>
<li>Revs</li>
<li>Roc&#x27;n Rope</li>
<li>Rolling Thunder AGA</li>
<li>Santa Rocks</li>
<li>Shift</li>
<li>Sixth Sense Investigations</li>
<li>Slicks &#x27;n&#x27; Slide</li>
<li>Solomon&#x27;s Key (Atari ST Port)</li>
<li>Space Battle</li>
<li>Splatterhouse</li>
<li>Star Dust Wars: Director&#x27;s Cut</li>
<li>Star Force</li>
<li>Starflight II: Trade Routes of the Cloud Nebula</li>
<li>Stoned</li>
<li>Strange New World</li>
<li>Stunt Car Racer: Unleashed</li>
<li>Submarine Attack</li>
<li>Super Mario Bros.</li>
<li>SuperDodge</li>
<li>Terra Cresta</li>
<li>The Lost Pixel</li>
<li>The Osiris Infection</li>
<li>The Treasure of Usas</li>
<li>Time Pilot</li>
<li>Tiny Pixel Adventure</li>
<li>Trapped in the Tomb</li>
<li>Tumblepop</li>
<li>Turbo Santa DX22</li>
<li>Tutankham</li>
<li>Untangle</li>
<li>Vette!</li>
<li>Vulgus</li>
<li>Windjammers AGA</li>
<li>Wizonk! Magic Arena</li>
<li>Worms: Director&#x27;s Cut - 30th Anniversary</li>
<li>Yeet</li>
<li>Yoomp</li>
</ul>
</details>

### 🧰 Editors, Expansion Missions, Game Demos *&* Variants

These are listed separately from the 122 games and editions above.

<details>
<summary><b>Expand for Editors, Expansion Missions, Game Demos &amp; Variants</b></summary>

<ul>
<li>Aonic: The Green Hill Zone Demo</li>
<li>Cannon Fodder (Editor)</li>
<li>CyberPunks 2 (Demo)</li>
<li>Double Baboon Ninja (Demo)</li>
<li>Payback (Demo)</li>
<li>Pyramid Escape (Demo)</li>
<li>Rastan (Demo)</li>
<li>Sensible World of Soccer &#x27;96/&#x27;97 (Editor)</li>
<li>Space Quest III: The Pirates of Pestulon (MT-32 variant)</li>
<li>The Adventure of Node (Demo)</li>
<li>The Amigoonies (Demo)</li>
<li>The Lost Vikings (Demo)</li>
<li>Utopia: The Second Wave 1</li>
<li>Utopia: The Second Wave 2</li>
<li>Wings of Fear II (Demo)</li>
</ul>
</details>

The Lost Vikings demo includes English and French versions. Additional variants include the Spanish editon of **Hook**, and an updated German **Mission Andromeda**.

### 🔄 Updated Games {#updated-games}

**159 existing game entries** have received updated game or new WHDLoad installer configurations.

<details>
<summary><b>Expand for Full List of 99 Updated Game Titles</b></summary>

<ul>
<li>4D Sports Driving</li>
<li>Academy: Tau Ceti II</li>
<li>Alien 3</li>
<li>Arabian Nights</li>
<li>Archipelagos</li>
<li>Armour-Geddon</li>
<li>Army Moves</li>
<li>Artificial Dreams</li>
<li>Bad Dudes vs Dragon Ninja AGA</li>
<li>Banshee</li>
<li>Battle Command</li>
<li>Battlehawks 1942</li>
<li>Biing!: Sex, Intrigen Und Skalpelle</li>
<li>Black Dawn II</li>
<li>Buggy Boy</li>
<li>Cannon Fodder</li>
<li>Cannon Fodder 2</li>
<li>Captain Dynamo</li>
<li>Castlevania</li>
<li>Castlevania AGA</li>
<li>Cool Spot</li>
<li>Cybersphere</li>
<li>Cybersphere Plus</li>
<li>Deluxe Galaga</li>
<li>Desert Strike: Return to the Gulf</li>
<li>Deuteros: The Next Millennium</li>
<li>Donkey Kong</li>
<li>Emerald Mines</li>
<li>Encounter</li>
<li>Enemy 2: Missing in Action</li>
<li>Enemy: Tempest of Violence</li>
<li>Eye of the Beholder</li>
<li>Eye of the Beholder II: The Legend of Darkmoon</li>
<li>Ferrari Formula One: Grand Prix Racing</li>
<li>Flight of the Intruder</li>
<li>Flight Simulator II</li>
<li>Flight Simulator II: Hawaii</li>
<li>Flucht Aus Colditz</li>
<li>Flying Shark</li>
<li>Galaga</li>
<li>Ghosts &#x27;n Goblins</li>
<li>Grand Prix Circuit</li>
<li>Gunship</li>
<li>Gunship 2000</li>
<li>Hard Drivin&#x27;</li>
<li>HeroQuest &amp; Return of the Witch Lord</li>
<li>Highway Patrol II</li>
<li>Indianapolis 500: The Simulation</li>
<li>Kick Off 2</li>
<li>Kick Off 2: Competition Version</li>
<li>Kick Off 2: World Cup 1990</li>
<li>King and Balloon</li>
<li>Legends of Valour</li>
<li>Lure of the Temptress</li>
<li>Magic Pockets</li>
<li>Mercenary III: The Dion Crisis</li>
<li>Mission Andromeda</li>
<li>Oilmania</li>
<li>OsWALD of the Ice Floes</li>
<li>OutRun Arcade</li>
<li>Overdrive (Team 17)</li>
<li>Pooyan</li>
<li>Powerdrome</li>
<li>Prince De Perse</li>
<li>Prince of Persia</li>
<li>Rally Championships</li>
<li>Red Baron</li>
<li>Road Rash</li>
<li>Robinson&#x27;s Requiem</li>
<li>Ruff &#x27;n&#x27; Tumble</li>
<li>SimCity</li>
<li>Star Wars</li>
<li>Stardust</li>
<li>Stellar 7</li>
<li>Superfrog</li>
<li>Superfrog (Intro)</li>
<li>SWIV</li>
<li>Tapper</li>
<li>Test Drive</li>
<li>Test Drive II: The Duel</li>
<li>TFX: Tactical Fighter Experiment</li>
<li>The Addams Family</li>
<li>The Great Giana Sisters</li>
<li>The Killing Cloud</li>
<li>The Lost Vikings</li>
<li>Their Finest Hour: The Battle of Britain</li>
<li>Turrican</li>
<li>UFO: Enemy Unknown</li>
<li>Ugh!</li>
<li>Ultima VI: The False Prophet</li>
<li>Virus</li>
<li>Wing Commander</li>
<li>Xenon 2: Megablast</li>
<li>Xevious</li>
<li>Z-Out</li>
<li>Zany Golf</li>
<li>Zeewolf</li>
<li>Zeewolf 2: Wild Justice</li>
<li>Zippy Race</li>
</ul>
</details>

Recent package updates include **Arabian Nights**, **Enemy: Tempest of Violence** and **Enemy 2: Missing in Action** *&* **Prince of Persia**.

**The Great Giana Sisters** now offers an option to disable up-to-jump when using a second fire button.

**Shadow of the Beast** restores the trainer and controller options. **Let the intro of the game play when starting it: skipping it can trigger graphics corruption.** The launcher now displays this warning.

**Eye of the Beholder I & II** now use AutoMap configurations, **Populous** uses the creature-fix configuration, and **Formula One Grand Prix** has an enhanced-framerate version by Vesuri.

### 🖱️ App Configurations Added {#app-configurations}

* **VistaPro *&* Scenery Animator** — Amiga had several apps for generating 3D landscapes, we have included configurations for two of the most famous ones.

**HippoPlayer** and a fixed **680x0-compatible FutureComposer** have also been added. More music selections — including h0ffman’s MOD and AHX work — is included.

### 🎹 Space Quest III MT-32 MIDI Support

A configuration for the **MT-32 variant of Space Quest III** has been added using the German package, which includes the driver missing from the English release. To play it in English, select **Sierra menu → Sprache**.

## 📚 146 More Game Manual QR Codes {#manuals}

Another **146 QR-codes for game manuals** have been added, extending the existing 3,000 game manual links introduced in our previous version. Scan a game's QR code to read its manual on your phone or tablet while playing.

## 🚀 Favorites *&* External Launching {#favorites}

* **All screenshots now transfer to Favorites** — Adding a favorite now copies its complete screenshot set, rather than just one image.
* **Game Manual QR codes in Favorites** — Game manual links now get added when you add a favorite.
* **Cleaner Favorite names** — Adding a game from a ranked list no longer saves its ranking number as part of the name.
* **Favorites with long names work again** — Restored long-filename support on the saves volume, fixing entries such as **Sensible World of Soccer** variants that could be added but did not appear correctly.
* **Zaparoo NFC card launcher *&* Super Attract Mode support restored** — Generated game and demo listings once again use the names expected by external launchers.

## 📺 PAL *&* NTSC Fixes {#pal-ntsc}

Making sure a game or demo runs in the correct video mode and with the correct scaling remains a focus for AmigaVision.

A broad correction fixes **hundreds of NTSC entries** that *were* running at the correct *refresh rate* but were using the wrong [pixel aspect ratio](https://amiga.vision/ntsc) on MiSTer specifically.

Scaling presets have been propagated to language and hardware variants, with another round of [5×PAL overscale](https://amiga.vision/overscale) adjustments.

Other corrections include:

* **High Steel *&* Fallen Angel** — Corrected to run in PAL instead of NTSC.
* **MicroProse Golf** — Corrected to run in NTSC.
* **Hybris** — Switched back to NTSC/60Hz. You may have experienced this as a PAL game, but the graphics artist was using an NTSC Amiga at the time, and the game came out in both PAL and NTSC versions. The graphics look correct in the NTSC aspect ratio, and the game is faster and smoother as a result. And, harder! 😅
* **Alien Drug Lords** — Switched to NTSC to address cropped controls and the intended pixel aspect ratio.
* **Mr. Nutz** — Changed to 4×PAL so the load/save menu options remain accessible.
* **Universe** — Adjusted the overscale offset to improve toolbar visibility.

### 🎛️ Persistent Video Options

* **Disable MiSTer Overscale** — A new option disables the 1080p/4K [overscale](https://amiga.vision/ntsc) presets, useful for other output resolutions and livestreams where changing crop settings complicates capture. This choice persists across reboots.
* **Force PAL or NTSC across reboots** — Video-mode overrides now persist. These are *only* intended for CRTs that support only one standard — typically NTSC US consumer CRTs. Always use the default for normal per-title switching. Do *not* use the overrides on HDMI, and be aware that forcing a non-default standard can break games and demos.

## 🔥 Demo Scene Improvements {#demos}

The iconic **Amiga Juggler** and original **Boing Ball** demos have been added, along with a (somewhat silly) **AmigaVision Release Cracktro** paying homage to the classic Paranoimia crack intro.

The latest additions include **Megademo 2000**, **Metropolice**, **+=+**, **The Loop**, and several cracktros, plus the first two issues of **Adventures in Retro** and an original **Amiga 1200 shop demo for Australia and New Zealand** that was used by Amiga dealers there.

<details>
<summary><b>Expand for Latest Demo, Cracktro &amp; Disk Magazine Additions</b></summary>

<ul>
<li>+=+</li>
<li>Adventures in Retro #01</li>
<li>Adventures in Retro #02</li>
<li>Amiga 1200 Shop Demo (Australia &amp; New Zealand)</li>
<li>Caribbean Disaster Crack Intro</li>
<li>Flashback Crack Intro</li>
<li>History Line Crack Intro</li>
<li>Megademo 2000</li>
<li>Metropolice</li>
<li>Nitro Crack Intro</li>
<li>The Loop</li>
</ul>
</details>

New demo scene classics have been added to the launcher background music selection, including **Cream of the Earth**, **Chinese Dream**, **Undersea**, **Wanna Buy a Helmet**, and **We’re the Devils**.

## 🎵 Now Playing Support {#launcher}

The launcher now shows the current music track in a **Now Playing notification** when a song starts. Background music uses **shuffle playback** instead of random to ensure the same track isn't played more often than it should. Use **Space or F8** to pause/resume music and **F9** to skip to the next track. The **CD32 Play/Pause button** also pauses and resumes music.

Resuming music also now re-displays the current track name, in case you want to know what's currently playing.

## 🖥️ Livestream Safe {#livestream}

As you are probably aware, the Amiga games and Amiga demo scene sometimes includes NSFW content that could potentially get you nervous on livestreams. We have made sure that no thumbnails from these entries show up in the launcher — it shows an `NSFW` placeholder instead. Even if you accidentally scroll past an entry, that's the only thing you'll see.

Random Game and Random Demo now also exclude NSFW-tagged entries, making random selections more suitable for livestreaming.

If you want a setup completely without adult titles, the launcher's **Options** menu now includes a script to **Remove NSFW Titles**. This *permanently* removes titles tagged NSFW from the launcher and *permanently* deletes their installed content.

As always, with 5500+ game and demo configurations, we may have missed some entries — although we did our best to cover every game and demo. If you *do* find any game or demo that should be marked as NSFW that we missed, file a ticket in our issue tracker, and we will fix it immediately.

## 💾 Kickstart 3.0 *&* 3.1 Support on Real Hardware {#kickstart}

In this version, we now patch `scsi.device` when needed on original hardware, while excluding detected MiSTer and emulators from this step, since it is not needed. This makes it possible to run AmigaVision on original hardware with Kickstart 3.0/3.1 chips installed. No need to buy new Kickstart ROM chips.

## 🌙 Workbench Dark Mode {#darkmode}

A **Dark Mode theme for Workbench** has been added, and is available from the **Screen Mode** menu. 

## 🧩 WHDLoad *&* Compatibility Updates {#whdload}

Several game configurations have also been corrected to avoid unnecessarily populating the Saves drive.

**WHDLoad has been updated to 20.1.** Many more GenericKick configurations are now in use for games and applications that do not run directly under the OS and lack their own WHDLoad installer.

## 🥧 PiStorm Support {#pistorm}

Dedicated PiStorm setups are now available for both AGA and ECS Amigas with a PiStorm installed. 

## 🛠️ Stay Updated *&* Help Us Make AmigaVision Even Better

If you find any bugs or settings that need improvements, file a ticket on the [AmigaVision issue tracker](https://github.com/amigavision/AmigaVision/issues).

AmigaVision is an open source project, and we welcome contributions from the community.

You can follow us on [Bluesky], [YouTube], [Twitch] or via [RSS], and updates will be posted when new releases happen.

## ⬇️ Download

You can find AmigaVision for every platform *&* device via the [Download] section.

**Enjoy the best of what the Amiga platform has to offer!**

## 🐛 Fixes *&* Additions

<details>
<summary><b>Expand for list of fixes *&* additions</b></summary>

<ul>
<li><a href="https://github.com/amigavision/AmigaVision/issues/180">#180 — Additional missing games from the forums</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/183">#183 — Add WinUAE support</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/186">#186 — Add Shadow of the Beast trainers back</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/189">#189 — New High Resolution Launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/204">#204 — Missing game in games.txt</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/215">#215 — Disable Dynamic Crop option</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/216">#216 — &quot;Erbe&quot; wrong screenshot</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/220">#220 — Mr. Nutz cropped too much: load/save menu is missing options</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/229">#229 — Add WHDLoad Patch &quot;disable UP control (jump)&quot; for Great Giana Sisters</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/240">#240 — Update Arabian Nights to v2.0</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/246">#246 — Add updated versions of Enemy 1 &amp; 2</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/252">#252 — hitm4n - additions</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/255">#255 — MT32.drv missing in Space Quest III</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/270">#270 — Add config for Another World 2: Heart of the Alien</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/276">#276 — Add explicit “Exit to Workbench” entry</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/289">#289 — Dynamic Crop on/off does not persist</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/292">#292 — Re-add demos that do not exist on the file system</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/304">#304 — Alien Drug Lords should be 4×PAL or NTSC</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/329">#329 — Add OCS/ECS Support</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/339">#339 — Add ConfigDelay WHDLoad Option to the RunQuiet Scripts</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/343">#343 — “Recently Played” support in the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/347">#347 — Add h0ffman AHX+MOD files and other selected modern music classics</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/349">#349 — Add VistaPro to GFX category</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/352">#352 — Add PiStorm to supported platforms</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/353">#353 — Add FutureComposer</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/363">#363 — Castlevania AGA is broken (CD32 version works)</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/364">#364 — AmigaVision does not work on 3.0/3.1 ROMs on real hardware</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/383">#383 — Curated Content - Two games are missing</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/384">#384 — Years and further information for games marked in r3 as year unknown</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/388">#388 — Add headers/separators to the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/389">#389 — Multiple letters supported for typing an entry</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/400">#400 — New demos not appearing in GUI plus some using same screenshot</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/403">#403 — Restore support for long-name Favorites</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/412">#412 — The Demos &quot;The Fall&quot; and &quot;Fall&quot; are the same one.</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/413">#413 — Missing Back to the Future III</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/420">#420 — Metadata for Outrun Amiga Edition has wrong year etc</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/421">#421 — Add Genre to metadata display</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/422">#422 — Change Hybris back to NTSC/60hz</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/423">#423 — Add WHDLoad exit instructions to the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/425">#425 — Add groupings to the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/426">#426 — Update DeliTracker default folder</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/427">#427 — Add AmiGameJam 2025 games</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/432">#432 — Fix Zaparoo NFC + SAM support</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/434">#434 — QR codes should be displayed in Favorites section</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/435">#435 — When favoriting a game in an ordered (e.g. Top 10) list, don’t save the number</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/442">#442 — Incorrect NTSC aspect ratio on Mister (some games are vertically squashed)</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/446">#446 — Add Generic KickEmu</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/448">#448 — Karateka possibly duplicated</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/451">#451 — Favorites do not support long PFS file names</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/458">#458 — Add permanent Force NTSC/PAL options</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/460">#460 — Add Livestream mode</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/462">#462 — Add NSFW thumbnail warning</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/465">#465 — MiSTer, latest AmigaVision + Zaparoo v2.17.0-beta.2 can&#x27;t start games from Zaparoo</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/468">#468 — Add &quot;Babylonian Twins&quot; (game)</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/470">#470 — Discovery microillusions game multiples</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/472">#472 — Add AmiGoonies and Aonic</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/475">#475 — Favorites (Tab) not working for Sensible Soccer family titles with long names (e.g. European Champions)</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/478">#478 — Universe crop may need to be adjusted</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/479">#479 — Update Castlevania AGA</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/480">#480 — Investigate MODs that seem to trigger playback issues in launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/481">#481 — Add Rastan Game to next release</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/482">#482 — Launcher should support Numpad Enter key too</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/483">#483 — Update WHDLoad to 20.1</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/484">#484 — DeliTracker points to the wrong directory</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/485">#485 — The game Knock Out 2 could be included in the Best Of Multiplayer game list</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/486">#486 — Achtung die Kurve could be included in the Multiplayer-&gt;Competitive list</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/487">#487 — Achtung die Kurve game release date should be 1993</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/488">#488 — Characters missing in description of &quot;Remove NSFW Titles&quot; Option</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/490">#490 — Add Dark Mode Theme for Workbench</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/491">#491 — Add Copperline emulator support</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/492">#492 — Ensure OCS/ECS versions use as little memory as possible</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/493">#493 — Favorites need an older AGS: assign</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/494">#494 — Add Windows installer</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/500">#500 — Test Results - New games and editions</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/501">#501 — Launcher crashes in certain scenarios</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/502">#502 — Further additions testing</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/503">#503 — Add “Now Playing” status message when a new song starts playing in the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/507">#507 — 2px cut off at the bottom on MiSTer only</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/508">#508 — Hagar The Horrible placement</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/509">#509 — Valhalla Suffix</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/510">#510 — Hitchhikers guide to the galaxy redundant</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/511">#511 — Space Crusade &amp; Voyage Beyond</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/512">#512 — Scrolling can crash the launcher</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/514">#514 — Sidewinder, mismatched naming</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/515">#515 — Gauntlet (ST Port) images</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/516">#516 — Heimdall Intro &amp; In Flight loop forever</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/517">#517 — Games in Favorites only show 1 image</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/518">#518 — Backflip Endless overcropped</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/519">#519 — Tetren doesn&#x27;t load</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/520">#520 — Add Amiga Juggler + Boing Ball to Dealer Demos</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/523">#523 — Add HippoPlayer</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/525">#525 — Gameographies list: add some more companies/publishers</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/527">#527 — Non-working screenshots/images in selector</a></li>
<li><a href="https://github.com/amigavision/AmigaVision/issues/532">#532 — Add ECS med-res mode</a></li>
</ul>
</details>

<!--
WORKING DRAFT — release name follows the current source version, not a confirmed release announcement.
Last reviewed: 2026-11-23 (Asia/Bangkok).
Source: https://github.com/amigavision/AmigaVision/commits/main/
Baseline: ba35d0e4511482c4df151f8d29d68f94eec9f3b8 (2026.04.26 manifests).
Reviewed through: 731ff43bb756c25ba636eb35d236cc080a28044f.
Comparison: https://github.com/amigavision/AmigaVision/compare/ba35d0e4511482c4df151f8d29d68f94eec9f3b8...731ff43bb756c25ba636eb35d236cc080a28044f

UPDATE NOTES
- November 23 audit: local/live main both 731ff43bb7. Reviewed commits since
  0c23c1af9b and all comments on issues updated since November 14.
  122 public additions after nine additions and Pauldron withdrawal. Existing-ID
  package changes: 159 entries / 99 title strings. Headline combines 122+159.
- Removed Cogs N Logs and Strike Force Omega demos. Krakout and Abbey of Crime
  remain redundant/disabled; Wolf500 also redundant. Replacement IDs and existing
  Manhattan Dealers/Uridium 2 entries are not new games.
- Added 14 completed feature/fix requests to appendix; #172 is non-reproduction,
  #524 is NanoMig core guidance, #531 rejects 8GB shrinking, and #528 explains a
  licensed font dependency, not new shipped fixes. #447, #526, #529, #530 open.
- #343 closure confirms an already-implemented Recently Played feature; do not
  claim a fresh binary change for that feature in this interval. #352 confirms
  limited PiStorm testing, not universal compatibility. #512 no longer reproduced
  after fixes. Emulator CPU profiles changed to 030; separate 060 request open.
- November 14 audit: local/live main both 0c23c1af9b. Reviewed commits since
  84ccf9ff19 and issue activity. #519 completed by excluding Tetren; #520–524
  remain open. #524 discussion is a testing invitation, not verified NanoMig support.
- Current public addition list: 114 titles/editions; existing-ID package metric
  142 entries / 89 title strings. Replacement IDs deduplicated by title, Pyramid
  Escape listed separately as demo. Prince of Persia 2 removed from additions.
- New packages can update redundant IDs too: these counts measure package
  changes, not a guarantee every variant is offered or tested. Alone in the
  Dark and the Lemmings editors remain excluded despite package updates.
- NewTek reels now redundant. ECS music defaults off, exit fixed; image loading
  aborts on navigation. Open scrolling/Favorites reports not assumed resolved.
- November 5 audit: local and live main both 84ccf9ff19. Reviewed all four
  commits after 7bae126c02, current issue bodies and new #512/#516 comments.
  Rainbow Islands AGA and Battlezone bring additions to 91. GunSmoke is
  replaced by Gun.Smoke AGA, not counted twice. Existing-ID package counts
  remain 111 entries / 69 titles; headline combines 91 + 111 = 202.
- #510 completed: Hitchhiker's Guide duplicate suppressed, retained within
  Lost Treasures of Infocom; the added collection ID is not a new anthology.
  #516 now closed/completed, but has no new resolution comment or matching
  music-code change in this range: retain tracker closure in appendix without
  inventing a playback-fix mechanism or claiming hardware verification.
- #512 remains open with reproduced scrolling crash under investigation;
  #517 Favorites single-image report also remains open. Earlier scrolling
  optimizations and the #501 exit-race fix do not establish these as fixed.
- November 2 audit: local and live main through 7bae126c02; reviewed commits
  after b5657a5856 and updated issue bodies/comments after October 28 checkpoint.
  Additions now 89: Alone in the Dark withdrawn; Addams Family backgrounds
  edition merged into the existing main game. No new titles since checkpoint.
  Existing-ID package metric now 111 entries / 69 titles. Headline 200 combines
  these entries and additions, not unique games or every metadata correction.
- Ten completed issues added: #500, #501, #502, #503, #508, #509, #511,
  #514, #515, #518. #505 is dependency maintenance, excluded. #504, #506,
  #507, #510, #512, #513, #516, #517 remain open, not release fixes.
- #500/#502 closures include workarounds and non-reproduction: do not imply all
  findings were fixed. Rastan and Star Dust Wars do not fit 5xPAL. Fast Food 2
  cursor issue was not reproduced. #501 has a committed image-load exit-race fix.
- HeroQuest fixed package now replaces original plus expansion; no separate
  German Fix entry. Time Pilot now v1.0 despite retained Beta 22 database title.
- PiStorm now included in main distros target. Now Playing is a 5-second
  footer, shuffle replaces random music; CD32 Play/Pause toggles music playback.
- October 28 audit: live main and local source both b5657a5856. Reviewed nine
  commits after ec833701bf and current issue activity through #500's update
  at 2026-10-27T20:45:54Z. Newly updated #337 and #500 are open, no comments.
- Five new games/editions bring additions to 91: Stoned, Defender of the
  Crown (Enhanced), OpenSWOS, GhostLight 2, Ghostbusters II Enhanced. Node is
  a playtest demo, listed separately. Added the previously omitted SWOS editor
  to supplementary titles; it was committed at the previous checkpoint.
- Existing-ID package counts remain 106 entries / 66 titles; 67 fixed issues.
  OpenSWOS is configured NONETWORK; do not announce network play.
- Fast Food 2 images replaced in ECS and hi-res sets. Build-side ILBM parsing
  hardening is not proof of the runtime launcher checks requested in #337.
  #500's quit, scaling, missing-title and input reports remain unresolved;
  do not describe the artwork repair as fixing its post-quit mouse pointer.
- October 27 audit: live main and local source both ec833701bf. Reviewed
  all commits after 1d70272462 and issue updates after 2026-10-24T23:00:58Z,
  including comments on #210 and #496. No newly completed release issues;
  #497 search, #498 multiplayer grouping, #499 CD32 scaling remain open.
- Eight new game titles/editions bring additions to 86. Existing-ID package
  changes now cover 106 entries / 66 titles. Uridium 2 is a replacement ID
  using v4.0.0, so described separately rather than folded into that metric.
  Splatterhouse's replacement ID does not add a second new game.
- Lemmings 2 editor updates remain redundant; Last Crusade conversion entries
  are also redundant. Do not restore them to public additions. Time Pilot is
  explicitly Beta 22; Prince of Persia 2 is v0.90.
- Full-width ECS layout follows AGA. Smaller manual QR codes are rendered in
  the thumbnail area; the main-screen QR was removed. Random Game/Demo exclude
  NSFW. New #496 comments say NTSC speeds music up; NTSC50 remains planned.
- October 25 audit: local source through 1d7027246; live GitHub main API
  returned 3a8eb9b88 (local thumbnail-centering follow-up included here).
  Reviewed commits after 49ff434d0 and current updated issues/comments.
  Package changes remain 105 existing entries / 65 titles; Splatterhouse brings
  new games/editions to 78. Space Quest III MT-32 is an additional variant.
  Four Lemmings editors are now redundant and removed from public copy.
- Completed issues added to appendix: #255, #425, #426, #484, #485, #486,
  #490, #492, #493, #494. #495 is an existing German-category listing, not a
  release fix. #336 closure says the old CD32 report is obsolete; no new fix
  claimed. #491 Copperline remains open despite committed installer support.
  #496 NTSC PAR request remains open. #489 is not resolved by partial changes.
- #492 describes 50 low-memory selections including variants and a demo;
  do not present these as 50 newly added games or 50 verified stock machines.
- Installer supports Amiberry, WinUAE and Copperline; Copperline installation
  layout remains in flux. OCS/ECS background restored to monochrome; AGA
  full-width layout places manual QR codes in the thumbnail area.
- October 23 audit: live main through 49ff434d0. Reviewed all 22 commits after
  834ba7ca3 and issue activity after 2026-10-20T13:37:44Z, including every
  comment on updated issues. Package counts remain 105 entries / 65 titles;
  77 new game/edition titles are unchanged. Three withdrawn standalone AGA
  adventure conversions are removed from public copy and the variants list.
- Completed issues added: #388, #389, #434, #435, #480, #482, #487, #488.
  #486 has a committed multiplayer-list change but remains open. #484, #485,
  and #489 remain open; do not treat testing reports as shipped fixes.
- Launcher now uses AVS, high-res defaults on AGA, gradients/transparency,
  dividers, buffered scrolling, prefix search, Numpad Enter, and Favorites QR
  assets/rank cleanup. #480 confirms SQSH-packed MOD playback fixed.
- PiStorm image sizing changed: main image cap is 15.8 GB, with space for
  its Emu68 boot partition on a 16GB card. PiStorm does not bundle Linux;
  Raspberry Pi continues to require 32GB. Hardware testing remains necessary.
- #489 reports outstanding MiSTer scaling/quit/input problems. No game fixes
  beyond committed changes are inferred from that open testing report.
- Latest follow-up audit: main through 834ba7ca3, verified against the live
  commits API. Reviewed all seven commits after 3f49429b4 and all issue updates
  after 2026-10-20T01:39:18Z. Newest issue update: 2026-10-20T13:37:44Z.
  #183 and #186 are closed/completed; read all comments on both issues.
- WinUAE is now part of emulator packaging, with INSTALL.txt, named/default
  presets, and the bundled CRT-Pi-SmartRes shader. The old build/emulator-configs
  path was removed; public links now point to content/distro_emulators/WinUAE.
  Packaging does not establish Windows boot/input/scaling verification.
- Shadow of the Beast now prefers v2.6 over v2.1B, with an explicit warning
  not to skip the intro. Its archive/version fields were already v2.6 on the
  surviving IDs, so package counts remain 105 entries / 65 title strings.
  Do not claim the graphics corruption itself is fixed or new default jump mapping.
- Apidya SE screenshots corrected; Dealer Demos and Exit to Workbench gain
  artwork; launcher descriptions have extra spacing. Build updates stage in RAM
  and refine cache invalidation. Earlier checkpoint notes below are historical.
- Latest October 20 audit: main through 3f49429b4, verified against the live
  GitHub commits API. Three commits since the previous checkpoint update Giana
  Sisters, center short launcher metadata, and promote 32 further game entries.
  Recomputed against the same April baseline: 105 existing Game entries /
  65 distinct title strings now have archive_path or slave_version changes.
  The 77 new game/edition titles are unchanged; headline total is 182 entries
  and additions combined, not 182 unique games. Older audit counts below are
  historical checkpoints, superseded by these totals.
- Live issue audit: newest update 2026-10-20T01:39:18Z, #229 completed.
  Read its resolution comment: disabling up-to-jump is selectable on the
  WHDLoad splash screen, not enabled by default. No other issue has changed
  since the previous checkpoint; #454 remains open with NewTek playback crashes.
- Removed obsolete manifests are maintenance cleanup, not removed game titles.
- October 20 follow-up audit: main through 641be9761. 77 new game/edition title
  strings; 18 additional editor/expansion/demo/variant titles, plus three AGA
  conversions of existing titles (21 items in the separate variants list).
  Existing-game package counts remain 72 entries / 43 distinct title strings.
  The headline's 149 game updates is 77 added titles/editions plus 72 updated
  existing entries, not 149 unique game titles.
- Added since the previous checkpoint: Absolute Zero, BabeAnoid, Bloodfest,
  Boulder Däsh, Heart of the Alien, Jump 'n Bump, Mean 18, Neon World,
  Ooze: The Escape, and Solomon's Key (Atari ST Port). CyberPunks 2 and Payback
  are demos, not full-game additions. Genetic Species remains redundant and
  excluded; do not announce it or Simon the Sorcerer II as included.
- Issue activity fetched 2026-10-20: first 100 updated issues cover through
  2026-09-11; newest update 2026-10-19T22:14:12Z. Read all eight comments on
  #180. #180 and #270 completed. #454 remains open: the AU/NZ dealer demo has
  a configuration, but NewTek reels still crash. #350 is a duplicate of that
  request, not a successful playback fix. #424 and #225 were closed duplicate;
  no new demo jukebox or Recently Played feature is established by these commits.
- WinUAE now has an initial committed preset and setup documentation. Static
  settings/path checks are not Windows boot/input/display verification. Do not
  claim guaranteed integer scaling: the WinUAE notes explicitly do not enforce it.
- Widescreen demo instructions and seven-line descriptions were refined. Cache
  handling/invalidation changes improve preparation, not game execution speed.
- October 20 audit: main through 218cb3e7d; 67 new game/edition title strings,
  plus 16 editor/expansion/demo/variant titles in the separate list. Rastan is
  a demo, not a full-game addition. Achtung and Knock Out 2 add two full titles.
  Three standalone 256-color AGA adventure conversions have existing database
  title strings and are listed as variants, not counted as three new games.
  Their committed metadata/manifests establish configurations; verify all launch
  paths on target hardware before turning that into a compatibility guarantee.
- Existing-ID package updates: 72 Game entries / 43 distinct title strings.
  This includes Arabian Nights, both Enemy games, and Prince of Persia's French
  title Prince De Perse; retain the distinction between entries and titles.
  Alone in the Dark and Slicks 'n' Slide are new additions with later updates,
  so their v0.92/v0.91 updates do not increase the existing-game update count.
- Current issue API fetched 2026-10-20; first 100 updated issues cover through
  2026-08-05, so all activity after the October 18 checkpoint is covered.
  Read all comments for newly updated issues with comments. #483, #177, #421,
  #246, #240, #446 and #481 completed; #245 rejected as RTG/AHI-only; #482 is
  an open Numpad Enter request, not a shipped fix. Earlier April-onward closed
  issue audits remain below. API latest update: 2026-10-19T00:56:46Z.
- #483 confirms WHDLoad 20.1; #446 confirms GenericKick is actively used.
  #421 confirms genre display. #177 confirms Starflight II already counted.
  #240 supplies evidence for v2.0, not a newly verified Italian-language fix.
- PiStorm packaging is experimental, native-video only, untested across models,
  and excluded from make distros. Do not present RTG/networking as supported.
  Main/ECS HDF size cap is decimal 16 GB; the PiStorm SD prototype asks for a
  32 GB or larger card. Moving the launchers to Data does not yet establish
  support for mounting Data alone alongside an existing Workbench setup.
- The earlier emulator-config work is now represented by committed WinUAE
  settings and notes. Only changes in the reviewed main checkpoint are covered.
- October 18 audit: 65 added game/edition titles (non-redundant new IDs with
  titles absent from baseline); 15 editor/expansion/demo/variant titles listed
  separately. Language variants are deduplicated by title. Connect is absent from the
  April CSV baseline; its duplicate issue closure is not another addition.
  Package-update totals remain 62 existing IDs / 38 title strings.
- Reviewed all issue activity updated since October 17 from the current first
  100 updated issues. #480 and #172 remain open. #463 and #433 are not planned,
  not release fixes. #228, #287, #459 and #439 are testing/non-reproduction
  closures, not new fixes. #444 reports 030 success and an Amiberry nightly
  fix; the checked-in default.uae still says 68060, so do not claim a bundled
  030-default change yet. #349 reports app configurations, without declaring
  new packaged apps from titles.csv. #472 additions now have launch scripts.
- ECS coverage table is the author's initial coverage snapshot, not recomputed
  against today's additions. Keep its snapshot wording unless build counts update.
- October 17 audit (historical): 25 added games/editions; five editor titles, two Utopia
  mission sets, one Lost Vikings demo (two languages), and HeroQuest German Fix
  listed separately. Do not count 127 rows from the ECS compatibility backfill
  as new games. Existing-ID package changes: 62 entries / 38 title strings.
- Recent issue updates reviewed: #329, #478, #468, #473, #472 (still open),
  #479, #400, #276, #422, #304, #412, #384. #473 is a user-reported Mini
  workaround (disable JIT/reduce speed), not a shipped fix. #472 remains a request.
- NTSC values were subsequently normalized to 0=PAL, 1=NTSC, 2=PAL60; the
  980 figure describes the earlier aspect-ratio fix, not current internal modes.
- On request, fetch current main, review commits after the reviewed-through SHA,
  merge changes into the relevant sections, and advance this checkpoint.
- Recalculate totals against the same baseline; do not add commit counts together.
- Current database comparison: 72 existing Game entries changed archive_path or
  slave_version, representing 43 distinct title strings (including variants).
  These are package/installer updates, not 72 new games or verified gameplay fixes.
- Do not count renamed demo IDs as new productions. The April 28 backfill explicitly
  describes demos/music disks already present in the 2026.04.26 release.
- New-game totals now include ddb205937 and 7dee908ed; see October 17 audit above.
- Pong4K commit 097d785 adds a zero-byte CD32 CHD placeholder, not playable content;
  do not count it as a new game without subsequent content/packaging evidence.
- Kickstart 3.0/3.1: #364 is closed, but 436b0a1 still calls for device testing.
- Video audit: 980 entries change NTSC mode 2 to 4 in 9e90a5436; subsequent
  commits correct PAL/NTSC assignments and redundant variants. Do not conflate
  these metadata corrections with the 62 package updates.
- Closed issues queried 2026-10-16, state=closed, sorted by updated descending,
  first 100 results reach updated_at 2026-03-24: all closures since 2026-04-26
  are covered (42 issues). Read resolution comments, not just closed status.
- #404 describes launcher parent-directory/favorites improvements, but no new
  AGS2 binary change is evident after baseline; keep as tracker news, not a new
  bundled launcher-version claim.
- #398 was already fixed in 2026.04.26-r2. #387's cylinder experiment failed.
- #295 No CPU Challenge was already included; #467 is a duplicate request for
  Connect, whose addition is determined from the CSV comparison.
- #445 Pocket mouse and #443 MiSTer CRT centering need upstream core work;
  #411 Pi display trouble was referred to RePlayOS; #438 was closed without a fix.
- #471, #474, #401 were download/write access, path, or core-selection resolutions,
  not new product fixes. #256 was not planned. Duplicate issues are grouped below.

- Confirm release date, final packages, hardware results, greetings, and screenshots
  before setting published: true; adjust the filename date if the release date changes.
- No screenshots or media placeholders in the public copy until assets are selected.
Closed-issue audit (number, closure reason, title):
#448 [completed] Karateka possibly duplicated
#442 [completed] Incorrect NTSC aspect ratio on Mister (some games are vertically squashed)
#460 [completed] Add Livestream mode
#204 [completed] Missing game in games.txt
#432 [completed] Fix Zaparoo NFC + SAM support
#458 [completed] Add permanent Force NTSC/PAL options
#339 [completed] Add ConfigDelay WHDLoad Option to the RunQuiet Scripts
#413 [completed] Missing Back to the Future III
#216 [completed] "Erbe" wrong screenshot
#451 [completed] Favorites do not support long PFS file names
#403 [completed] Restore support for long-name Favorites
#295 [completed] Add No-CPU Challenge Demo
#462 [completed] Add NSFW thumbnail warning
#383 [completed] Curated Content - Two games are missing
#215 [completed] Disable Dynamic Crop option
#289 [duplicate] Dynamic Crop on/off does not persist
#373 [duplicate] Latest version has broken support for MiST FPGA - Amiga Hardware & MiSTer images tested
#256 [not_planned] Update documentation to use GitHub notes where applicable
#250 [completed] Revive AmigaVision Mini for FAT32 limited MiniMig systems?
#477 [duplicate] Adding favorite from ordered list should drop the number
#471 [completed] Amiga.Vision not loading - PFS-III Write Errors (Windows 11)
#364 [completed] AmigaVision does not work on 3.0/3.1 ROMs on real hardware
#474 [completed] Grey screen after running Amiberry
#475 [duplicate] Favorites (Tab) not working for Sensible Soccer family titles with long names (e.g. European Champions)
#467 [duplicate] Add Connect (game)
#466 [completed] Support for PS Vita (Split HDF)
#470 [completed] Discovery microillusions game multiples
#465 [duplicate] MiSTer, latest AmigaVision + Zaparoo v2.17.0-beta.2 can't start games from Zaparoo
#404 [completed] Update to new AGS version that handles parent dirs and favorites better
#449 [completed] It boots into WB and prompts for the volumes
#443 [not_planned] Image not centered on Mister on CRT display
#445 [completed] Mouse support on analogue pocket dock
#440 [duplicate] CD32 Roadblock with Latest Version
#438 [completed] Mist boot-looping in 68k mode (but not 68k20 mode)
#420 [completed] Metadata for Outrun Amiga Edition has wrong year etc
#417 [completed] WHDLoad Tooltypes only work from Workbench
#411 [completed] Difficulties with HDMI output on some displays using the Pi 400.
#387 [completed] Experiment with pushing out partition start cylinder to 2
#407 [completed] Problem on a  real Amiga 1200
#402 [duplicate] Castlevania AGA hanging on publisher splash
#398 [completed] 2026.04.26 Regression: MiSTer not mounting AmigaVision-Saves.hdf
#401 [completed] Software Failure Error : 9000 0038 Task : 40131ED8/40131EC8
October 18 issue activity audit:
#427 [closed/completed] Add AmiGameJam 2025 games
#463 [closed/not_planned] QMTech issues
#433 [closed/not_planned] Teenage Queen - Mouse buttons not working
#220 [closed/completed] Mr. Nutz cropped too much: load/save menu is missing options
#228 [closed/completed] North & South speed issues
#349 [closed/completed] Add VistaPro to GFX category
#423 [closed/completed] Add WHDLoad exit instructions to the launcher
#480 [open/None] Investigate MODs that seem to trigger playback issues in launcher
#287 [closed/completed] Blues Brothers crash after launch
#444 [closed/completed] Barbarian (Psygnosis) crashes after loading on Amiberry
#459 [closed/not_planned] Not booting directly to menu
#439 [closed/completed] Commando on MIST - graphics mangled
#363 [closed/completed] Castlevania AGA is broken (CD32 version works)
#332 [closed/completed] Indy - Fate of Atlantis Startup Issue
#189 [closed/completed] New High Resolution Launcher
#172 [open/None] Indy The Last Crusade hangs after walking around a bit
#478 [closed/completed] Universe crop may need to be adjusted
#126 [closed/completed] 8-bit jungle DOS-Error #205
#252 [closed/completed] hitm4n - additions
October 20 issue activity audit:
#483 [closed/completed] Update WHDLoad to 20.1
#177 [closed/completed] Starflight II missing
#421 [closed/completed] Add Genre to metadata display
#482 [open] Launcher should support Numpad Enter key too
#246 [closed/completed] Add updated versions of Enemy 1 & 2
#245 [closed/not_planned] Amigadig.lha (RTG/AHI requirement)
#240 [closed/completed] Update Arabian Nights to v2.0
#446 [closed/completed] Add Generic KickEmu
#481 [closed/completed] Add Rastan Game to next release (demo configuration)
October 20 follow-up issue activity audit:
#350 [closed/duplicate] Include the Toaster demo reels
#454 [open] Add dealer demos and NewTek demos (NewTek playback crashes)
#424 [closed/duplicate] Enable timed WHDLoad containers for demos
#225 [closed/duplicate] Add Recently Played functionality to AGS2
#270 [closed/completed] Add config for Another World 2: Heart of the Alien
#180 [closed/completed] Additional missing games from the forums
-->


[AmigaVision]:https://amiga.vision
[Download]:https://amiga.vision/download
[Bluesky]:https://bsky.app/profile/amiga.vision
[YouTube]:https://youtube.com/@amiga_vision
[Twitch]:https://twitch.tv/amiga_vision
[RSS]:https://amiga.vision/feed.xml

