"use strict"

const fullname = "Albus Percival Wulfric Brian Dumbledore";


// Og lav så kodelinjer med substring der kan give dig disse output:

//     “Albus”
console.log(fullname.substring(0, 5));
//     “Dumbledore” – kan du nøjes med én parameter til substring?
console.log(fullname.substring(29)); //Dumbledore
//     “Wulfric”
console.log(fullname.substring(15, 22)); //Wulfric
//     “ Wulfric “ – har du et godt tip til hvordan man kan se om der er kommet ekstra mellemrum med, eller ej?
//forkokrt endepunktet med en og hvis bogstav ikke slette slettes mellemrum
//     “ian”
console.log(fullname.substring(25, 28)); //ian
//     “bus”
console.log(fullname.substring(2, 5)); //bus