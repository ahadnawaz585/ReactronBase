import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow(): void {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: false,
      // preload: path.join(__dirname, 'preload.js'),
      // allowRunningInsecureContent: true, 
    },
  });

  if (isDevelopment) {
    // Load URL from localhost for development
    mainWindow.loadURL('http://localhost:9000');
  } else {
    // Load the production build file
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
