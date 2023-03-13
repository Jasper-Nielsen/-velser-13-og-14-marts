"use strict";

// 0.	Find unicode værdien for den coole emoji i denne streng: coolGuy="😎";
// .codePointAt

// example code:
const coolGuy = "😎";
console.log(coolGuy.codePointAt(0).toString(16)); //output: 1f60e
// Du kan evt tilføje .toString(16) for at få den hexadecimale værdi – eller bruge lommeregneren

// 1.	Tjek om et filnavn ender med ".jpg" eller ej
const file = "minfil.jpg";

console.log(file.endsWith("jpg"));

// 2.	Tjek om et navn indeholder en bindestreg .includes()
const navn = "Erik-Hansen";

console.log(navn.includes("-"));

// 3.	Find positionen hvor fornavnet slutter i det fulde navn .indexOf()

const fullName = "Harry Blackstone Copperfield Dresden";
console.log(fullName.substring(0, fullName.indexOf(" ")));

// 4.	Find positionen hvor efternavnet begynder i det fulde navn .lastIndexOf()
console.log(fullName.substring(fullName.lastIndexOf(" ") + 1));

//5.	Tilføj prikker til slutningen af en streng så den er mindst 20 tegn lang

const streng = "is er dejligt";

let nyStreng = streng.padEnd(20, ".");
console.log(nyStreng);

//  let i = streng.length;
// while(i< 20){
//     i++;
//     console.log(streng.padEnd(i, "."));
// }

//6.	Indsæt mellemrum før en tekst, så strengen er mindst 10 tegn lang .padStart()

const tekst = "hurra";
const addedSpaceToTekst = tekst.padStart(35, " ");
console.log(addedSpaceToTekst);
console.log(addedSpaceToTekst.length);

// 7.	Ændr alle "å" i en tekst til "aa" .replaceAll(" ", " ")
const tekst7 = "ålen åge vogede ikke at åbne lågen";
const newTekst7 = tekst7.replaceAll("å", "aa");
console.log(newTekst7);

//8.	Fjern eventuelle dobbelt eller tredobbelte mellemrum inde i en tekst bruge RegEx inden i .replace()

const tekst8 = "En masse dejlig  tekst     lala";
console.log(tekst8.replace(/\s+/g, " "));

//9.	Få de sidste 10 tegn af et navn
const veryLongName = "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.";
console.log(veryLongName.substring(veryLongName.length - 10));

//10.	Tjek om en url begynder med "http://" eller "https://"

//11.	Få mellemnavnet af en streng af det fulde navn, som “Harry James Potter”.
const anotherName = " Harry James Potter ";
console.log(
  anotherName.substring(
    anotherName.indexOf(" ") + 1,
    anotherName.lastIndexOf(" ")
  )
);
//Og hvordan kan du få start og slut-positionerne til det mellemnavn?

console.log(anotherName.indexOf(" "), anotherName.lastIndexOf(" "));
//12.	Lav en streng om til lutter STORE bogstaver

//13.	Lav en streng om til kun små bogstaver

console.log(anotherName.toLowerCase());

// 14.	Lav det første tegn om til et STORT bogstav – og resten til små.
// Du skal måske bruge et par metoder til det.

const harry = "Erik Vagner Potter";
const upperCaseFirstLetter = harry.toUpperCase().substring(0, 1);
const lowerCastRestOfLetters = harry.toLowerCase().substring(1);
console.log(`${upperCaseFirstLetter}${lowerCastRestOfLetters}`);

// 15.	Fjern ekstra mellemrum rundt om en tekst
console.log(anotherName.trim());
// 16.	Fjern ekstra mellemrum før en tekst
console.log(anotherName.trimStart());

// 17.	Fjern ekstra mellemrum efter en tekst
console.log(anotherName.trimEnd());

// 18.	Fjern ekstra mellemrum inden i en tekst .preplace(/\s+/g, "") /s/ romoves whitespace. +means one or more spaces
// g makes it iterative through whole text

console.log(anotherName.replace(/\s+/g, ""));
