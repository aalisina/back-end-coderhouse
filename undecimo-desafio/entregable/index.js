const express= require('express')
const routes = require('./routes')
const data = require('./database')
const fs = require('fs')
const ejs = require('ejs')

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }))

app.get( '/productos/vista', (req, res) => {

res.render(__dirname+'/views/layouts/productos.ejs', {data})    
})

app.get( '/productos/nuevo', (req, res) => {

    res.sendFile(__dirname+'/views/partials/new.html')
})


app.set('views','./views');

app.set('view engine','ejs');

app.use('/api', routes)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`)
})


