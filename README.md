# AI Ecosystem Certification

Login-gated certification portal for the AI Ecosystem Certification, covering Codex, Codex CLI, Gemini, Anti-Gravity, Gemini CLI, Superset.sh, and multi-model routing workflows.

## What is included

- `index.html`, `styles.css`, `app.js`
  - GitHub Pages friendly login page plus certification portal at repo root
- `site/data/course-data.json`
  - Source-of-truth curriculum manifest for all seven modules
- `edited_videos`
  - Module video files used directly by the course portal
  - Includes two provided recorded videos and placeholder module clips for the remaining modules
- `source_videos`
  - Raw source videos used by the media scripts
- `transcripts/raw_srt`
  - Subtitle tracks (placeholder structure ready for full module exports)
- `transcripts/plain_text`
  - Transcript/plain-text lesson notes used for curriculum development
- `site/assets/posters`
  - Poster frames extracted from each module video clip
- `site/assets/brand`
  - Generated hero art, social card, intro slate, outro slate, and module title slates
- `scripts/extract_assets.py`
  - Rebuilds posters and transcript files from files in `source_videos`
- `scripts/render_brand_assets.py`
  - Rebuilds branded PNG assets for AI Ecosystem Certification
- `scripts/render_video_package.py`
  - Optionally renders branded MP4 packages with intro/outro slates and audio normalization

## Included curriculum file names

- `edited_videos/01-map-your-ai-ecosystem.mp4`
- `edited_videos/02-install-and-configure-codex.mp4`
- `edited_videos/03-install-and-configure-gemini-stack.mp4`
- `edited_videos/04-set-up-superset-orchestration.mp4`
- `edited_videos/05-routing-logic-which-tool-which-task.mp4`
- `edited_videos/06-build-a-live-multi-model-workflow.mp4`
- `edited_videos/07-design-your-ecosystem-document.mp4`

## Program collateral included at repo root

- `AI_Ecosystem_Certification_GamePlan.md`
- `AI_Ecosystem_Certification_Program_Overview.pdf`
- `AI_Ecosystem_Certification_Sales_OnePager.pdf`
- `AI_Ecosystem_Certification_Trainee_Guide.pdf`

## Preview locally

Run a static server from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

## Regenerate assets

If your source videos are in `source_videos/`:

```bash
/usr/bin/python3 scripts/extract_assets.py
/usr/bin/python3 scripts/render_brand_assets.py
/usr/bin/python3 scripts/render_video_package.py
```

## Notes

- The current login is a standard front-end email gate for the static portal. If you want real user accounts, add a backend or managed auth provider.
- Replace placeholder module clips as new lesson recordings are completed, then rerun the scripts above to refresh posters/transcripts.
