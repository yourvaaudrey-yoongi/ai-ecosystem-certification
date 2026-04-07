# AI Ecosystem Certification — Game Plan & Full Build Spec

**Companion to:** Claude Code Ecosystem Level One Certification
**Relationship:** Same structure, same deployment pattern, same site framework — different tool stack.
**Positioning:** "Beyond Claude Code" — design and operate your own multi-model AI ecosystem using every major coding agent available today.

---

## 1. Overview

The Claude Code Ecosystem Certification teaches Claude's stack (Chat → Cowork → Code). This certification teaches the rest of the picture: Codex, Gemini, Anti-Gravity, Superset, and how to route intelligently across all of them. Together the two certifications give someone a complete, production-grade AI operating environment — not just one vendor's tools.

**The mechanism / deliverable:** Students leave with a designed, configured, running AI ecosystem that uses multiple models, routes tasks to the right tool, and cuts AI costs 60–80% compared to running everything through one provider.

---

## 2. The Tool Stack This Cert Covers

| Tool | Category | What It Is |
|------|----------|-----------|
| **Codex app** | GUI coding agent | OpenAI's standalone coding environment (desktop). Equivalent to Claude Desktop for coding tasks. |
| **Codex CLI** | Terminal agent | Codex in the terminal — same relationship as Claude Code to Claude Desktop. Runs agentic coding loops from command line. |
| **Gemini app** | GUI AI assistant | Google's Gemini interface. Not a dedicated coding app but powerful for reasoning, drafting, and multimodal tasks. |
| **Gemini CLI** | Terminal agent | Gemini in the terminal — agentic coding loops, same pattern as Claude Code and Codex CLI. |
| **Anti-Gravity** | Mac desktop app | The Mac-native Gemini client (like Claude Desktop is the Mac app for Claude). Downloadable from Mac App Store / direct. |
| **Cursor** | IDE with AI | VS Code fork with Gemini and other model integrations built in. Used for Gemini coding workflows in a familiar editor. |
| **Superset.sh** | Orchestration layer | Mac desktop app + MCP server + API key. Can be controlled from Claude Code or any MCP-compatible client. Acts as the coordination layer across models. |

---

## 3. Certification Identity

| Field | Value |
|-------|-------|
| **Name** | AI Ecosystem Certification |
| **Kicker** | Beyond Claude Code |
| **Headline** | Design and run your own multi-model AI ecosystem. |
| **Subheadline** | Learn to install, configure, and route across Codex, Gemini, Anti-Gravity, and Superset so you're not locked into one model — and your AI costs drop 60–80% while your output doubles. |
| **GitHub repo** | `jbellsolutions/ai-ecosystem-certification` |
| **Live URL** | `jbellsolutions.github.io/ai-ecosystem-certification` |
| **Deployment** | GitHub Pages (same as Claude Code cert) |
| **Format** | Login-gated video certification (same frontend as Claude Code cert) |

---

## 4. Audience

- People who completed the Claude Code Ecosystem Certification and want to go further
- Developers and technical operators who already use Claude Code and want to expand their stack
- Business owners who've heard about multi-model routing and want a system for it
- AI integrators who need to be fluent across all major coding agents, not just Claude

---

## 5. Outcomes

1. Install and configure all four major coding agent environments (Codex app, Codex CLI, Anti-Gravity/Gemini, Gemini CLI)
2. Set up Superset.sh as an MCP-connected orchestration layer, accessible from Claude Code
3. Understand when to route tasks to Codex vs. Gemini vs. Claude — and why it matters for cost and quality
4. Run a live multi-model workflow where Claude Code delegates subtasks to Codex CLI and Gemini CLI
5. Reduce AI operational costs by 60–80% using intelligent model routing
6. Have a fully configured, documented AI ecosystem running in your own environment

---

## 6. Module Structure (Mirroring Claude Code Cert)

Seven modules, same pattern as the Claude Code Ecosystem Certification:

