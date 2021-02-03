const fs = require('fs')

class Archivo {

    constructor(nombre, title, price, thumbnail) {

        this.nombre = nombre
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }

    async leer () {
        
            try {
                const data = await fs.promises.readFile(`${this.nombre}.txt`, 'utf-8')
                console.log(data)
                return data
            } catch (error) {
        
                return []
            }

    }
    async guardar () {
        try {
            const existingData = await this.leer()
            const newData = {
                title: this.title,
                price: this.price,
                thumbnail: this.thumbnail,
                id: existingData.length + 1
            }
           const dataToWrite = existingData.push(newData)
            const write = await fs.promises.writeFile(`${this.nombre}.txt`, dataToWrite)
            
        } catch (error) {
            console.log(error)
        }

    }
    async borrar () {

        try {
           const borrar = await fs.unlink(`${this.nombre}.txt`)
            
        } catch (error) {
            console.log('El archivo no existe')
        }

    }
}

const productos = new Archivo('productos', 'Texto de prueba', 200, 'https://thumbnail.com')
productos.guardar()
//productos.borrar()