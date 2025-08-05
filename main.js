const { app, BrowserWindow } = require('electron');

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });
  
  win.setMenu(null);
  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);