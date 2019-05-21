'use strict'

import { app, BrowserWindow, Menu, dialog } from 'electron'
import pkg from '../../package.json'
import '../renderer/store/index.js'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let menu
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const option = {
    height: 670,
    useContentSize: true,
    width: 1000,
    titleBarStyle: 'hidden'
  }
  mainWindow = new BrowserWindow(option)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  createMenu()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

const createMenu = () => {
  if (process.env.NODE_ENV !== 'development') {
    const template = [{
      label: 'music',
      submenu: [{
        label: '关于',
        click () {
          dialog.showMessageBox({
            title: 'わたし　の　music',
            message: 'わたし　の　music',
            detail: `Version: ${pkg.version}\nAuthor: watasi\nGithub: https://github.com/Jessom/music.watasi.cn`
          })
        }
      }, {
        label: '退出',
        accelerator: 'CmdOrCtrl+Q',
        click () {
          app.quit()
        }
      }]
    }, {
      label: '编辑',
      submenu: [
        { label: '撤销', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: '重做', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: '剪切', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: '复制', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: '粘贴', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { label: '全选', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
      ]
    }]
    menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  }
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