### Module 1 — Map Your AI Ecosystem
**Headline:** Understand the full landscape before you build anything.
**Subheadline:** Get a fast, visual map of every major coding agent available today — what each one does, what it costs to run, where it excels, and how they fit together into one coherent system you can operate from a single command center.
**Focus areas:**
- The four major coding agent environments and their terminal equivalents
- Why running everything through one model is expensive and limiting
- The routing logic that drives 60–80% cost savings
- How Superset ties everything together as the MCP coordination layer

---

### Module 2 — Install and Configure Codex
**Headline:** Get OpenAI's coding agent running in both the app and the terminal.
**Subheadline:** Download and configure the Codex desktop app, then install Codex CLI so you can run it from the terminal exactly the way you run Claude Code — same agentic loop, different model, different strengths.
**Focus areas:**
- Codex app setup and first build
- Codex CLI installation and terminal configuration
- API key setup and cost controls
- First agentic task — side by side with a Claude Code equivalent

---

### Module 3 — Install and Configure the Gemini Stack
**Headline:** Set up Anti-Gravity and Gemini CLI so the Google stack is live in your environment.
**Subheadline:** Download Anti-Gravity (the Mac-native Gemini desktop app), install and authenticate Gemini CLI, and run your first Gemini-powered coding session from the terminal — then configure Cursor for Gemini-integrated editing.
**Focus areas:**
- Anti-Gravity download, setup, and first use
- Gemini CLI installation and authentication
- Cursor configuration for Gemini model access
- What Gemini does better than Claude and Codex (and when to use it)

---

### Module 4 — Set Up Superset as Your Orchestration Layer
**Headline:** Install the coordination layer that lets you control all models from one place.
**Subheadline:** Download Superset.sh, set up the MCP server, and configure your API key so Superset can be controlled directly from Claude Code — or any MCP-compatible tool. This is the layer that makes multi-model routing practical instead of manual.
**Focus areas:**
- Superset.sh desktop install on Mac
- MCP server configuration and connection
- API key setup and access control
- Calling Superset from Claude Code as an MCP tool

---

### Module 5 — Routing Logic: Which Tool, Which Task
**Headline:** The single most valuable skill in a multi-model environment is knowing what to route where.
**Subheadline:** Learn the decision framework for routing coding tasks to Codex, reasoning tasks to Gemini, orchestration to Superset, and complex multi-step builds to Claude Code — with real examples from actual workflows, not theory.
**Focus areas:**
- Cost-per-task comparison across models
- Codex strengths: focused code generation, refactoring, unit tests
- Gemini strengths: long-context reasoning, multimodal, document work
- Claude Code strengths: orchestration, agentic loops, MCP-connected actions
- The 60–80% cost reduction framework in practice

---

### Module 6 — Build a Live Multi-Model Workflow
**Headline:** Run a real workflow where Claude Code delegates to Codex and Gemini simultaneously.
**Subheadline:** Watch a production-style build where Claude Code acts as the orchestrator — spawning Codex CLI for code generation, routing reasoning tasks to Gemini CLI, and using Superset to coordinate — while you learn the exact prompt patterns that make delegation work cleanly.
**Focus areas:**
- Setting up parallel terminal sessions (Claude Code + Codex CLI + Gemini CLI)
- Orchestrator prompt patterns for delegating to sub-agents
- How to structure CLAUDE.md to include routing instructions
- Reading outputs from multiple models and integrating them

---

### Module 7 — Design Your Ecosystem Document
**Headline:** Leave with a configured, documented, running ecosystem that's yours.
**Subheadline:** Build your personal AI Ecosystem Design Document — a CLAUDE.md-style config that specifies which tools you have installed, what each one is used for, and the routing rules your future prompts will follow. This is the certification deliverable.
**Focus areas:**
- What goes in your AI Ecosystem Design Document
- Setting up your CLAUDE.md to reference your routing rules
- Installing all config files and verifying each tool is reachable
- The final checklist: ecosystem is live, documented, and ready to use

---

## 7. File & Repository Structure

Exact mirror of `claude-code-ecosystem-certification`. Clone that repo, swap out the content.

