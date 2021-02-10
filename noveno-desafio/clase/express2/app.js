var express = require('express');
var multer = require('multer');
var app = express();
var router = express.Router();



var storage = multer.diskStorage({
    destination: function (req,file,cb){
    cb(null,'uploads')
    },
    filename: function (req,file,cb){
    cb(null,file.fieldname + '-' + Date.now())
    }
  
  })
  var upload = multer({storage:storage});

  app.post('/uploadfile',upload.single('myFile'),(req,res,next)=>{

    const file = req.file;
    
    if(!file){
    const error = new Error('Elegi un archivo');
    error.httpStatusCode = 400;
     next(error)
    
    }
    res.send('EL archivo creado exitosamente!!!')
    })


app.use(express.urlencoded({extended:true}));

app.use ('/help',(req,res,next)=>{
    console.log('Se ingreso a la ayuda')
    next();

})

app.get('/subirarchivo',(req,res)=>{

    res.sendFile(__dirname+'/index.html');

})
app.get('/diminombre',(req,res)=>{
    res.sendFile(__dirname+'/diminombre.html');
})

function verificar(req,res,next){

    if (req.body.nombre == '3788')
        next();
    else
    res.status(500).send('Error de acceso!!!')
    
}
app.post('/minombre',verificar, (req,res)=>{

    res.send(`Hola Pablo pagina oculta!!!`)
  
})
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    console.log(req.url);
    next();
  });

app.use('/',router);
app.use('/mascotas',require('./rutas/mascotas'))
const server = app.listen(5090,function(){
console.log(server.address().port)
});