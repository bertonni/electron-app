const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // print: () => ipcRenderer.invoke('print')
  // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('utils', {
  print: () => ipcRenderer.invoke('print')
})