```
ai-ecosystem-certification/
├── index.html                        ← Landing page + login gate (same as CCEC)
├── styles.css                        ← Same stylesheet, update color accent
├── app.js                            ← Same login + module player logic
├── README.md                         ← Updated for this cert
├── .gitignore
│
├── site/
│   ├── data/
│   │   ├── course-data.json          ← THIS FILE drives everything (see Section 8)
│   │   └── source-videos.json        ← Source video manifest
│   └── assets/
│       ├── posters/                  ← Thumbnail frames per module
│       └── brand/                    ← Hero art, social card, intro/outro slates
│
├── edited_videos/                    ← Branded MP4s with intro/outro
│   ├── 01-map-your-ai-ecosystem.mp4
│   ├── 02-install-and-configure-codex.mp4
│   ├── 03-install-and-configure-gemini-stack.mp4
│   ├── 04-set-up-superset-orchestration.mp4
│   ├── 05-routing-logic-which-tool-which-task.mp4
│   ├── 06-build-a-live-multi-model-workflow.mp4
│   └── 07-design-your-ecosystem-document.mp4
│
├── transcripts/
│   ├── raw_srt/                      ← Subtitle tracks from source videos
│   └── plain_text/                   ← Cleaned text used for module copy
│
└── scripts/
    ├── extract_assets.py             ← Rebuilds posters + transcripts from exports
    ├── render_brand_assets.py        ← Rebuilds branded PNGs
    └── render_video_package.py       ← Renders branded MP4s with slates
```

---

## 8. course-data.json — Full Populated Schema

This is the exact file that drives the site. Drop it into `site/data/course-data.json`.

