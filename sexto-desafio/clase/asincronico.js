const fs = require('fs')

// Callbacks

fs.writeFile('./callbacks.txt', 'Cambio texto', error => {
    if(error) {
        console.log(error)
        return
        // o throw new Error
    }

    console.log('Creado con exito')
})

fs.appendFile('./callbacks.txt', '\n Esto es agregado', error => {
    if(error) {
        console.log(error)
        return
        // o throw new Error
    }

    console.log('Agregado con exito')
})

fs.readFile('./callbacks.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
        throw new Error(error)
    }
    console.log(data)
})

fs.unlink('./callbacks.txt', error => {
    if(error) {
        console.log(error)
        return
    }

    console.log('Archivo eliminado')
}
)

fs.mkdir('./newDir', error => {
    if(error) {
        console.log(error)
        return
    }
    console.log('Directorio creado')
})


fs.readdir('./newDir', (error, data) => {
    if(error) {
        console.log(error)
        throw new Error(error)
    }

    console.log(data)
})