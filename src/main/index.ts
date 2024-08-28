import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import knex from "knex";

const dbPath =
  path.resolve(__dirname, "..", "..", "db", "dev.db") ||
  path.resolve(app.getAppPath(), "..","resources", "dev.db");

const database = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(dbPath),
  },
  useNullAsDefault: true,
});

function createWindow(): void {
  const isDevelopment = process.env.NODE_ENV === "development";

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      preload: path.join(__dirname, "preload.js"),
      // allowRunningInsecureContent: true,
    },
  });

  if (isDevelopment) {
    // Load URL from localhost for development
    mainWindow.loadURL("http://localhost:9000");
  } else {
    // Load the production build file
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  }
}

app.whenReady().then(createWindow);
ipcMain.handle("query-database", async (event, query: string) => {
  try {
    const result = await database.raw(query);
    return result;
  } catch (error) {
    console.error("Database query failed", error);
    throw error;
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
