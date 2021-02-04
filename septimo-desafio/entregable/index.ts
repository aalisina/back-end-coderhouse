import express, {Application, Request, Response} from 'express'

const app: Application = express()

interface Producto {
    name: string
    price: number

}

const PORT = process.env.PORT || 8080

let productos: Producto[] = []

const addProduct = (producto: Producto): string => {
    productos = [...productos, producto]
    return 'Product added'
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo')
})


app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})