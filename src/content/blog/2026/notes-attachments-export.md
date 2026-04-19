---
title: "2,827 Notes, 11,273 Attachments, and a Folder on My Desktop"
description: "How I extracted years of Apple Notes using Claude Code, a Swift CLI, and eventually just letting Apple do the hard part."
pubDatetime: 2026-04-19T16:24:00+01:00
tags: ["notes", "apple-notes", "obsidian", "productivity", "claude-code"]
---

I have a notes problem. Not in the sense that I take too many notes, that is arguably a good thing, but in the sense that after years of migrating from Evernote to Apple Notes, I ended up with somewhere around 3,000 notes scattered across folders that made sense at the time and absolutely no sense now.

Some folders had hundreds of notes. Some had three. Notes about my Land Rover restoration sitting next to dental lab supplier contacts sitting next to half finished ideas for apps I was building. A digital junk drawer, basically.

> Which folder does a note live in when it is about four different things at once?

That question is what started this whole project. The answer, it turns out, is none of them, and working that out properly took most of an afternoon and a few wrong turns.

## The Plan

I had been thinking about moving to Obsidian for a while. Local Markdown files, proper linking between notes, a structure that actually maps to how I work across multiple overlapping projects. The idea was simple enough: get the notes out of Apple Notes, clean them up, and import them somewhere better organised.

The first question was how to get them out. Apple Notes locks its data away in a sandboxed SQLite database with no bulk export option, so I opened a Claude Code session and built a Swift command line tool to do it. The brief had one non-negotiable rule: read only. The tool must never touch the source data under any circumstances.

## The First Attempt

The tool used AppleScript as a bridge into Notes, working in two phases. First a single JXA call fetched metadata for all notes at once. Then each note's HTML body was fetched individually before writing, with six concurrent fetches running in parallel. A live progress bar kept things sane during a run that took the best part of two hours.

```
████████████░░░░░░░░ 62% — "Series III brake cylinder notes"
```

The text export worked well. 3,026 clean Markdown files with YAML frontmatter, folder structure preserved. Then I checked for attachments and found nothing. No images, no PDFs, no attachments folder. Everything embedded in the notes had been silently skipped.

Back into Claude Code. The attachment extraction was added, but it introduced a new problem. Apple's internal AppleEvent pipe buffer caps out at around 64KB, so any call returning more than that would deadlock. That got fixed. Then a `-1741` error appeared when bulk fetching from a folder with 2,400 notes. That got fixed too, switching to individual per note fetches. Then attachment filename collisions started causing files to be skipped silently. Fixed again.

At some point I nearly gave up on the whole thing.

## The Smarter Approach

What actually unblocked everything was stepping back and using Apple's own export function. Notes can export as Markdown natively, and it knows its own data format better than any AppleScript bridge ever will. I consolidated everything into one folder and let Apple do the export itself.

That gave me 2,827 notes and 11,273 attachments. The catch was that Apple's export is not exactly clean. Attachment links used uppercase folder names. PDF files were exported with broken heading markup. And thousands of attachment files had no extension at all, just UUID filenames with no indication of what they contained.

The Claude Code tool was repurposed to process the native export rather than perform its own. It fixed the uppercase attachment paths, repaired the PDF heading markup, and tackled the extension-less files using magic bytes detection, reading the raw binary header of each file to identify whether it was a JPEG, PNG, GIF, PDF or something else. Of the 8,797 files that needed identifying, only 37 remained unidentifiable. Those are almost certainly corrupted.

## Sorting the Tags

A lot of my older notes had tags appended as hashtags at the end of the note body, imported that way from Evernote years ago. The tool extracted 1,578 tag tokens from 499 notes and moved them into proper YAML frontmatter, carefully leaving `#include` in code notes and hashtags mid-body in Instagram and WhatsApp exports completely alone.

The next pass will use a local Ollama model running on my M4 Mac mini to generate clean AI suggested tags for every note, no cloud, no cost, no rate limits. The `qwen2.5:7b` model will also suggest a proper filename for each note, which means the output folder will end up with human readable names rather than whatever title was in Apple Notes at the time.

## Where Things Stand

Right now there is a folder on my desktop containing 2,827 clean Markdown files and 11,273 attachments, properly referenced, properly named, waiting to be imported into whatever app I decide to use.

That decision is still open. Obsidian remains the leading option for long term storage. But the more I worked through this project the more I appreciated what Apple Notes actually does well, fast capture, native sync, zero friction. The system I am leaning toward uses both: Notes for capturing, Obsidian for filing and long term reference.

The tool that got everything here is a read only Swift CLI. It will stay that way. If you are thinking about doing something similar with your own Apple Notes library, the native export route is the right starting point, let Apple handle the extraction and build your processing on top of what comes out.

---

*189 notes contain attachment placeholders that Apple could not export. 552 notes had metadata that did not match their filename due to special characters being stripped. 37 attachments remain unidentified. Every project has its asterisks.*
