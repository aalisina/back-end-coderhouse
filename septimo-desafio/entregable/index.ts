// Todavia no he terminado

import express, {Application, Request, Response} from 'express'

const app: Application = express()

interface Producto {
    name: string
    price: number

}

const PORT = process.env.PORT || 8080

let productos: Producto[] = []

// const addProduct = (producto: Producto): string => {
//     productos = [...productos, producto]
//     return 'Product added'
// }


app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo')
})

let countItem: number = 0
let countItems: number = 0

app.get('/items', (req: Request, res: Response) => {
    const objToSend = {
        items: productos,
        cantidad: productos.length
    }
    countItems++
    res.send(objToSend)
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})