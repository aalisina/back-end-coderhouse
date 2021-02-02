const fs = require('fs')

try {

    fs.writeFileSync('./fyh.txt', new Date, 'utf-8')
    
    const data = fs.readFileSync('./fyh.txt', 'utf-8')
    
    console.log(data)
    
} catch (error) {
    throw new Error(error)
}
