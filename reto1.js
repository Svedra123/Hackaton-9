const cipherText = prompt("Hola ingresa tu frase a codear")
const cipherDeco = prompt("Hola ingresa el codigo a desifrar")

let i=0
let a = 0
let b = 0
let j = 0
let c = 0
let d = 0


//codificacion
for (let i = 0; i <= cipherText.length; i++) {

    a = cipherText.charCodeAt(i) + 3 
    
    b = String.fromCharCode(a)

   
    switch (b) {
        case "#":
            b = " "
            break;
        case "{":
            b = "a"
            break;
        case "|":
            b = "b"
        break;
        case "}":
            b = "c"
        break;
        case "[":
            b = "A"
            break;
        case "2":
            b = "B"
        break;
        case "]":
        b = "C"
        break;
    }

    console.log (b)

}

//decodificacion
for (let j = 0; j <= cipherDeco.length; j++) {

    c = cipherDeco.charCodeAt(j) - 3 
    
    d = String.fromCharCode(c)

    switch (d) {
        case "":
            d = " "
            break;
        case "^":
            d = "x"
            break;
        case "_":
            d = "y"
        break;
        case "`":
            d = "z"
        break;
        case ">":
            d = "x"
            break;
        case "?":
            d = "y"
        break;
        case "@":
            d = "z"
        break;
    }


    console.log (d)

}