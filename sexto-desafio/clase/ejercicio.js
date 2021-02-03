/*
Escibir un programa que 

1. Lea el archivo package.json y declare un objecto con el seguiente 
formato y datos y 

let info = {
    contenidoStr: contenido en formato string,
    contenidoObj: contenido en formato objecto,
    size: tamano en bites del archivo,

    }
2. Muestre por consola el objecto info luego de leer el archivo y 
3. Guardar el objeto info en un archivo llamado info.txt dentro de 
la misma carpeta de package.json y 
4. incluir manejo de errores ( con thow new Error)

*/

const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
        return
    }
    
    const info = {
        contenidoStr: JSON.stringify(data),
        contenidoJson: JSON.parse(data),
        size: getStat().size,
    }
    console.log(info)
})


const getStat = ()=> {
    return fs.statSync('./package.json')
}