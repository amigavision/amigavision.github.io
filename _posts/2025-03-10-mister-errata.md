---
title: AmigaVision 2024.10.10 Errata: Error in MiSTer Configuration
published: true
---

One of the things changed in the 2024.10.10 version of AmigaVision was setting the default configuration for MiSTer to NTSC to avoid delays in HDMI switching. We tested this new configuration to ensure that PAL games ran correctly too, but we have since found many games and demos where this is not the case.

If you are running AmigaVision 2024.10.10 on MiSTer, the simple fix is to start AmigaVision, bring up the MiSTer menu by pressing `F12`, then select `Audio & Video` → `TV Standard` and switch that to `PAL`. 

Go back one level, and remember to select `Save Configuration` and select the startup configuration to make the change permanent.

This will be fixed in upcoming versions, and also does not affect earlier versions — only 2024.10.10. It also does not affect Analogue Pocket FPGA, emulation or real Amiga hardware — only the MiSTer configuration.

We apologize for not catching the problem in time — we were “lucky” and every game we tested seemed to work, but with 3000+ configurations, we didn't catch the problematic ones in time. We will expand our testing for future releases.