---
title: Amiga Pixel Aspect Ratios
redirect_from: "/sachs/"
redirect_from: "/par/"
--- 

AmigaVision cares deeply about preserving the correct aspect ratio for all games. That means going beyond just ensuring that games run in the correct variant of NTSC and PAL, but we also ensure that the Pixel Aspect Ratio (PAR) is correct. A pixel on the Amiga was close to square (16:15) in PAL resolutions on a CRT, but quite tall on NTSC displays (5:6). 

Take a look at the difference using this screenshot from Defender of the Crown, which is an NTSC game. Use the slider to see how it looks in NTSC compared to PAL. All the character portraits are too wide — or more accurately, squished vertically — in the PAL version:

<img-comparison-slider class="slider-with-animated-handle" value="49">
  <figure slot="first" class="before">
    <img slot="first" width="100%" src="/images/dotc-ntsc.png">
		<figcaption>NTSC</figcaption>
	</figure>
  <figure slot="second" class="after">
		<img slot="second" width="100%" src="/images/dotc-pal.png">
  	<figcaption>PAL</figcaption>
	</figure>
  <svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
  </svg>
</img-comparison-slider>


In 2023, we completely reworked how this is handled, so you no longer have to manually switch to NTSC, which has tall pixels at 5:6 PAR, seen in e.g. Defender of the Crown. Most emulators and video captures seen online get this wrong and use 1:1 pixels instead, so we built an implementation that handles all the variants correctly on MiSTer:

* **PAL title, 50Hz:** 16:15 PAR at 4×, 1:1 PAR at 5× and 6×
* **PAL60 title, 60Hz:** 1:1 PAR at 5×
* **NTSC title, 60Hz:** 5:6 PAR at 5×

All these align to the 1080p/4K 16:9 pixel grid while having the correct Pixel Aspect Ratio, so you will not get any shimmering or non-integer pixels.

When we apply a 5×PAL or 6×PAL [overscale](https://amiga.vision/overscale), 1:1 gives us great results that are near indistinguishable from the original PAR at those sizes, while modernizing the output to fit 16:9 displays.

On the MiSTer side of things, always, *always* run the AmigaVision setup in the `40:27` screen aspect ratio that we supply to ensure that this is handled correctly. This is what AmigaVision sets as the default as long as you copy over the supplied config file and have the correct `MiSTer.ini` definition for the core. 

The `Original` aspect ratio supplied by the core should not be used. The `Full Screen` aspect ratio is *only* used for 6×PAL on 16:9 widescreen displays.

Make absolutely sure that you update your `MiSTer.ini` settings for the core according to the documentation! It should look like this:

```
[Amiga
+Amiga500
+Amiga500HD
+Amiga600HD
+AmigaCD32]
video_mode_ntsc=8 ; These two use the recommended setting of 1080p60 and
video_mode_pal=9  ; 1080p50, adjust if you want a different resolution
vscale_mode=0
vsync_adjust=1 ; You can set this to 2 if your display can handle it
custom_aspect_ratio_1=40:27
bootscreen=0
```
<style>
  .before,
  .after {
    margin: 0;
  }
  figcaption {
	  font-family: sans-serif;
	  font-weight: 600;
  }
  .before figcaption,
  .after figcaption {
    background: #fff;
    border: 1px solid #c0c0c0;
    border-radius: 12px;
    color: #2e3452;
    opacity: 0.8;
    padding: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
  }
  .before figcaption {
    left: 12px;
  }
  .after figcaption {
    right: 12px;
  }
  .custom-animated-handle {
    transition: transform 0.2s;
  }

  .slider-with-animated-handle:hover .custom-animated-handle {
    transform: scale(1.2);
  }
</style>
  
<script
  defer
  src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
/>
  
[John Novak on NTSC scaling]:https://blog.johnnovak.net/2022/04/15/achieving-period-correct-graphics-in-personal-computer-emulators-part-1-the-amiga/#pal-vs-ntsc