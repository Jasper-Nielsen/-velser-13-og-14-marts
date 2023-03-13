"use strict";

const fullName = "Albus Percival Wulfric Brian Dumbledore";

const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log(firstName);

// tager først og sidste mellemrum 
const middleName = fullName.substring(fullName.indexOf(" ")+1, fullName.lastIndexOf(" "));

console.log(middleName);

const lastName = fullName.substring(fullName.lastIndexOf(" ")+1);
console.log(lastName);