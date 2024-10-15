const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const contentManager = require('./contentManager');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools(); 
}

// Comunicación con el backend para obtener anuncios
ipcMain.handle('fetch-ads', async () => {
    const ads = await contentManager.fetchAdsFromAPI();
    return ads;
});

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
