
import express, {Application, Request, Response} from 'express'
import fs from 'fs'

const app: Application = express()

app.use(express.json())


const PORT = process.env.PORT || 8080
    
const productos = fs.readFileSync('./productos.txt', 'utf-8')



app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo')
})

let countItem = Number(fs.readFileSync('./item.txt', 'utf-8')) || 0
let countItems = Number(fs.readFileSync('./items.txt', 'utf-8')) || 0

app.get('/random', (req: Request, res: Response) => {
    const random = Math.floor(Math.random(productos.length) * (productos.length +1)) )
    const objToSend = {
        item: productos[random],

    }
    countItem++
   
    fs.writeFileSync('./item.txt', countItem.toString())
    res.json(objToSend)
})

app.get('/items', (req: Request, res: Response) => {
    const objToSend = {
        items: productos,
        cantidad: productos.length

    }
    countItems++
   
    fs.writeFileSync('./items.txt', countItems.toString())
    res.json(objToSend)
})

app.get('/visitas', (req: Request, res: Response) => {
    const objToSend = {
        visitas: {
            items: Number(fs.readFileSync('./item.txt', 'utf-8')),
            item: Number(fs.readFileSync('./items.txt', 'utf-8')),
        }
        
    }
    res.json(objToSend)
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})
