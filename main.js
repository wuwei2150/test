// Modules to control application life and create native browser window
const {app, BrowserWindow,contentTracing} = require('electron')
const { ipcMain } = require('electron')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow





function createWindow () {

  console.log(process.version)
  // const heapdump = require('heapdump')
//   const nmProfiler = require('node_monitor_profiler');

// nmProfiler({

// project_name: '编程侠', // 你项目名称

// embrace: {

// tcp_host: '127.0.0.1', // Node-Monitor部署的地址

// tcp_port: 30000  // Node-Monitor tcp服务的端口
// }

// })

const nmProfiler = require('easy-monitor')
 nmProfiler('test')
// const profiler =require('v8-profiler-node8')
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
      
    }
  })






  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

 
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on("openDir", function (e) {

  console.log("openDir")
  
  //contentTracing.getCategories(traceCallBack)
  // contentTracing.startRecording(options1,traceCallBack)
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
   //var fileName = dialog.showOpenDialog(mainWindow, {title: "选择一个目录", properties: ["openDirectory"]})
   var fileName='test'
  e.returnValue = fileName ? fileName : null
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
