const fs = require('fs')

fs.promises.writeFile('./path.txt', 'lo que quiro escribir dentro')
    .then( data => {
        console.log(data)
        // trae undefined
    })
    .catch( error => {
        console.log(error)
    })

fs.promises.readFile('./path.txt', 'utf-8')
    .then( data => {
        console.log(data)
    })
    .catch( error => {
        console.log(error)
    })


const readFile = async () => {

    try {
        const data = await fs.promises.readFile('./path.txt', 'utf-8')
        console.log(data)
        
    } catch (error) {
        console.log('Upps')
    }

}