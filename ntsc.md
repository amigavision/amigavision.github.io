---
title: Pixel Aspect Ratios on the Amiga
redirect_from: "/sachs/"
redirect_from: "/par/"
description: How we handle Amiga’s special pixel aspect ratio in NTSC
--- 

The AmigaVision team cares deeply about preserving the correct aspect ratio for all games. That means going beyond just ensuring that games run in the correct variant of NTSC and PAL, but we also ensure that the Pixel Aspect Ratio — aka. PAR — is correct. A pixel on the Amiga was close to square (16:15) in European PAL resolutions on a CRT, but quite tall on United States NTSC displays (5:6). 

Most emulators and video captures seen online get this wrong and use 1:1 pixel aspect ratio for US NTSC games, so we built an implementation that handles the NTSC and PAL variants correctly, instead of what is commonly (and erroneously) the case.

Take a look at the difference using this screenshot from Defender of the Crown, which is a US NTSC game. All the character portraits are squished vertically when rendered in 1:1 pixel aspect ratio — what most people know as European PAL rendering on the Amiga — making the characters look shorter and more stocky:

<figure class="compare before" id="dotc-compare">
  <div class="compare-stack">
    <img src="./images/dotc-ntsc.png" alt="NTSC" data-caption="NTSC" class="is-active">
    <img src="./images/dotc-pal.png"  alt="PAL"  data-caption="PAL">
  </div>
  <figcaption class="compare-caption">NTSC</figcaption>
</figure>

In 2023, we completely reworked how this is handled on the MiSTer FPGA platform, so you no longer have to manually switch to NTSC to get the correct pixel aspect ratio — which has tall pixels at a 5:6 PAR, as demonstrated above in Defender of the Crown. 

In 2024&ndash;2026, we also reworked Amiga *emulator* scaling along with the author of [Amiberry](https://amiberry.com), which culminated in fixing this 30-year old Amiga scaling issue with the release of [AmigaVision 2026.04.16](/2026.04.16) and Amiberry 8.1.

We hope to work with all the other Amiga emulators to do the same, and will update this document accordingly, but if you are using an emulator, we currently recommend Amiberry over any other alternative.

All of these align to the 1080p/4K 16:9 pixel grid while having the correct Pixel Aspect Ratio, so you will not get any shimmering or non-integer pixels.

## Video Comparison

Take a look at this snippet from a longer video by [LemonAmiga](https://lemonamiga.com) that compares Monkey Island rendered in PAL to the original and intended NTSC:

<iframe
  style="aspect-ratio: 16/9; width: 100%;"
  src="https://www.youtube.com/embed/CYiBDVw_lzA?start=886"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
  >
</iframe>

This video also demonstrates — unrelated to scaling — that the games move at the correct NTSC speed, making scrolling smoother. For some NTSC games like Eye of the Beholder and Indiana Jones and the Last Crusade, music will also play at the wrong speed if you play them in PAL. AmigaVision always run all NTSC games in NTSC without you having to worry about it.

If you want a further deep dive on NTSC games on Amiga, we recommend [John Novak's article on Amiga and NTSC].

## Addendum: Pixel Aspect Ratios in NTSC for some common resolutions

Here are the pixel aspect ratios for some of the most common resolutions that you get with the new automatic integer scaled NTSC in Amiberry:

|       | Pixel Aspect Ratio | Multiplier |
|:----------------------:|:-----:|:------:|
| **480p**               | 1:1   | (1)    |
| **600p**               | 1:1   | (1)    |
| **720p**               | 1:1   | (1)    |
| **768p**               | 1:1   | (1)    |
| **800p**               | 3:4   | (0.75) |
| **900p**               | 3:4   | (0.75) |
| <br>**1080p**<br>(HD)  | 4:5   | (0.80) |
| **1200p**              | 5:6   | (0.83) |
| **1440p**              | 6:7   | (0.85) |
| <br>**1536p**<br>(iPad)| 6:7   | (0.85) |
| **1600p**              | 7:8   | (0.88) |
| <br>**2160p**<br>(4K)  | 4:5   | (0.80) |
| **2880p**              | 6:7   | (0.85) |
| <br>**4320p**<br>(8K)  | 13:16 | (0.81) |

We keep the ratio within 0.08 of the optimal 0.83&ndash;0.85 that are the 5:6 *&* 6:7 PARs, which makes it possible to go as low as 800p resolutions — trying to do proper integer-scaled NTSC PAR on resolutions lower than that (e.g. 720p or 640p, two common handheld emulator resolutions) just doesn’t look right, so we keep those at 1:1 PAR.

---

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

  
[John Novak's article on Amiga and NTSC]:https://blog.johnnovak.net/2022/04/15/achieving-period-correct-graphics-in-personal-computer-emulators-part-1-the-amiga/#pal-vs-ntsc
