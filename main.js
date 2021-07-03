const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    win.loadFile('index.html')
}

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {

    createWindow()

    app.on('activate', function() {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/*
   Protected full node environment API bridged
*/
ipcMain.on('get_example_items', (event, arg) => {
    // heroku.get('/apps').then(apps => event.reply('app_list', apps))

    let items = [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ];

    event.reply('example_items', items)
})
