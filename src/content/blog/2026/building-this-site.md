---
title: "Building This Site on a 2008 MacBook"
pubDatetime: 2026-04-20T00:04:00+01:00
description: "How a frustrating afternoon trying to SSH into a Mac Mini and run local AI models ended with a 2008 MacBook doing everything we needed all along."
tags: ["meta", "web", "ai"]
---

It started, as these things often do, with a perfectly reasonable idea that slowly unravelled into something else entirely.

I wanted to move away from WordPress. Not dramatically, not out of any great philosophical objection, just... I'd had enough of the templates. Enough of the limited options. Enough of paying for something that felt like it was fighting me every time I tried to make it look the way I wanted.

I'd seen Peter Steinberger's site when I was doing my AI research. Simple, fast, clean. When you click on his blog the menu doesn't reload the page, it just slides up and the content comes to meet you. That's all I've ever wanted. Something that felt like mine. Something so simple that the entire site and blog entries are less than 2mb. You read that right. The full repo is less than 2mb at the time of writing. Granted I have no photos or media posted yet, but I don't even know if I'll bother. If I ever need to reference or share photos I'll just... well I'll figure that out. I'll add that to my list of things to think about along with where I'm going to store all my notes now that I've freed them from Apple's ecosystem.

So anyway I forked his repo.

That's not the shenanigans part. The shenanigans came later, when I started thinking about writing on my 2008 MacBook. My proper writing machine. The one I sit down with when I've stepped away from the desk and want to think.

The problem, as I saw it, was AI. I've got used to having Claude around when I write. Not to write for me, but to know the context of a project, to help me shape how I talk about it, to catch the bits that don't quite land. How was I going to have that on a machine running Mac OS Lion?

I went through options. Ollama running on the Mac Mini, SSH tunnels from the MacBook, shell scripts that would pipe my drafts through a terminal connection to a local model. We talked about Tailscale. We talked about the API. We talked about the cost of tokens and whether a local llama3 model would be good enough for anything beyond basic proofreading.

It was a good plan. Quite an elaborate one actually.

Then I just... opened Chromium on the MacBook and went to claude.ai.

It worked. Completely. Claude Code too. The whole thing, running fine on a laptop from 2008 that has absolutely no business handling any of this. My reaction, typed into the chat at half two in the morning, was about as measured as you'd expect:

> **Me:** Holy shit, I've also got access to Claude Code on here too! That's crazy.
>
> **Claude:** Ha! There you go, problem solved by just trying it. The email plan, the Ollama setup, all of that was completely unnecessary.

All that planning. All those tunnels and scripts and workarounds. And the answer was just... use the browser.

There's probably a lesson in there somewhere about not assuming something won't work before you've tried it. Or maybe it's just a reminder that the internet is a remarkable thing and a 2008 MacBook is a more capable machine than we give it credit for.

Either way, the site is built, the domain is pointing at Netlify, and I'm writing this on the very laptop we spent half the night trying to work around.

Some nights just go like that.

*cracks open a beer*
