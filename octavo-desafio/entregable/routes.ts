import express, {Request, Response} from 'express'
import { data } from './database'

const router = express.Router()


router.get('/productos', (req: Request, res: Response) => {
    res.send('Productos')
})

router.get('/productos/:id', (req: Request, res: Response) => {
    const id  = req.params.id
    const idNum = Number(id)
    // console.log(data.length)
    // if (idNum <= data.length) {

        data.filter( (item, index) => {
            
            if(idNum === index+1){

                
                res.json(item)
                
            } 
            console.log('error');
            
        })
            
        // })
    // }
    
    // console.log('error2')
})

router.post('/productos/', (req: Request, res: Response) => {
    res.send('Producto creado')

})

export default router