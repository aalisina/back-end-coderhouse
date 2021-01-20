

// const recorrerTexto = (texto) => {
//    let textArray = texto.split(" ")
//   // time = time || 1000
//     for(let i; i < textArray.length; i++){
//         setInterval( ()=> {
          
//         }, 1000)
    
//     }
//     return textArray[i]
// }
// function callBack() {
//     console.log("Callback esta funcionando")
// }


// const nuevaFuncion = async ()=> {
   
//    const kos = await recorrerTexto('kose bibi ys` ghs hs hs hs')
//     console.log(kos)
// }

// const ejecutar = (func, param) => func(param)
// const saludo = (m)=> console.log(m)

// ejecutar(saludo, 'Hola Mundo')

// var getData = (callback) => {
//     setTimeout(()=> {
//         callback({id: 3, name: 'pablo', edad:33})
//     }, 2000)
// }

// let sumarEdad = (e) => {
//     console.log(e.id + e.edad) 

// }

// getData(sumarEdad)

// const suma = (a,b) => a+b
// const resta = (a, b) => a-b 
// var getData = (callback) => {
    //     setTimeout(()=> {
    //         callback({id: 3, name: 'pablo', edad:33})
    //     }, 2000)
    // }
    
    // let sumarEdad = (e) => {
    //     console.log(e.id + e.edad) 
    
    // }
    clearInterval()
        
//         break

//         case 'resta':
        
//         break

//         case 'multiplicar':

//         break
//     }
// }

// function operacion(a, b, callback) {
//     console.log(callback(a,b))
// }

// operacion(3,4, suma)
// operacion(5,6, resta)

// let int = setInterval(()=> {
//     console.log('soy un interval')
// }, 1000)

// const fin = () => console.log("Terminado...") 



// function mostrarLetras(str, func) {
//    // time = time || 1000
//     var strin = str.split('')
//     var count = 0
    
//     var int = setInterval(()=> {
//         if (count >= (strin.length -1)) clearInterval(int)
//         console.log(strin[count++])

//     }, 1000)

// }

// mostrarLetras("Hola Mundo", fin)


// const fin = () => console.log("Terminado...") 



// function recorrerTexto(str) {
//    // time = time || 1000
//     var strin = str.split(" ")
//     var count = 0
    
//     var int = setInterval(()=> {
//         if (count >= (strin.length -1)) clearInterval(int)
//         console.log(strin[count++])

//     }, 1000)

// }

// var texto1 = "Hola mundo"
// var texto2 = "Este es otro texto"
// var texto3 = "El tercer texto"

const recorrerTexto = (texto, tiempo, callback)=> {
    const palabras = texto.split(' ')
    let index = 0
    let intervalo = setInterval( (palabras)=> {
        // console.log(words)
        // console.log(`Variable palabras aqui ${palabras}`)
        if( index < palabras.length) {
            console.log(palabras[index])
            index++
        } else {
            clearInterval(intervalo)
            callback(palabras.length)
        }

    }, tiempo, palabras)
}

recorrerTexto("Este es un texto de prueba", 1000, (count)=> {
    totalCount = count
    
    recorrerTexto("Segundo texto bla bla bla", 500, (count) => {
        totalCount += count
        console.log(totalCount)
    })

    } 
)