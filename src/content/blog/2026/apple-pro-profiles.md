---
title: "Apple Pro Profiles"
description: "Apple built something quietly brilliant in the early 2000s: editorial profiles of real creatives who used a Mac. Then they took it all down. I went looking for them."
pubDatetime: 2026-04-24T00:01:00+01:00
tags: ["apple", "history", "mac", "research"]
---

Apple built something quietly brilliant in the early 2000s: editorial profiles of real creatives who used a Mac. Then they took it all down. I went looking for them.

Sometime in the early 2000s, Apple built something on their website that I have thought about more than once over the years. A section called Apple Pro. Editorial profiles of real working people who used a Mac. Not celebrities. Not adverts dressed up as stories. Actual people: a mountain-bike filmmaker, a concert photographer, a neuroscientist, a claymation VFX team. Each page told their story, and the Mac just happened to be in it.

At some point, probably around 2008 or so, Apple took it all down. No archive. No announcement. Just gone.

I decided recently to try and find them all.

## Why I even cared

It is partly nostalgia and partly something more than that. Those pages captured a specific creative moment. Junkie XL was remixing everything. Magnum Photos was moving into motion. Visual effects studios were figuring out what an entirely digital pipeline even looked like. Apple was quietly documenting all of it, and the Mac was the common thread running through every story.

That framing, Apple as the natural tool of the seriously creative, always felt more honest than anything that came after it. The profiles were not testimonials. They were just... interesting. The product was almost incidental.

So when all of that disappeared from the internet I found it genuinely annoying. Not dramatically annoying. Just the low-level irritation of something worth keeping not being kept.

## The search

My first move was obvious enough. I searched the web for any kind of compiled list and found nothing. A few individual profiles still existed as fragments, referenced in old photographer portfolios or buried in a blog post from 2007. But nobody had ever sat down and catalogued the whole section.

The Wayback Machine was the next stop. The archive does have snapshots of the Apple Pro index page going back through the years, which means the individual profile URLs are technically in there somewhere. The problem is the coverage is patchy. Different profiles appear in different snapshots. Getting a complete picture would mean working through multiple snapshot years manually and building a cumulative list as you go.

I wrote a prompt for Cowork to try and do that systematically. The idea was to hit the index page at several points across the section's lifespan, maybe 2002, 2004, 2006, 2008, and pull every unique profile URL it found across all of them. It was a reasonable plan. The archive just did not cooperate cleanly enough to make it work.

I also drafted a Reddit post. The Apple and Mac communities have long memories, and I thought someone out there might remember being sent to a specific profile or have a saved copy somewhere. That went out as a backup.

What actually cracked it was ChatGPT. I put the same question to it and it came back with a list. Apparently its training data includes enough coverage of the Apple Pro pages, whether from the pages themselves or from sites that referenced them, to reconstruct a working catalogue. Names, disciplines, years. Not perfect, and I would not stake anything on every entry being completely accurate, but it was a real starting point.

I used Claude to help with some of the research and planning along the way. Mostly for thinking through the structure and for working out what a systematic Wayback Machine search would actually look like. Useful for the thinking parts. Less useful than ChatGPT turned out to be for the actual data retrieval, which is just an honest assessment.

## What I ended up with

Sixty-eight profiles. Five categories: Film/Video, Music, Photography, Design/Architecture/Art, Science. Years running from 2006 to 2008, which reflects the snapshot years available rather than the full life of the section.

Some names I recognised immediately. Brian Eno. Erykah Badu. T-Pain, which was not what I was expecting. Vincent Laforet, who was already a significant name in photojournalism. Magnum Photos, which felt completely right for an Apple page from that era.

Others I had never heard of and looked up afterwards. Jamie Lidell. Hypnogaja. A mountain-bike filmmaker called Jamie Houssian working with a group called The Collective. A Canadian audiovisual collective called D-Fuse. The further down the list you go the more interesting it gets, honestly. The famous names were expected. The ones you have to look up are the ones that make the project feel worth doing.

## Where it lives now

I built a Notion database for it. Every profile has its name, profession, category, year, and a Wayback Machine URL pre-built so I can click through to whatever archived version exists. There is a board view grouped by discipline that mirrors how Apple organised the section, and a filtered view that shows me only the profiles I have not visited yet so I can work through them methodically.

Some of those Wayback URLs will work first time. Some will have incomplete snapshots with broken images or missing styles. A few probably were not captured at all. Every project has its asterisks.

There is also the question of how far the section actually went. Two of the profiles are from localised versions of the site, one French, one from the UK store. Which suggests there may be profiles out there in other markets that nobody has catalogued at all.

Something to look into on a slow afternoon.

---

*If you remember any of the Apple Pro profiles or have a link to one that still works somewhere, I would genuinely like to know about it.*

---

## Files

**apple-pro-profiles.html** — the static table page, ready to drop into your repo. 32kb, no dependencies, dark mode included.
