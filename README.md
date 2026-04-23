# LibreChat Desktop

A lightweight native desktop wrapper for [LibreChat](https://github.com/danny-avila/LibreChat). Access your self-hosted LibreChat instance as a native Windows app — no browser tabs, no distractions.

Built with Electron. Just point it at your LibreChat URL and go.

## Why

LibreChat runs great in a browser, but having it as a dedicated window feels better. This wraps your instance in a clean, minimal native app — always one click away in your taskbar.

- No browser chrome, no tabs
- Opens external links in your default browser
- Remembers window size and position
- Works with any LibreChat instance (localhost, Tailscale, LAN, etc.)

## Setup

1. Clone this repo:
   ```
   git clone https://github.com/yourname/librechat-desktop.git
   cd librechat-desktop
   ```

2. Edit `main.js` and set your LibreChat URL:
   ```js
   const LIBRECHAT_URL = "https://your-librechat-instance.example.com";
   ```

3. Install and run:
   ```
   npm install
   npm start
   ```

## Build

Build a Windows `.exe` installer:
```
npm run build
```

Build a portable `.exe` (no install needed):
```
npm run build:portable
```

Output goes to `dist/`.

## Custom Icon

Drop an `icon.png` (256×256 or larger) in the project root before building.

## Requirements

- [Node.js](https://nodejs.org/) 18+
- Your LibreChat instance running and accessible

## License

MIT