```json
{
  "title": "AI Ecosystem Certification",
  "kicker": "Beyond Claude Code",
  "headline": "Design and run your own multi-model AI ecosystem.",
  "subheadline": "Learn to install, configure, and route across Codex, Gemini, Anti-Gravity, and Superset so you are not locked into one model — and your AI costs drop 60 to 80 percent while your output doubles.",
  "audience": [
    "Claude Code users who want to expand beyond one model and one vendor",
    "Technical operators who need to be fluent across all major coding agents",
    "Business owners and integrators who want multi-model routing working in their environment",
    "Anyone building or operating AI-powered products who needs cost control and flexibility"
  ],
  "outcomes": [
    "Install and configure Codex app, Codex CLI, Anti-Gravity, Gemini CLI, and Superset in one session",
    "Set up Superset as an MCP-connected orchestration layer accessible from Claude Code",
    "Understand the routing logic that cuts AI costs 60 to 80 percent without sacrificing output quality",
    "Run a live multi-model workflow where Claude Code delegates to Codex and Gemini simultaneously",
    "Leave with a documented AI Ecosystem Design Document — a configured CLAUDE.md with routing rules"
  ],
  "stats": {
    "lessonCount": 7,
    "runtime": "~30 minutes",
    "format": "Login-gated video certification"
  },
  "login": {
    "title": "Get Free Access",
    "subheadline": "Enter your email to unlock the AI Ecosystem Certification portal and get notified when new modules and tools are added.",
    "kitFormAction": "",
    "kitTag": "",
    "kitSource": "ai-ecosystem-certification"
  },
  "modules": [
    {
      "id": "m1-map-your-ai-ecosystem",
      "source": "M1-Map-AI-Ecosystem.mp4",
      "video": "edited_videos/01-map-your-ai-ecosystem.mp4",
      "orderLabel": "Module 1",
      "title": "Map Your AI Ecosystem",
      "headline": "Understand the full landscape before you build anything.",
      "subheadline": "Get a fast, visual map of every major coding agent available today — what each one does, what it costs to run, where it excels, and how they fit together into one coherent system you can operate from a single command center.",
      "duration": "TBD",
      "focus": [
        "The four major coding agent environments and their terminal equivalents",
        "Why running everything through one model is expensive and limiting",
        "The routing logic that drives 60 to 80 percent cost savings",
        "How Superset ties everything together as the MCP coordination layer"
      ],
      "poster": "site/assets/posters/m1-map-your-ai-ecosystem.jpg",
      "transcript": "transcripts/plain_text/M1-Map-AI-Ecosystem.txt"
    },
    {
      "id": "m2-install-configure-codex",
      "source": "M2-Install-Codex.mp4",
      "video": "edited_videos/02-install-and-configure-codex.mp4",
      "orderLabel": "Module 2",
      "title": "Install And Configure Codex",
      "headline": "Get OpenAI's coding agent running in both the app and the terminal.",
      "subheadline": "Download and configure the Codex desktop app, then install Codex CLI so you can run it from the terminal exactly the way you run Claude Code — same agentic loop, different model, different strengths.",
      "duration": "TBD",
      "focus": [
        "Codex app setup and first build",
        "Codex CLI installation and terminal configuration",
        "API key setup and cost controls",
        "First agentic task compared side by side with Claude Code"
      ],
      "poster": "site/assets/posters/m2-install-configure-codex.jpg",
      "transcript": "transcripts/plain_text/M2-Install-Codex.txt"
    },
    {
      "id": "m3-install-gemini-stack",
      "source": "M3-Gemini-Stack.mp4",
      "video": "edited_videos/03-install-and-configure-gemini-stack.mp4",
      "orderLabel": "Module 3",
      "title": "Install And Configure The Gemini Stack",
      "headline": "Set up Anti-Gravity and Gemini CLI so the Google stack is live in your environment.",
      "subheadline": "Download Anti-Gravity (the Mac-native Gemini desktop app), install and authenticate Gemini CLI, and run your first Gemini-powered coding session from the terminal — then configure Cursor for Gemini-integrated editing.",
      "duration": "TBD",
      "focus": [
        "Anti-Gravity download, setup, and first use on Mac",
        "Gemini CLI installation and authentication",
        "Cursor configuration for Gemini model access",
        "What Gemini does better than Claude and Codex and when to use it"
      ],
      "poster": "site/assets/posters/m3-install-gemini-stack.jpg",
      "transcript": "transcripts/plain_text/M3-Gemini-Stack.txt"
    },
    {
      "id": "m4-superset-orchestration",
      "source": "M4-Superset.mp4",
      "video": "edited_videos/04-set-up-superset-orchestration.mp4",
      "orderLabel": "Module 4",
      "title": "Set Up Superset As Your Orchestration Layer",
      "headline": "Install the coordination layer that lets you control all models from one place.",
      "subheadline": "Download Superset.sh, set up the MCP server, and configure your API key so Superset can be controlled directly from Claude Code — or any MCP-compatible tool. This is the layer that makes multi-model routing practical instead of manual.",
      "duration": "TBD",
      "focus": [
        "Superset.sh desktop install on Mac",
        "MCP server configuration and connection to Claude Code",
        "API key setup and access control",
        "Calling Superset from Claude Code as an MCP-connected tool"
      ],
      "poster": "site/assets/posters/m4-superset-orchestration.jpg",
      "transcript": "transcripts/plain_text/M4-Superset.txt"
    },
    {
      "id": "m5-routing-logic",
      "source": "M5-Routing-Logic.mp4",
      "video": "edited_videos/05-routing-logic-which-tool-which-task.mp4",
      "orderLabel": "Module 5",
      "title": "Routing Logic — Which Tool, Which Task",
      "headline": "The single most valuable skill in a multi-model environment is knowing what to route where.",
      "subheadline": "Learn the decision framework for routing coding tasks to Codex, reasoning tasks to Gemini, orchestration to Superset, and complex multi-step builds to Claude Code — with real examples from actual workflows, not theory.",
      "duration": "TBD",
      "focus": [
        "Cost-per-task comparison across Codex, Gemini, and Claude Code",
        "Codex strengths: focused code generation, refactoring, unit tests",
        "Gemini strengths: long-context reasoning, multimodal, document work",
        "Claude Code strengths: orchestration, agentic loops, MCP-connected actions"
      ],
      "poster": "site/assets/posters/m5-routing-logic.jpg",
      "transcript": "transcripts/plain_text/M5-Routing-Logic.txt"
    },
    {
      "id": "m6-live-multi-model-workflow",
      "source": "M6-Live-Workflow.mp4",
      "video": "edited_videos/06-build-a-live-multi-model-workflow.mp4",
      "orderLabel": "Module 6",
      "title": "Build A Live Multi-Model Workflow",
      "headline": "Run a real workflow where Claude Code delegates to Codex and Gemini simultaneously.",
      "subheadline": "Watch a production-style build where Claude Code acts as the orchestrator — spawning Codex CLI for code generation, routing reasoning tasks to Gemini CLI, and using Superset to coordinate — while you learn the exact prompt patterns that make delegation work cleanly.",
      "duration": "TBD",
      "focus": [
        "Setting up parallel terminal sessions across Claude Code, Codex CLI, and Gemini CLI",
        "Orchestrator prompt patterns for delegating to sub-agents",
        "How to structure CLAUDE.md to include routing instructions",
        "Reading outputs from multiple models and integrating them cleanly"
      ],
      "poster": "site/assets/posters/m6-live-multi-model-workflow.jpg",
      "transcript": "transcripts/plain_text/M6-Live-Workflow.txt"
    },
    {
      "id": "m7-design-your-ecosystem",
      "source": "M7-Ecosystem-Document.mp4",
      "video": "edited_videos/07-design-your-ecosystem-document.mp4",
      "orderLabel": "Module 7",
      "title": "Design Your Ecosystem Document",
      "headline": "Leave with a configured, documented, running ecosystem that is yours.",
      "subheadline": "Build your personal AI Ecosystem Design Document — a CLAUDE.md-style config that specifies which tools you have installed, what each one is used for, and the routing rules your future prompts will follow. This is the certification deliverable.",
      "duration": "TBD",
      "focus": [
        "What goes in your AI Ecosystem Design Document",
        "Setting up your CLAUDE.md to include routing rules across models",
        "Installing all config files and verifying each tool is reachable",
        "The final checklist: ecosystem is live, documented, and ready to use"
      ],
      "poster": "site/assets/posters/m7-design-your-ecosystem.jpg",
      "transcript": "transcripts/plain_text/M7-Ecosystem-Document.txt"
    }
  ]
}
```

