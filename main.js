// Импортируем модули app и BrowserWindow из пакета electron
const { app, BrowserWindow } = require('electron');

/**
 * Функция для создания нового окна.
 */
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })
    win.loadFile('index.html')
}

// Создаём новое окно, когда приложение готово, и обрабатываем событие активации
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// Обрабатываем событие window-all-closed и выходим из приложения, если платформа не macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
