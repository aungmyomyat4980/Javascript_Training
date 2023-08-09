let myString = "Hello, world!";
let index = 7;

// charAt()
console.log("charAt():", myString.charAt(index));
// concat()
console.log("concat():", myString.concat(" How are you?"));
// endsWith()
console.log("endsWith():", myString.endsWith("!"));
// includes()
console.log("includes():", myString.includes("world"));
// indexOf()
console.log("indexOf():", myString.indexOf("world"));
// length
console.log("length:", myString.length);
// match()
let regex = /(\w+)/g;
console.log("match():", myString.match(regex));
// repeat()
console.log("repeat():", myString.repeat(3));
// replace()
console.log("replace():", myString.replace("world", "universe"));
// slice()
console.log("slice():", myString.slice(7, 12));
// split()
console.log("split():", myString.split(" "));
// startsWith()
console.log("startsWith():", myString.startsWith("Hello"));
// substr()
console.log("substr():", myString.substr(7, 5));
// substring()
console.log("substring():", myString.substring(7, 12));
// toLowerCase()
console.log("toLowerCase():", myString.toLowerCase());
// toUpperCase()
console.log("toUpperCase():", myString.toUpperCase());
// trim()
let whitespaceString = "   Some text with whitespace   ";
console.log("trim():", whitespaceString.trim());
// valueOf()
let stringObject = new String("This is a string object");
console.log("valueOf():", stringObject.valueOf());

