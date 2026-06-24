const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 800,
    minHeight: 600,
    title: 'Fogyasztási Riport Generátor',
    icon: path.join(__dirname, '..', 'assets', 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
  // Auto-update ellenőrzés indításkor
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Auto-updater események
autoUpdater.on('update-available', () => {
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Frissítés elérhető',
    message: 'Új verzió érhető el. A letöltés háttérben folyamatban van...',
    buttons: ['OK']
  });
});

autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Frissítés kész',
    message: 'A frissítés letöltve. Az alkalmazás újraindul a telepítéshez.',
    buttons: ['Újraindítás']
  }).then(() => {
    autoUpdater.quitAndInstall();
  });
});

autoUpdater.on('error', (err) => {
  console.log('Auto-updater hiba:', err);
});
