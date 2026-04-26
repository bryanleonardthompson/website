---
title: "The 2006 Black MacBook"
description: "A £40 Gumtree find with a dead battery. How a 2006 black MacBook became one of the most enjoyable computers I own."
pubDatetime: 2026-04-27T00:01:00+00:00
tags: ["apple", "macbook", "linux", "hardware", "retro"]
---

Sometime in the mid-2000s I went to a photography workshop at the Apple Store on Buchanan Street in Glasgow. The presenter was shooting with a Leica — an M8 or M9, I cannot remember which — and he had a black MacBook. I thought it was the coolest setup I had ever seen. I am fairly sure that was the first and last time I saw a black MacBook in real life.

I think about it maybe once or twice a year.

![My 2006 MacBook 2,1 with AirPods Max and Magic Mouse](/assets/img/2026/the-2006-black-macbook/s1200706.jpg)

As the years went by I got into Leica cameras myself. An M6, a Q, an SL2-S. All of that traces back to that workshop. His photographs were stunning and it stuck with me.

The black MacBook, though. It never occurred to me to look for one. I think the reason was that at the time I needed something capable of running the newly released macOS version of Autodesk AutoCAD, which meant I needed a MacBook Pro. So the black MacBook stayed a memory and nothing more.

Anyway. I forgot it existed.

Fast forward to recently and a YouTuber mentioned the now "rare" black MacBook. I did the usual thing of checking eBay and saw they were going for between £100 and £200. A bit steep for something that would essentially be an ornament.

Then I found one on Gumtree for £40. Local. That is an impulse purchase price, so I bought it.

The reason it was so cheap was a dead battery — not just flat, but completely unrecognised by the laptop. When I went to collect it the machine powered up fine on the cable, which was good enough. It was going to be used for fun, not work.

## Price

These vary quite a bit. Dead batteries at the cheaper end, around £30. Boxed and immaculate at the top, closer to £200.

I am not really a collector, so I went for the cheaper end.

## Condition

So what did £40 get me?

Genuinely good condition for something nearly twenty years old.

The drive was the original 120GB HDD — one of two things that made the black version cost more than the white at launch, the other being that it was simply black. I swapped it for a 240GB SSD I had sitting around from another project.

The RAM had already been maxed out at 3GB by the previous owner, which is a shame because upgrading it is oddly satisfying. There is a pull tab under the battery that slides the RAM out toward you as if it is begging to be replaced.

The screen lacks a little contrast, though I do not think that is age. The keyboard has a worn look to it — letters intact, but a glossy shine on the keys that have clearly been pressed thousands of times. I quite like it.

The CD drive works. The WiFi connects to my WiFi 7 network without complaint, though it does not like my iPhone hotspot. Bluetooth pairs with the Magic Mouse 2 and my AirPods Max without any trouble, though the more advanced features do not work — the OS is far too old for modern iCloud integration.

One odd thing: touch scrolling on the Magic Mouse 2 does not work, but works perfectly with the original Magic Mouse.

![My 2006 MacBook 2,1 with beautifully worn keys](/assets/img/2026/the-2006-black-macbook/s1200699.jpg)

## Battery

Finding a replacement turned out to be more of an adventure than expected.

NOS (new old stock) original batteries were on eBay for upwards of £100, which felt absurd given what I paid for the laptop. I was close to giving up on a battery entirely when I found a seller on Amazon in Germany selling compatible black batteries for around £30.

It took about a week to arrive. When I installed it, coconutBattery showed a manufacture date of 2013, which was briefly concerning. The QC sticker on the battery itself said December 2023. A software reporting glitch, apparently.

coconutBattery recognised it as a working battery at 100% health.

Installing it reminded me how easy things used to be. Turn it upside down, unlock the latch, lift out the old battery, drop in the new one. Done.

The only downside is the finish. The replacement is slightly glossier than the matte casing of the MacBook. It bothered me enough that I briefly opened the old battery housing to see if I could transplant the new cells into the original casing. It looks possible. It also looked just complicated enough that I decided to leave it for another day.

Since writing this I have found a seller with a better match to the matte finish. I will be ordering one on next payday, partly as a better-looking replacement and partly as a spare.

![The glowing Apple logo of yesteryear](/assets/img/2026/the-2006-black-macbook/s1200683.jpg)

## Operating System

The latest OS officially supported on this machine is OS X Lion, which today is essentially unusable for anything modern. Browsers struggle. Services simply do not work.

I briefly tried patching it with tools that let newer versions of macOS run on unsupported hardware. That technically works, but performance was not great and compatibility was still limited. What I wanted was something modern enough to get iCloud services working. That was not going to happen.

So I tried something different.

## Linux

Installing Linux on older Intel Macs is surprisingly well documented, thanks to the work of various enthusiasts.

The guide I followed was written by [Matt](https://mattgadient.com/linux-dvd-images-and-how-to-for-32-bit-efi-macs-late-2006-models/), who documented the entire process of getting Linux running on a MacBook 2,1 — including all the quirks specific to that hardware. I have massively oversimplified what the process involves. Go read his guide. It is pure hacking poetry.

There were a few small challenges — trackpad behaviour, keyboard layout — but nothing serious. Once everything was working, the machine felt far more modern. Comfortable web browsing, YouTube without much trouble.

## Thin Client

The more interesting realisation was that the MacBook did not need to do the heavy lifting itself.

I have a Mac mini (M4) at home that is significantly more powerful. So instead of pushing the MacBook to its limits, I set it up as a thin client. [Tailscale](https://tailscale.com) creates a secure connection between the two machines, and [Remmina](https://www.remmina.org) handles the remote desktop over macOS screen sharing.

Effectively the MacBook becomes a portable window into the Mac mini. Applications and files live on the Mac mini. The MacBook just displays the screen and handles input.

![The MacBook running macOS Sequoia via remote desktop](/assets/img/2026/the-2006-black-macbook/img_1948.jpeg)

## Booting Straight Into the Mac Mini

The last experiment was a small script that runs automatically when Linux starts. It waits for WiFi to connect, then opens the Remmina session.

In theory the MacBook could boot and connect straight to the Mac mini without any interaction at all — a dedicated remote terminal. I have not enabled this permanently because I still want to use Linux locally when I feel like it, but it is nice knowing the option is there.

![The MacBook against a backdrop of two 30" Apple Cinema Displays](/assets/img/2026/the-2006-black-macbook/s1200698.jpg)

## A Few Gripes

Not everything was perfect.

The screen flickered briefly just before going to sleep. Not a dealbreaker, but noticeable enough to mention.

The bigger issue was the keyboard. This is a US layout, which means the £ and $ signs are swapped. I assumed that would be a straightforward fix in software. It was not. But the layout difference that actually bothered me most was the enter key. On a UK keyboard it is large — a tall, two-row key that your right hand finds without thinking. On a US layout it is a stubby single-row key. I had never given the enter key a second thought until using this laptop. I think about it every time I press return.

A few weeks ago I bought a 2008 MacBook in UK layout to replace it. It is noticeably faster too. I will write about that separately.

## Final Thoughts

What started as a £40 impulse buy has become one of the most enjoyable computers I own.

There is something satisfying about giving an old machine a new purpose. This MacBook is nearly twenty years old, but with a bit of creativity it still has plenty of life left in it.

And every time I open it, I think about that photographer in the Apple Store in Glasgow.
