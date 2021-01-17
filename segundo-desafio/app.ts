// import func1 from './importame2'

// function miPrimeraPromesa(){
//     return new Promise((resol,reject)=> {
//         setTimeout(()=>{
//             reject('Hola aqui estoy')
//         }, 5000)
//     })
// }

function operacion (a:number, b:number, c:string) {
    
    return new Promise((resolv,reject)=> {
        switch (c){
            case 'suma':
                import('./importame').then( e => {
                let Suma = e.default
                let s = new Suma(a,b)
                resolv(s.resultado())
        })
        break;
            // case 'resta':
            //     import('./resta').then( e => {
            //         let Resta = e.default
            //         let s = new Resta(a,b)
            //         resolv(s.resultado())
            // })

                break;

    }   
        
})

}
    

async function operaciones (){
//     operacion(4,5,'suma').then( resultado => console.log(`Resultado con promesas ${resultado} !!`))
// }
    let resultado = await operacion(4,5, 'suma')
    console.log(`Resultado con async/await ${resultado} !!`)
}
operaciones()

// async function traerModulo () {

//     import('./importame').then( e => {
//     let Suma = e.default
//     let s = new Suma(5,6)
//     console.log(s.resultado())
// })
//         let e = await import('./importame')
//         let Suma = e.default
//         let s = new Suma(5,6)
//         console.log(s.resultado())

// }



// traerModulo()

// miPrimeraPromesa().then((e)=> {
//     console.log(e)
// }).catch((f)=> {
//     console.log("Error")
// })