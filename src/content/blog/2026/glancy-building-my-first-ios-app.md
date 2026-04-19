---
title: "Glancy: Building My First iOS App"
description: "How a frustration with clunky CGM apps turned into my first iOS build and a brand new Glance Mode built for the road."
pubDatetime: 2026-04-19T12:00:00+01:00
tags: ["ios", "swiftui", "cgm", "app-development"]
---

How a frustration with clunky CGM apps turned into my first iOS build and a brand new Glance Mode built for the road.

If you manage blood glucose with a Libre sensor, you already know the drill: unlock your phone, open the app, wait for it to load, squint at a graph, and try to remember the number by the time you put the phone down. For a condition that demands constant awareness, most CGM apps feel surprisingly hostile to quick, distraction-free reading.

Glancy started as a personal fix for exactly that frustration. The goal was simple: a glucose app that gets out of your way.

It was also my first iOS app. A lot of it was genuinely new territory: SwiftUI, watchOS, complications, notifications, API authentication. I gave it about a week of solid work, then stepped away for a couple of months to rest and let things settle. Coming back to it with fresh eyes made a real difference.

## What Is Glancy?

Glancy is a native iOS and watchOS app that connects to LibreLinkUp (Abbott's cloud service for the Libre family of continuous glucose monitors). It polls your latest reading every 30 seconds and your history every five minutes, and presents both with as little chrome as possible.

The feature set at a glance:

- **iPhone:** login flow, colour-coded glucose value with trend arrow, interactive graph with dynamic Y-axis and safe-range shading, pull to refresh, threshold alerts with snooze.
- **Apple Watch:** glucose value, trend arrow, haptic feedback on refresh, smooth fade and spinner animation, notification deduplication.
- **Complications:** sparkline and compact layouts for the watch face.
- **Live Activity:** lock-screen glucose tile (currently being modernised).

## Architecture: Clean MVVM, No Session Leakage

The app follows a straightforward MVVM pattern. `GlucoseViewModel` owns polling timers and publishes state. `LibreLinkUpGlucoseSource` handles all authentication and API calls, keeping session state well away from views. Views on both iPhone and Watch are presentation only. They receive data and fire events, nothing more.

Settings are persisted via `@AppStorage` in an `AppSettings` observable object injected as an environment object throughout both targets. Changes propagate automatically with no manual binding wiring required.

Getting this architecture right was one of the things I was most pleased with, especially as a first project. It would have been easy to let session logic bleed into views and end up with something unmaintainable. Getting the separation clean early made everything that followed much easier to reason about.

## Recent Changes

### Fixing the Vertical Centering

When the graph is turned off, Glancy shows a hero layout: a large glucose number centred on screen with the trend arrow beneath it. Except it was not actually centred, it was sitting awkwardly near the top of the screen, off to the left by a tiny amount.

The culprit was a misplaced `Spacer(minLength: 0)` combined with an unconditional `padding(.top, 24)` on the outer container. Both pushed content upward rather than distributing space evenly.

The fix was to split the main view into two explicit layout branches: `graphLayout` and `centeredLayout`. The graph branch keeps its top padding and bottom spacer. The no-graph branch wraps the glucose number and trend row between equal Spacers, sitting the content in the true vertical centre of the content area below the navigation bar. Simple, clean, correct.

### Glance Mode

The centring fix was satisfying, but it was a warmup for the feature that started the whole project: Glance Mode.

Imagine you are driving. You want to check your glucose. What you need in that moment is the number. Large, immediate, nothing else. No graph, no toolbar, no settings gear. Glance Mode is exactly that: a full-screen, pitch-black overlay showing only the glucose reading and trend arrow.

What it looks like:

- Black background. No glare, no distraction.
- 120pt glucose number in your threshold colour (green, orange, or red depending on your configured ranges).
- Trend arrow below at 56pt, in white.
- If the reading is stale (older than 15 minutes), the number goes grey and a clock badge appears.
- Tap anywhere to dismiss.

The view forces dark mode and hides both the status bar and system overlays so nothing competes with the reading. Polling continues uninterrupted behind it when you dismiss, the main view is fully up to date.

### Focus Filter Integration

Glance Mode can be triggered manually with a single tap on the eye icon in the toolbar, but the real power comes from iOS Focus filters.

Using the `SetFocusFilterIntent` protocol from Apple's AppIntents framework (iOS 16+), Glancy registers itself as a Focus-aware app. The setup is a one-time job: Settings → Focus → Driving → App Filters → Glancy → Glance Mode: On. From that point on, activating the Driving Focus, whether manually or automatically when CarPlay connects, flips Glancy straight into Glance Mode. When Driving ends, it flips back.

The implementation is intentionally thin: the intent writes one key to `UserDefaults`, which `@AppStorage` observes. No background tasks, no extra entitlements, no polling. iOS does all the heavy lifting.

## What's Next

There is still a solid backlog to work through:

- Fix the watch complication data pipe (root cause is an App Group misconfiguration).
- Remove the blocking loading spinner on iPhone launch.
- Clean up Live Activity deprecation warnings.
- Home screen and lock screen widgets.
- HealthKit write support.
- Advanced alerts (rapid rise/fall, time-in-range summaries).

Glancy is a personal project, built entirely for the joy of it and the practical need behind it. For a first app, in a framework I was learning as I went, I am genuinely happy with where it has landed. There is still work to do, but the bones are solid and the thing that started it all, that one-glance-while-driving moment, actually works.

If any of this resonates — whether you are managing glucose yourself, building something similar, or just curious feel free to [reach out](mailto:bryan@bryanleonardthompson.com).

*Built with SwiftUI · LibreLinkUp · AppIntents · WidgetKit*
