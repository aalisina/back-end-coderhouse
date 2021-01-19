function* randomNum(numMin, numMax, cant) {
    let index = 0
    console.log('Cuantas veces entro aca?')
    
    while(index < cant) {
        yield {
            orden: index++,
            num: Math.random() * (numMax-numMin)+numMin,
            date: new Date()
        }
    }

}

const x = randomNum(1, 10, 2)

console.log(x.next().value)
console.log(x.next())
console.log(x.next())