# Anonymous MemGUI-Agent Project Page

This repository hosts the GitHub Pages site for **MemGUI-Agent: An End-to-End
Long-Horizon Mobile GUI Agent with Proactive Context Management** during
double-blind review.

## Local Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content

- `index.html` is the public project page.
- `css/agent.css` contains the MemGUI-Agent page styles.
- `images/results/` contains the anonymous main-performance figure.
- `images/brand/` contains only the project logo.
- `js/video-config.js` maps the eight anonymized, four-second-trimmed demo
  videos to their public IDs on the anonymous YouTube channel.

The original overview video is deliberately excluded because its visuals
contain affiliation information. Never add an original-channel YouTube ID,
an author name, an affiliation, a personal account link, or an arXiv link to
this review site.

## Deployment

Configure GitHub Pages to serve this repository from the default branch. The
site is static and requires no build step.
