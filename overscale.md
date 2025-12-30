---
title: Per-Game 5× PAL Integer Overscaling on MiSTer
redirect_from: "/5x/"
---

The Amiga core (aka. Minimig) on the MiSTer FPGA platform with AmigaVision now supports 5× PAL integer overscaling, crop and offsets on a *per-game* basis. And the optimal settings are all handled for you—transparently—within the AmigaVision setup.

##  What does this mean?

First, as we say in the business: “Sometimes a GIF is worth a thousand words.”

Let's take a look at some example games—real screenshots from the Amiga core on MiSTer, superimposed on a 16:9 1080p/4K TV to give a better impression of how it appears in real life:

![5x scaling](/images/flashback5x.gif)

![5x scaling](/images/gods5x.gif)

![5x scaling](/images/lionheart5x.gif)

![5x scaling](/images/megalomania5x.gif)

(Yes, we are sacrificing the logo here, but all of the game's controls are accessible, see explanation below)

## How does this work?

“I thought PAL on Amiga was 256 pixels tall, that results in a 1280 pixel tall image when doing a 5×/10× zoom—which is more than a 1080p/4K display has. Do I need a 1200px tall monitor to make use of this?”

No, we can actually make this work with 1080p/4K. The large majority of Amiga games run in PAL, not NTSC, which on paper should make this impossible. However, pretty much all of the games (with some exceptions, which we handle) only use the top ~200px of the viewport. 

This was exceedingly common in Amiga games, since European developers would often restrict the games to be 200px tall to ensure that they could (theoretically!) work in NTSC resolutions, which on the Amiga was 200px (without overscan).

This means we effectively have a 16:10 aspect ratio for PAL games (a little taller than 3:2, the Game Boy Advance aspect ratio) — who knew that most Amiga games were widescreen already?

## What does that mean?

It means that we can apply a 5×/10× scaling factor, since 200px × 5× scale = 1000px. You may have noticed that when you run a game on an Amiga emulator or on the MiSTer core without our settings, there’s a lot of wasted, empty space — since everything runs at 4× scale on a 1080p/4K display to ensure that all the pixels are visible. It theoretically *has* to do this, since the vertical resolution of the Amiga is 256px in PAL mode, and technically 270px with overscan. But since most games don’t use the full 256px height, *those games can be displayed with a 5×/10× scale instead, as long as the game doesn’t have any critical elements outside of a 216px viewport (216×5 = 1080p, or 216×10 = 4K)*.

## I can see some potential issues here?

You’re right. Amiga is kind of complicated, in the sense that it supports a wide range of different resolutions. So we couldn’t just blindly apply a 5× scale for the core, as many games would be unplayable. 

Additionally, the offset when you do 5×/10× scale could result in large parts of the image being off-screen, since games can choose their own offset when they target any resolution, include overscan, etc. 

In summary, it’s hard to make a top-level setting do a good job at optimally using the 1080p/4K display as a global setting.

## What can we do?

What we need is a *per-game* setting for which games should use 5×/10× scale, a custom setting *per-game* for the offset when it does, and the ability to revert to a different setting when you exit the game and start another game.

(Amiga was the first MiSTer core to support 5×/10× scaling in the first place, using a file in `/config` named `minimig_vadjust.dat`. But this setting was global, which didn’t solve our problem.)	

[What we proposed, and implemented], was the ability for the Amiga core to read this `vadjust` file from the `/shared` directory that can be read, written, and interpreted by *both* the Amiga core as well as MiSTer’s scaler. 

Whenever we start a game in AmigaVision, we look up what the optimal settings for that particular game is, and copy a custom vadjust file to that directory. 

When MiSTer changes resolutions in the Amiga core, it checks whether there is a vadjust file in the shared directory, and applies those settings.

And yes, that *does* mean that *every single game* in the resulting image needs to have its own 5× settings. 

**We have gone through the top ~3000(!) games on the Amiga, manually adjusted whether it should use 5× scaling, and when it does—what kind of offset that game needs to not unnecessarily cut off any critical game elements.**

With the latest AmigaVision (the 2021 versions onwards), you will get customized 5× integer vertical scaling for the games that use ~200px of the available viewport. 

In general, the approach for 5×/10× scale/crop is that it’s OK to sacrifice a few lines on the top and/or bottom.

This means that *we may sacrifice a few pixels*, which *could* be critical in e.g. a platformer like Flashback, where you could have platforms that were just 1-2 pixels of the viewport, and have a bad effect on difficulty level or gameplay in general. We take special care to make sure this never happens.

## Scaling should not affect the game play

There are entire classes of games, e.g. driving games and top-down games, that don’t rely on seeing every single pixel for the game to work fine. This is when we accept cropping. And if you try the game in 4× vs. 5×/10× on an actual TV instead of these screenshots, I think you will agree that losing a few pixels in-game to the 5×/10× scale is a trade-off worth making.

Many of the European games have an interesting quirk: The *game itself* fits neatly into 5×PAL, sometimes with a few pixels of crop with the right vertical offset—but often have a 256px title screen with artwork that will have more serious crop in 5×PAL. We think this is a reasonable trade-off to make, so you might see some title screens and intermission screens have cropping that doesn’t look optimal at first glance. However, we only do this when there’s no information lost as far as gameplay is concerned.

We hope you enjoy this huge upgrade to the Amiga games you know and love on your 1080p/4K screen!

## Additional notes

* NTSC is always 5×/10× scale using AmigaVision, since it is usually 200px tall — and suffers no ill consequences or cropping, being scaled to 1000px tall with a 40px letterbox on top/bottom to make it 1080p/4K.
* You can turn off the Dynamic Crop setting in the Options section of the launcher if you prefer to not have this be the default behavior. 
* None of this has any effect on the analog output. Amiga usage on CRTs works the way it always did, and resolutions that are not 1080p/4K are also behaving the way they always did.
* Resolutions that are not 1080p/4K should be unaffected (e.g. 1200p and 1440p).

[What we proposed, and implemented]:https://github.com/MiSTer-devel/Minimig-AGA_MiSTer/issues/90
