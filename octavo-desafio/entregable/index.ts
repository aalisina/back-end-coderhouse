import express, {Application, Request, Response} from 'express'
import routes from './routes'

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