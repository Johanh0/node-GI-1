/*
Deliverable 1: Language Detection Code
Find an npm package that tells you the language a string is written in.
Print the most accurate language for the following phrases:
“Es macht gut”
“Dobrá práce”
“Gwaith da”
Push code to GitHub repository called “Language Detection Code”
Take screenshot of results and push them to repo as well
*/

const LanguageDetect = require("languagedetect");
const lngDectetor = new LanguageDetect();

console.log(lngDectetor.detect("Es macht gut", 1));
console.log(lngDectetor.detect("Dobrá práce", 1));
console.log(lngDectetor.detect("Gwaith da", 1));
