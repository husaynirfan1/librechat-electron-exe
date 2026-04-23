const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");

const LIBRECHAT_URL = "https://<URLGOESHERE>";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 480,
    minHeight: 600,
    title: "OpenClaw",
    icon: path.join(__dirname, "icon.png"),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Remove menu bar for clean native feel
  Menu.setApplicationMenu(null);

  // Load the Tailscale URL
  mainWindow.loadURL(LIBRECHAT_URL);

  // Open external links in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(LIBRECHAT_URL)) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });

  // Set title to page title
  mainWindow.webContents.on("page-title-updated", (event, title) => {
    mainWindow.setTitle(title || "OpenClaw");
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
