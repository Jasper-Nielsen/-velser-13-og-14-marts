"use strict";

//present pet

// Test funktionen ved at kalde den både med variabler og literals, og svar på disse spørgsmål:

function presentPet(firstName_p, animalType_p, animalName_p) {
  console.log(
    `Hello my name is ${firstName_p}, I have a ${animalType_p} called ${animalName_p}`
  );
}

//  ------ Hvad sker der hvis funktionen kaldes med variabler der hedder det samme som parametrene?
// Altså, når den kaldes med argumenterne med samme navn som parameter udskriver den
// værdierne på dem.
let firstName = "Peter";
let animalType = "cat";
let animalName = "Mandu";

presentPet(name, animalType, animalName); // Hello my name is Peter, I have a cat called Mandu

//     Hvad sker der hvis funktionen kaldes med variabler der hedder noget andet?
const myName = "Andreas";
const animal = "cat";
const petName = "Basse";

presentPet(myName, animal, petName); //Hello my name is Andreas, I have a cat called Basse
//den udskriver. så længe variabler og argumenter/parameterne i funktionenskaldet hedder det samme.

//     Hvad sker der hvis den udelukkende kaldes med strenge?

presentPet("Erik", "ko", "Mthilde"); //Hello my name is Erik, I have a ko called Mthilde

//     Hvad sker der hvis den kaldes med et mix af strenge og variabler?
presentPet("Hanne", animal, "bæver"); //Hello my name is Hanne, I have a cat called bæver
//funktionen er ligeglad om den får en streng eller variabel eller hvad strengen hedder. den første den får er firstName, næste er animalType og sidste er animalName

//     Hvad hvis du laver variablerne: firstName = “cat”, animalType=”Mandu” og animalName=”Peter” og kalder funktionen med de variabler?
name = "cat";
animalType = "Mandu";
animalName = "Peter";
presentPet(name, animalType, animalName); // Hello my name is cat, I have a Mandu called Peter

//     Hvad hvis du kalder den med de variabler men som presentPet(animalName, firstName, animalType); ?
presentPet(animalName, name, animalType); //Hello my name is Peter, I have a cat called Mandu
//den følger rækkefølgen af parameterne

//     Hvad sker der hvis du bytter om på variablerne?
//så ændres rækkefølgen

// Kan du drage nogle konklusioner om parametre, navngivning og rækkefølge ud fra de eksperimenter?
// det er rækkefølgen i kaldet der afgører hvad der bliver skrevet, i hvilken rækkefølge
