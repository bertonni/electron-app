const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("node:path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      nativeWindowOpen: true,
      plugins: false,
    },
  });
  Menu.setApplicationMenu(null);

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("print", () => {
    const options = {
      silent: false,
      printBackground: true,
      pageSize: "A4",
      color: false,
      margin: {
        marginType: "printableArea",
      },
    };

    // switch (process.platform) {
    //   case "darwin":
    //   case "linux":
    //     ch.
    //     ch.exec("lp certificado.pdf", (e) => {
    //       if (e) {
    //         throw e;
    //       }
    //     });
    //     break;
    //   case "win32":
    //     ch.exec(
    //       "ptp certificado.pdf",
    //       {
    //         windowsHide: true,
    //       },
    //       (e) => {
    //         if (e) {
    //           throw e;
    //         }
    //       }
    //     );
    //     break;
    //   default:
    //     throw new Error("Platform not supported.");
    // }

    // win.webContents.print(options, (success, error) => {
    //   if (!success) console.log("error", error);
    //   console.log("Print initiated");
    // });
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
