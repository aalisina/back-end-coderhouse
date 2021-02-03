/*

uso de fs es bueno para guardar logs por ejemplo

nodejs.org/api/fs.html

*/

// SINCRONICAMENTE

const fs = require('fs')

// Escribir info en un archivo
// writeFileSync('ruta', lo que quiro guardar, optional?: formato: utf-8 default)
// text.txt

fs.writeFileSync('./text.txt', 'Hola mundo que tal')


// Modificar la info de ese archivo


// Agregar info a un archivo
// appenFileSync('ruta', 'el dato que quieramos agregar', optional?)

fs.appendFileSync('./text.txt', '\n Esto es editado')


// Leer un archivo
// readFileSync('ruta', 'utf-8': opcional, buffer por default)

const data = fs.readFileSync('./text.txt', 'utf-8')
console.log(data)


// Eliminar un archivo
// unlinkSync('ruta')

fs.unlinkSync('./text.txt')


// Manejo de errores
try {

    fs.readFileSync('./text.txt', 'utf-8')
    
} catch (error) {
    
    console.log('Archivo no encontrado')
}