---

## 9. Deployment Pattern (GitHub Pages — Same as CCEC)

Exact same steps used for the Claude Code Ecosystem Certification:

```
1. Create repo: jbellsolutions/ai-ecosystem-certification
2. Clone claude-code-ecosystem-certification as the base
3. Swap out:
   - site/data/course-data.json  (use the JSON above)
   - edited_videos/              (drop in recorded modules)
   - site/assets/brand/          (regenerate slates with new cert name)
   - site/assets/posters/        (extract from module videos)
   - README.md                   (update with new cert details)
4. Update index.html title tag, OG tags, and page title text
5. Update styles.css accent color if differentiating from CCEC
6. Push to main
7. Enable GitHub Pages: Settings → Pages → Source: Deploy from main branch → / (root)
8. Live at: jbellsolutions.github.io/ai-ecosystem-certification
```

**Color differentiation suggestion:**
- Claude Code Ecosystem Cert: existing brand color
- AI Ecosystem Cert: shift accent to a secondary color (e.g. green or teal) to visually distinguish the two certifications when shown side by side in a funnel

---

## 10. The Codex Prompt — Drop This In to Rebuild the Entire Site

This is the spec you hand directly to Codex CLI (or Claude Code) to generate the full repo from scratch:

---

```
You are building a static GitHub Pages certification portal called "AI Ecosystem Certification" at the repo jbellsolutions/ai-ecosystem-certification.

REFERENCE REPO: jbellsolutions/claude-code-ecosystem-certification
Clone the exact structure, file layout, and frontend logic from that repo. You are not changing the architecture — you are replacing the content.

HERE IS WHAT TO DO:

1. CLONE THE STRUCTURE from jbellsolutions/claude-code-ecosystem-certification:
   - index.html (same login gate + module player pattern)
   - styles.css (same layout, change --accent-color to #10B981 (green) to distinguish from CCEC)
   - app.js (no changes needed to logic)
   - scripts/ directory (copy all three Python scripts, update internal references)
   - site/ directory structure (same asset subfolders)

2. REPLACE site/data/course-data.json with the following content:
[PASTE THE FULL course-data.json FROM SECTION 8 ABOVE]

3. UPDATE index.html:
   - <title>AI Ecosystem Certification</title>
   - All OG meta tags: title → "AI Ecosystem Certification", description → "Design and run your own multi-model AI ecosystem. Install Codex, Gemini CLI, Anti-Gravity, and Superset — then route intelligently across all of them."
   - Update the page's hero heading to pull from course-data.json (same as CCEC pattern)

4. UPDATE README.md with:
   - Title: AI Ecosystem Certification
   - Same section structure as CCEC README
   - Updated description: "Login-gated certification portal for the AI Ecosystem Certification — covering Codex, Codex CLI, Gemini, Anti-Gravity, Gemini CLI, Superset.sh, and multi-model routing."
   - Updated video filenames to match the seven modules listed in course-data.json
   - Same preview/regenerate instructions, updated for new asset names

5. CREATE placeholder files for each module:
   - edited_videos/ directory with .gitkeep
   - transcripts/raw_srt/ with .gitkeep
   - transcripts/plain_text/ with .gitkeep
   - site/assets/posters/ with .gitkeep
   - site/assets/brand/ with .gitkeep

6. DO NOT change app.js — the login and module player logic is identical.

7. VERIFY:
   - Run python3 -m http.server 8000 from repo root
   - Confirm login page loads
   - Confirm course-data.json is read and module cards render
   - Confirm no broken asset references

8. COMMIT everything to main with message: "init: AI Ecosystem Certification — mirrors CCEC structure, content updated for multi-model ecosystem curriculum"

9. PUSH to origin/main

EXPECTED OUTPUT:
- A working static site at repo root
- course-data.json populated with all 7 modules
- GitHub Pages ready (push to main, enable Pages in Settings)
- Placeholder asset directories in place for when video recording is done
```

