const http = require('http')
const server = http.createServer( (req, res) => {


    const makeObj = () => {
        return {
            id: Math.random()* 10,
            title: "Producto " + Math.random()* 10,
            price: Math.random()*9999.99,
            thumbnail: "Foto " + Math.random()* 10,
        }
    }
    
    const newObj = makeObj()
    res.end(JSON.stringify(newObj))

} )

const PORT = process.env.PORT || 3001

server.listen( PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})