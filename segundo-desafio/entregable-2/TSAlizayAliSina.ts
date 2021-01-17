const calculateModule = './calculates'

const operacion = async (num1: number, num2: number, oper: string) => {
    //Cargar dinamicamente el modulo que realiza la operacion

    let operation = null

    switch(oper.toLowerCase()) {
        case 'suma':
            //Importar al modulo de suma
            operation = await import(calculateModule).then( n => n.Suma)
            break
        case 'resta':
            //Importar al modulo resta
            operation = await import(calculateModule).then( f => f.Resta)
            break
        default:
            return console.log(`${oper} no es una operacion soportada por esta aplicion`)

    }
    return new operation(num1, num2).resultado()
}

const operaciones = async () => {
    const operacionSuma = await operacion(54, 2, 'suma')
    console.log(operacionSuma)
    const operacionResta = await operacion(54, 2, 'resta')
    console.log(operacionResta)
    const operacionError = await operacion(54, 2, 'rsafdestasas')
    console.log(operacionError)
}
operaciones()