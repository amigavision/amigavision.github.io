---
title: Amiga Pixel Aspect Ratios
redirect_from: "/sachs/"
redirect_from: "/par/"
--- 

AmigaVision cares deeply about preserving the correct aspect ratio for all games. That means going beyond just ensuring that games run in the correct variant of NTSC and PAL, but we also ensure that the Pixel Aspect Ratio (PAR) is correct. A pixel on the Amiga was close to square (16:15) in PAL resolutions on a CRT, but quite tall on NTSC displays (5:6). 

When we apply a 5×PAL or 6×PAL [overscale](https://amiga.vision/overscale), 1:1 gives us great results that are near indistinguishable from the original PAR at those sizes, while modernizing the output to fit 16:9 displays.

In 2023, we completely reworked how this is handled, so you no longer have to manually switch to NTSC, which has tall pixels at 5:6 PAR, seen in e.g. Defender of the Crown. Most emulators and captures get this wrong and use 1:1 pixels instead, so we built an implementation that handles all the variants correctly on MiSTer:

* **PAL title, 50Hz:** PAL, 16:15 PAR at 4×, 1:1 PAR at 5× and 6×
* **PAL60 title, 60Hz:** PAL60, 1:1 PAR at 5×
* **NTSC title, 60Hz:**  NTSC, 5:6 PAR at 5×

All these align to the 1080p/4K 16:9 pixel grid while having the correct Pixel Aspect Ratio, so you will not get any shimmering or non-integer pixels.

On the MiSTer side of things, always, *always* run the AmigaVision setup in the `40:27` screen aspect ratio that we supply to ensure that this is handled correctly. This is what AmigaVision sets as the default as long as you copy over the supplied config file and have the correct `MiSTer.ini` definition for the core. 

The `Original` aspect ratio supplied by the core should not be used. The `Full Screen` aspect ratio is *only* used for 6×PAL on 16:9 widescreen displays.

Make absolutely sure that you update your `MiSTer.ini` settings for the core according to the documentation! It should look like this:

```
[Amiga
+Amiga500
+Amiga500HD
+Amiga600HD]
video_mode_ntsc=8 
video_mode_pal=9
vscale_mode=0
vsync_adjust=1 
custom_aspect_ratio_1=40:27
bootscreen=0
```
