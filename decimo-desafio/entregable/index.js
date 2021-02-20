const express= require('express')
const routes = require('./routes')
const data = require('./database')
const handlebars =require('express-handlebars') 
const fs = require('fs')

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }))

app.get( '/productos/vista', (req, res) => {

    if(data) return res.render("partials/main",{data, dataExists: true})
    if(!data) return res.render("partials/main",{data, dataExists: false})
})

app.get( '/productos/nuevo', (req, res) => {

    res.sendFile(__dirname+'/views/partials/new.html')
})

app.engine("hbs",handlebars({

    extname:".hbs",
    defaultLayout:"index.hbs",
    layoutsDir:__dirname+"/views/layouts/",
    partialsDir:__dirname +"/views/partials/"
    
    
}))

app.set('views','./views');

app.set('view engine','hbs');

app.use('/api', routes)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`)
})


