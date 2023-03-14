"use strict";
const myName = "Peter";

sayHello(myName);

const firstName = "Peter";
const lastName = "Ole";
sayHello(name, lastName);
sayHello("Noget andet end Peter");

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

sayHello(lastName, name); // den tager første argument som parameter, er ligeglad med hvad der står.

//hvis kaldes uden en parameter bliver funktionen
// undefined

//hvis varibalen ikk er der og den kaldes som
//parameter i metoden får du en uncaught
//reference error

/* 
------hvis funktion bliver erklæret i bunden af js-filen men kaldt i toppen
du kan kalde den hvor som helst når det er en function declaration (hoisting. bliver erklæret i toppen uanset hvor den står)

-------hvis funktion kaldes med en variable der hedder firstName
ingen forskel virker fint. ligeglad med hvad parameter hedder

----uden parameter bliver output undefined

---kaldes med firstName og lastName
kører fint

bytter om i kaldet bytter output om
*/