---

## 11. How It Fits in the Full Training Funnel

```
Entry                  Claude in 15 Minutes (free lead magnet)
                       ↓
Level 1 Cert           Claude Code Ecosystem Certification (free)
                       ↓
Level 2 Cert           Business Implementation (intermediate)
                       ↓
Companion Cert ───────► AI Ecosystem Certification  ◄──── HERE
                         (Beyond Claude Code — multi-model)
                       ↓
Level 3 Cert           Ecosystem Builder / Systems Architect
```

The AI Ecosystem Certification sits alongside Level 2 or between Level 2 and Level 3. It is not gated behind any cert — it can be taken as a standalone after Level 1 or in parallel with Level 2.

---

## 12. Recording Checklist (When Ready to Film)

Same production pattern as CCEC. One take per module, raw Descript export, then run scripts.

- [ ] M1 — Map Your AI Ecosystem (~4–5 min)
- [ ] M2 — Install and Configure Codex (~6–8 min, screen recording heavy)
- [ ] M3 — Install and Configure Gemini Stack (~6–8 min, screen recording heavy)
- [ ] M4 — Set Up Superset (~5–6 min)
- [ ] M5 — Routing Logic (~4–5 min, talking head with overlays)
- [ ] M6 — Live Multi-Model Workflow (~7–10 min, live build — most important module)
- [ ] M7 — Design Your Ecosystem Document (~4–5 min)

After recording:
```bash
python3 scripts/extract_assets.py      # pulls posters + transcripts
python3 scripts/render_brand_assets.py # generates intro/outro slates
python3 scripts/render_video_package.py # renders branded MP4s
```

Then push and GitHub Pages picks it up automatically.
