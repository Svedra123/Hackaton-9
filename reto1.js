const cipherNumbre = 3
const cipherText = "Hola mundo"

let i=0
let a = 0

console.log(cipherText)

for (let i = 0; i <= cipherText.length; i++) {

    a = cipherText.charCodeAt(i) + 3
    b = String.fromCharCode(a)
    
    if (cipherText.charCodeAt[i]=32) {
        a = cipherText.charCodeAt(i)
    }

    console.log (b)


}

