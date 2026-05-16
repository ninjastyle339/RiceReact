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

## Credits

### Wallpapers
- [bedroom.png](#) — [link to original](https://wallpapercave.com/w/wp13498566)
- [wallhaven-futuristic.jpg](#) — [link to original](https://wallhaven.cc/w/3lxz2d)
- [wallhaven-space.jpg](#) — [link to original](https://wallhaven.cc/w/k81776)
- [wallhaven-terrain.jpg](#) — [link to original](https://wallhaven.cc/w/8gdd2o)
- [wallhaven-train.jpg](#) — [link to original](https://wallhaven.cc/w/yqg6r7)


## Tech Stack
- React 19
- Vite
- Pure CSS (no UI libraries)
- ColorThief (via CDN) for color extraction

