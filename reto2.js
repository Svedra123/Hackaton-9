let presupuesto = Number(prompt("Ingrese su presupuesto total para apostar"))
let abc
let naleatorio
let monto
abc = presupuesto

do {

    // monto y numero apuesta
  
    let monto = Number(prompt("Ingrese el monto de la apuesta"))
    if ( monto > presupuesto) {
        alert ("El monto maximo debe ser igual a su presupuesto se asume la totalidad del presupuesto")
        monto = presupuesto
    } 


    const apuesta = Number(prompt("Ingrese el numero al que apuesta (1-6)"))

    // numero random
    naleatorio = Math.floor(Math.random() * (6-1+1)) + 1;

    alert(naleatorio)

    // resultado y actualizacion datos
    if  (apuesta < naleatorio || apuesta > naleatorio ) {
        monto = -monto
        alert ("Usted pierde: " + monto)
    } else {
        monto = monto *2 - monto
        alert ("Usted gana: " + monto)
    }


    presupuesto = presupuesto + monto
    alert ("Su nuevo presupuesto es: " + presupuesto)

    if (presupuesto < 1){
        continuar = "n"
    } else if (presupuesto > 199) {
        continuar = "n"
    } else {
    continuar = String(prompt("Desea continuar? (s/n)"))
    }

} while (continuar === "s");

if (abc>presupuesto) {
    rf = presupuesto - abc
    alert ("Su perdida fue de: " + rf)
} else {
    rf = presupuesto - abc
    alert ("Su ganancia fue de: " + rf)
}