"use strict";

const book1 = "Harry potter and the Philosopher's Stone";
const book2 = "Harry potter and the Chamber of secret";
const book3 = "Harry potter and the Prisoner of Azkaban";
const book4 = "Harry potter and the Goblet of Fire";
const book5 = "Harry potter and the Order of the Phoenix";
const book6 = "Harry potter and the Half-Blood Prince";
const book7 = "Harry potter and the Deathly Hallows";

const nickName = book1.substring(book1.indexOf("and the") + 8);
const nickName1 = book2.substring(book2.indexOf("and the") + 8);
const nickName2 = book3.substring(book3.indexOf("and the") + 8);
const nickName3 = book4.substring(book4.indexOf("and the") + 8);
const nickName4 = book5.substring(book5.indexOf("and the") + 8);
const nickName5 = book6.substring(book6.indexOf("and the") + 8);
const nickName6 = book7.substring(book7.indexOf("and the") + 8);

console.log(nickName);
console.log(nickName1);
console.log(nickName2);
console.log(nickName3);
console.log(nickName4);
console.log(nickName5);
console.log(nickName6);
