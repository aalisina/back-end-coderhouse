import express, {Application, Request, Response} from 'express'
import routes from './routes'
import {data} from './database'
const handlebars =require('express-handlebars') 

const app: Application = express()
app.use(express.json())

app.get( '/', (req: Request, res: Response) => {
    res.json({message: 'Bienvenido'})
})

app.use('/api', routes)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`)
})

app.engine("hbs",handlebars({

    extname:".hbs",
    defaultLayout:"index.hbs",
    layoutsDir:__dirname+"/views/layouts/",
    partialsDir:__dirname +"/views/partials/"
    
    
    }))
app.set('views','./views/layout')
app.set('view engine','hbs')

app.get('/productos/vista', (req: Request, res: Response) => {
        if(!data) return res.json({error: 'No hay productos cargados'})
        const objToSend = data.map( (item, index)=> {
            return {
                id: "Hola"
            }
        })
        res.render("index", objToSend)
})
