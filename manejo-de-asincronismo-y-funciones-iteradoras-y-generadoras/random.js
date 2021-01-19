function randomNum(numMin, numMax, cant) {
    let index = 0
    console.log('Cuantas veces entro?')
    return {
        next: function(){

            return index < cant
                ? { value: {
                    orden: index++,
                    number: Math.random() * (numMax - numMin) + numMin,
                    date: new Date()
                }, done: false 
            } : { done: true }
        }
    }
}
// aqui entramos a la funcion
let x = randomNum(1, 10, 2)

// solo ejecutamos el metodo next
console.log(x.next().value)
console.log(x.next())
console.log(x.next())