"use strict";
//function4 greeting
// pointen er at vi ikke kalder console.log i funtionen
function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Peter");
console.log(result);

//------Hvad sker der hvis funktionen bare bliver kaldt, uden at en variabel bliver sat lig med den?
//-------Altså at der bare står greeting(“et navn”); på en linje?
greeting("et navn"); // intet output da vi ikke har fanget return i en variabel

//-------Hvad sker der hvis funktionen bliver kaldt ude i konsollen, altså du skriver greeting(“et navn”) og trykker enter?
//output Uncaught SyntaxError: Invalid or unexpected token

//-------Hvad sker der hvis funktionen kaldes direkte i en console.log? Altså console.log(greeting(“et navn”)); ?
console.log(greeting("et navn")); //output Hello et navn. her kalder vi metoden console.log på greeting derfor udskrives dens return værdi.
//da console.log returner dens parameter

//------ Hvad sker der hvis funktionen kaldes uden en parameter?
console.log(greeting()); //output Hello undefined

const result2 = greeting();
console.log(result2); //output "Hello undefined" da parameteren ikke har fået et argument er værdien undefined.

//------Hvad sker der hvis funktionen kaldes inde i en template string, fx const txt = `Greeting is ${greeting(“et navn”)}`;
const txt = `Greeting is ${greeting("Erik")}`;
console.log(txt); // output "Greeting is Hello Erik" dvs kombinerer functionen med resten af værdien for txt


