"use strict";

// Lav en funktion: myFunc, der modtager én parameter: parm.

// inde i funktionen skal den sætte parm = “en ny værdi”

function myFunc(parm) {
  // to gange inde i funktionen (før den sætter parm til “en ny værdi” og efter),
  console.log(parm); // første værdi
  parm = `en ny værdi`;
  console.log(parm); // en ny værdi
  //der sekr ikke noget ved den lokale variabel uden for functionen
}

//Lav en global variabel, parm, og sæt den til “første værdi”
let parm = "første værdi";

//console.log parm før funktionskaldet,
console.log(parm); // første værdi
//Kald funktionen myFunc med parm som parameter.
myFunc(parm);
//og endelig efter funktionskaldet.
console.log(parm); // første værdi

// ----------Hvad sker der med parm?
//parm som global variabel udskrives  "første værdi" og "første værdi", "en ny værdi" og "første værdi".
// de to første gange er functionen myFunc ikke kaldet og værdien på den globale parm udskrives.
//myFunc laver en lokal variabel og ændrer værdi af parm til "en ny værdi"
// den globale variabel parm bliver dernæst udskrevet og har sin oprindelige værdi.

//-----Hvad sker der hvis funktionen bliver kaldt uden parameter?
myFunc(); //"undefined" og "en ny værdi"
//inden parm="en ny værdi"; er parm undefined og output er "undefined" inden functionen ændrer
//værdien på lokal parm til "en ny værdi"

// -----Hvad sker der hvis funktionen bliver kaldt med “en tredje værdi” i stedet for parm?
myFunc("en tredje værdi"); //out put "en tredje værdi" og "en ny værdi"
//først sættes værdien til literal "en tredje værdi" som argument. funktionen sætter værdi på myFunc til "en ny værdi"

//-------Hvad sker der hvis der bliver oprettet en ny let parm = “noget helt nyt” inde i funktionen?
//Uncaught SyntaxError. parm bliver erkleret i parameter vi kan ikke erklære en variabel to gange

//-----Hvad sker der hvis parameteren i funktionserklæringen ændres fra parm til parm1?
// output "først værdi" "først værdi" "en ny værdi" - på alle andre
// så overskrives værdien af global parm efter funktionskald??.

//---------Hvilke regler med hensyn til parametre, interne og eksterne variabler, kan du formulere ud fra disse afprøvninger?
/* parameter i functionen laver lokal variabel som kun eksisterer mens funktionen kører. 
den lokale variables værdi overskygger den globale variables.
parameter er en variabel erklæring og kan ikke erklæres igen, kun reassignes

*/
