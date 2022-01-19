//                  path module
//============================================
// devuelve un normalized resulting path
// path.sep --> devuelve el separador de mi sistema
// el join une la secuencia de paths con el separador de mi sistema

const path = require('path');

console.log(path.sep); // /

// en el root creo carpeta 'content', con carpeta 'subfolder', con archivo 'test.txt'
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // /content/subfolder/test.txt

// me va a entregar solo el nombre del archivo
const base = path.basename(filePath);
console.log(base); // test.txt

// devuelve el path absoluto
//  __dirname  - path to current directory ( donde está este archivo )
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
// /home/lel/0-smilga/node/tutorialNode/content/subfolder/test.txt
