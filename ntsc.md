---
title: Amiga Pixel Aspect Ratios
redirect_from: "/sachs/"
redirect_from: "/par/"
--- 

The AmigaVision team cares deeply about preserving the correct aspect ratio for all games. That means going beyond just ensuring that games run in the correct variant of NTSC and PAL, but we also ensure that the Pixel Aspect Ratio (PAR) is correct. A pixel on the Amiga was close to square (16:15) in PAL resolutions on a CRT, but quite tall on NTSC displays (5:6). Most emulators and video captures seen online get this wrong and use 1:1 pixels instead, so we built an implementation that handles all the NTSC and PAL variants correctly on MiSTer.

Take a look at the difference using this screenshot from Defender of the Crown, which is an NTSC game. All the character portraits are squished vertically when rendered in PAL — making the characters look more stocky:

<figure class="compare before" id="dotc-compare">
  <div class="compare-stack">
    <img src="./images/dotc-ntsc.png" alt="NTSC" data-caption="NTSC" class="is-active">
    <img src="./images/dotc-pal.png"  alt="PAL"  data-caption="PAL">
  </div>
  <figcaption class="compare-caption">NTSC</figcaption>
</figure>

In 2023, we completely reworked how this is handled, so you no longer have to manually switch to NTSC, which has tall pixels at 5:6 PAR, as demonstrated here in Defender of the Crown. 

All of these align to the 1080p/4K 16:9 pixel grid while having the correct Pixel Aspect Ratio, so you will not get any shimmering or non-integer pixels.

<script>
document.addEventListener("DOMContentLoaded", () => {
  const figure = document.querySelector("#dotc-compare");
  if (!figure) return;

  const imgs = Array.from(figure.querySelectorAll(".compare-stack img"));
  const captionEl = figure.querySelector(".compare-caption");
  if (imgs.length < 2 || !captionEl) return;

  const setState = (activeImg) => {
    const text = activeImg.dataset.caption || activeImg.alt || "";
    captionEl.textContent = text;

    // Map active image to before/after styling
    // (first image = before/left, second image = after/right)
    const isAfter = activeImg === imgs[1];
    figure.classList.toggle("before", !isAfter);
    figure.classList.toggle("after",  isAfter);
  };

  let i = imgs.findIndex(img => img.classList.contains("is-active"));
  if (i < 0) i = 0;

  // Ensure exactly one active image on load
  imgs.forEach((img, idx) => img.classList.toggle("is-active", idx === i));
  setState(imgs[i]);

  setInterval(() => {
    const next = (i + 1) % imgs.length;

    imgs[i].classList.remove("is-active");
    imgs[next].classList.add("is-active");

    setState(imgs[next]);
    i = next;
  }, 1000);
});
</script>

<style>
	.compare { 
		position: relative;
		margin: 0;
	}

	/* Use grid to stack images while preserving height */
	.compare-stack {
	  display: grid;
	}

	.compare-stack img {
	  grid-area: 1 / 1;
	  width: 100%;
	  height: auto;
	  display: block;

	  opacity: 0;
	  transition: none; /* instant flip */
	}

	.compare-stack img.is-active { opacity: 1; }

	/* Caption: bottom center */
	.compare .compare-caption {
	  font-family: sans-serif;
	  font-weight: 600;

	  background: #fff;
	  border: 1px solid #c0c0c0;
	  border-radius: 12px;
	  color: #2e3452;
	  opacity: 0.8;
	  padding: 12px;
	  line-height: 100%;
	  margin: 0;
	  z-index: 2;
	  pointer-events: none;

	  position: absolute;
	  left: 50%;
	  bottom: 12px;
	  transform: translateX(-50%);
	}
	</style>

  
[John Novak on NTSC scaling]:https://blog.johnnovak.net/2022/04/15/achieving-period-correct-graphics-in-personal-computer-emulators-part-1-the-amiga/#pal-vs-ntsc