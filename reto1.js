const cipherNumbre = 3
const cipherText = "Hola mundo"

let i=0
let a = 0

console.log(cipherText)

for (let i = 0; i <= cipherText.length; i++) {

    if (cipherText[i]=35) {
        a = i
    }


    a = cipherText.charCodeAt(i) + 3
    b = String.fromCharCode(a)
    

    console.log (b)

}

