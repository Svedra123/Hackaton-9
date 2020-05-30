const cipherNumbre = 3
const cipherText = "Hola mundo"
const cipherDeco = "Krod pxqgr"

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


    switch (cipherText.charCodeAt(i)) {
        case "x":
            b = "a"
            break;
        case "y":
            b = "b"
        break;
        case "z":
        b = "c"
        break;
    }

    console.log (b)

}

//decodificacion
for (let j = 0; j <= cipherDeco.length; j++) {

    c = cipherDeco.charCodeAt(j) - 3 
    
    d = String.fromCharCode(c)

    console.log (d)

}