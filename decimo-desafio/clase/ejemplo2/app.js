const express = require('express');
const fs = require('fs');
const app = express();
const handlebars = require('express-handlebars');


function motorsito(filePath,options,callback){

    fs.readFile(filePath,function(err,content){
        if (err) return callback(new Error(err))
        let rendered = content.toString()
        .replace('#title#',''+options.title+'')
        .replace('#message#',''+options.message+'')
        .replace('#name#','Coder')
    
    
        return callback(null,rendered);
    
    })
    
}

app.engine("hbs",handlebars({

extname:".hbs",
defaultLayout:"index.hbs",
layoutsDir:__dirname+"/views/layouts/",
partialsDir:__dirname +"/views/partials/"


}))

app.engine('ntl',motorsito)

app.get('/',(req,res)=>{

  // res.render('index',{title:'123',message:'hello world..'})
  res.render("main",{suggestedChamps:[
        {name:'paul',lane:'midlaner'},
        {name:'daniel',lane:'toplaner'},

    ],listExists:true})

})
app.get('/test',(req,res)=>{

//res.send('Testing...')
res.render("test",{test:false})

})

app.set('views','./views');

//app.set('view engine','ntl');

app.set('view engine','hbs');


const lister = app.listen(8000,()=>{

    console.log('Listo!!!')
})