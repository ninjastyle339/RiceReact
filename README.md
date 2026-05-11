# RiceReact 

A browser-based Linux ricing desktop environment built with React. Inspired by the linux ricing community.

## Features

### Desktop
- **Dynamic wallpaper switcher** — cycle through backgrounds with `j`/`k` keys, toggle with `ctrl+b`
- **Auto color theming** — extracts dominant colors from the current wallpaper using ColorThief and applies them globally via CSS variables
- **5 virtual workspaces** — switch between workspaces with `ctrl+i`, smooth slide transition between them


### Widgets
- **Terminal** — fake terminal with command history, `clear` and `--load` command, resizable and draggable, toggle with `alt+t`
- **Notepad** — draggable and resizable notepad with persistent text via localStorage, toggle with `ctrl+m`


## Keybindings

| Key | Action |
|-----|--------|
| `alt+t` | Toggle terminal |
| `ctrl+m` | Toggle notepad |
| `ctrl+b` | Toggle background switcher |
| `ctrl+i` | Switch to next workspace |
| `j` | Previous wallpaper (when switcher active) |
| `k` | Next wallpaper (when switcher active) |

## Tech Stack
- React 19
- Vite
- Pure CSS (no UI libraries)
- ColorThief (via CDN) for color extraction

## Getting Started

```bash
npm install
npm run dev
```

