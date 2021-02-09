import express, {Request, Response} from 'express'
import { data } from './database'

const router = express.Router()


router.get('/productos', (req: Request, res: Response) => {
    if(!data) res.json({error: 'No hay productos cargados'})
    res.json(data)
})

router.get('/productos/:id', (req: Request, res: Response) => {
    const id  = req.params.id
    const idNum = Number(id)
    if(idNum > data.length || idNum <= 0) res.json({error: 'Producto no encontrado'})
    const objToSend = {
        id: idNum,
        title: data[data[idNum-1].title,
        price: data[data[idNum-1].price,
        thumbnail: data[data[idNum-1].thumbnail,
    }
    
    res.json(objToSend)
  
})

router.post('/productos/', (req: Request, res: Response) => {
    res.send('Producto creado')

})

export default router