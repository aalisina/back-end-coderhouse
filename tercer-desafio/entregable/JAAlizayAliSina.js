const fin = () => console.log("Terminado...") 



function recorrerTexto(str) {
   // time = time || 1000
    var strin = str.split(" ")
    var count = 0
    
    var int = setInterval(()=> {
        if (count >= (strin.length -1)) clearInterval(int)
        console.log(strin[count++])

    }, 1000)

}

var texto1 = "Hola mundo"
var texto2 = "Este es otro texto"
var texto3 = "El tercer texto"

