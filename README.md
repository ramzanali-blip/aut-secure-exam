# AUT Secure Exam: project website

Static website (HTML, CSS, a little JavaScript; no build step) published free on GitHub Pages:
https://ramzanali-blip.github.io/aut-secure-exam/ (later `https://aut-exam.eu.org`, see
`docs/DOMAIN_SETUP_EU_ORG.md`).

| Path | Content |
|---|---|
| `index.html` | All page content (sections: features, how it works, screenshots, video, results, try it, downloads, technology, roadmap) |
| `style.css` | Design (colours as tokens at the top, light and dark mode) |
| `site.js` | Screenshot tabs, video language switch, light/dark button |
| `img/` | Screenshots (WebP), logo, video poster |
| `video/` | Pitch videos (English, Russian, 720p) with subtitles |
| `downloads/` | Android test app and the manuals (EN/UZ/RU) |

## Edit

Change the text in `index.html`. Preview on your PC: `py -m http.server 8090 --directory website`, then
open http://localhost:8090.

## Publish

```bash
bash tools/publish-website.sh
```

It copies this folder to the GitHub repository **ramzanali-blip/aut-secure-exam** and pushes; the site updates
within a few minutes. GitHub limits: 100 MB per file, about 1 GB per site.

The exam system itself (portal, database, apps' server) is not part of this website: it runs on the university
server, see `deploy/vm/HOW-TO-INSTALL.txt`.
