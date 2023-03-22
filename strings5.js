"use strict";

//---------Name parts del 1

//const fullName = "Albus Percival Wulfric Brian Dumbledore";

function writeNameParts(fullName) {
  //udklipper fornavn til en streng til variablen firstName
  const firstName = fullName.substring(0, fullName.indexOf(" "));

  // tager først og sidste mellemrum og assigner strengen til variablen  middlename
  const middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.lastIndexOf(" ")
  ); //udklipper fornavn til en streng til varibalen lastName
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  console.log({ firstName, middleName, lastName });
}

writeNameParts("Peter Heronimous Lind");
writeNameParts("Harry James Potter");
writeNameParts("Albus Percival Wulfric Brian Dumbledore");
writeNameParts("Brendan Eich"); // middleName er tom i array ''

//--------fullname del 1
function writeFullName(lastName, firstName, middleName) {
  let fullName = `${firstName} ${middleName} ${lastName}`;

  if (middleName) {
    fullName = `${firstName} ${middleName} ${lastName}`;
  } else {
    fullName = `${firstName} ${lastName}`;
  }
  console.log(fullName);
}

writeFullName("Lind", "Peter", "Heronimous"); //Peter Heronimous Lind

writeFullName("Potter", "Harry", "James");

writeFullName("Dumbledore", "Albus", "Percival Wulfric Brian");

writeFullName("Lind", "Peter"); //Peter undefined Lind
// så når du giver den literal værdier skrives de ind i rækkefølgen som sat i funktionens body i variablen fullName.
writeFullName("Lind", "Peter", null); //virker fint fordi vi intent middleName dvs. sidste parameter giver og else bliver eksekveret

//-----------name parts  del 2
// function getFullName(lastName, firstName, middleName) {
//   let fullName = `${firstName} ${middleName} ${lastName}`;

//   if (middleName) {
//     fullName = `${firstName} ${middleName} ${lastName}`;
//   } else {
//     fullName = `${firstName} ${lastName}`;
//   }
//   return fullName;
// }

// console.log(getFullName("Lind", "Peter", "Heronimous"));
// console.log(getFullName("Potter", "Harry", "James"));
// console.log(getFullName("Dumbledore", "Albus", "Percival Wulfric Brian"));

// console.log(getFullName("Lind", "Peter"));
// console.log(getFullName("Potter", "Harry"));
// console.log(getFullName("Dumbledore", "Albus"));

function writeNameParts(fullName) {
  //udklipper fornavn til en streng til variablen firstName
  const firstName = fullName.substring(0, fullName.indexOf(" "));

  // tager først og sidste mellemrum og assigner strengen til variablen  middlename
  const middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.lastIndexOf(" ")
  ); //udklipper fornavn til en streng til varibalen lastName
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  console.log({ firstName, middleName, lastName });
}

// ---------------name parts del 3
// misforstået opgaven!!!!
// function getFullNameAndCapitalizeFirstLettersInEachName(
//   lastName,
//   firstName,
//   middleName
// ) {
//   let fullName;

//   if (middleName) {
//     //makes first letter in every variable capatilized
//     lastName = capitalized(lastName);
//     firstName = capitalized(firstName);
//     middleName = capitalized(middleName);

//     // sets the order of our local variables - parameters passed by values
//     // to get firstName middleName lastName in our output in the console.log()
//     fullName = `${firstName} ${middleName} ${lastName}`;
//   } else {
//     //makes first letter in every word capatilized
//     lastName = capitalized(lastName);
//     firstName = capitalized(firstName);
//     // sets the order of our local variables - parameters passed by values
//     // to get firstName lastName in our output in the console.log()
//     fullName = `${firstName} ${lastName}`;
//   }
//   return fullName;
// }

function getFullNameAndCapitalizeFirstLettersInEachName(fullName) {
  //udklipper fornavn til en streng til variablen firstName
  const firstName = capitalized(fullName.substring(0, fullName.indexOf(" ")));
  // firstName = capitalized(firstName);
  // tager først og sidste mellemrum og assigner strengen til variablen  middlename

  const middleName = capitalized(
    fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))
  );

  // middleName = capitalized(middleName);
  //udklipper fornavn til en streng til varibalen lastName

  const lastName = capitalized(
    fullName.substring(fullName.lastIndexOf(" ") + 1)
  );
  // lastName = capitalized(lastName);

  if (middleName === " ") {
    fullName = { firstName, lastName };
  } else {
    fullName = { firstName, middleName, lastName };
  }

  return fullName;
}

console.log(
  getFullNameAndCapitalizeFirstLettersInEachName("jaSper MogeNsen NielsEn")
);

console.log(getFullNameAndCapitalizeFirstLettersInEachName("JaspeR NIelsen"));

function capitalized(name) {
  const firstLetter = name.substring(0, 1).toUpperCase();
  const restOfLettersLowercase = name.substring(1).toLowerCase();

  return `${firstLetter}${restOfLettersLowercase}`;
}

// const output1 = console.log(
//   getFullNameAndCapitalizeFirstLettersInEachName("erik", "manfed", "larsen")
// );
// const output2 = console.log(
//   getFullNameAndCapitalizeFirstLettersInEachName("eRik", "maNfed", "larsEn")
// );
// const output3 = console.log(
//   getFullNameAndCapitalizeFirstLettersInEachName("eRik", "maNfed")
// );
