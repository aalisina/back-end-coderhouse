const express=require('express')
const  fs = require('fs') 
const data = require('./database') 

const router = express.Router()

router.get('/productos', (req, res) => {
    if(!data) return res.json({error: 'No hay productos cargados'})
    console.log(data)
    const objToSend = data.map( (item, index)=> {
        return {
            id: index+1,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail
        }
    })
    res.json(objToSend)
})

router.get('/productos/:id', (req, res) => {
    const id  = req.params.id
    const idNum = Number(id)
    if(idNum === NaN) return res.json({error: 'Producto no encontrado'})
    if(idNum > data.length || idNum <= 0) return res.json({error: 'Producto no encontrado'})
    const objToSend = {
        id: idNum,
        title: data[idNum-1].title,
        price: data[idNum-1].price,
        thumbnail: data[idNum-1].thumbnail
    }

    res.json(objToSend)
  
})

router.post('/productos/', (req, res) => {
    const objToCreate = req.body
    console.log(req.body)
    data.push(objToCreate)

    fs.writeFileSync('./database.js', `const data = ${JSON.stringify(data)}`+ '\n module.exports = data')
    res.json(data)

})

router.patch('/productos/:id', (req, res) => {
    const { id } = req.params
    const { body } = req
    const index = Number(id) -1

    const objToModify = data[index]
    Object.assign(objToModify, body)
    data[index] = objToModify
    fs.writeFileSync('./database.js', `const data = ${JSON.stringify(data)}`+'\n module.exports = data')
    res.json(objToModify)
})

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    const index = Number(id) -1
    const deletedObj = data[index]
    const newData = data.filter ( (item, i) => {
        return index !== i
    })
    fs.writeFileSync('./database.js', `const data = ${JSON.stringify(newData)}`+'\n module.exports = data')
    res.json(deletedObj)
})

module.exports = router