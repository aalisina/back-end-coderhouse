const recorrerTexto = (texto, tiempo = 1000, callback) => {
    const arrayPalabras = texto.split(' ')
    let index = 0
    let intervalo = setInterval( (palabras) => {
        if( index < palabras.length) {
            console.log( palabras[index])
            index++
        } else {
            clearInterval(intervalo)
            callback(arrayPalabras.length)
 //           console.log("Estoy en el else")
        }
    }, tiempo, arrayPalabras)
}

recorrerTexto("Esto es el primer texto", 300, (count) => {
    let totalCount = count
    recorrerTexto("Otro ejemplo de texto", 1500, (count)=> {
        totalCount += count
            recorrerTexto("Este es el ultimo texto", 700, (count)=> {
                totalCount += count
                console.log(`Proceso completo. Los textos tienen ${totalCount} palabras`)
            })
    })
})