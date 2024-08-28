const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    queryDatabase: (query: string) => ipcRenderer.invoke('query-database', query), // window.electron.hworld is a string ("Hello world")
});

