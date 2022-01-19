// para ejecutarlo, en la terminal, desde la ruta del archivo:
// $ node nombreArchivo.js

const num = 12;

if (num > 10) {
   console.log("it's a big number");
} else {
   console.log("it's a little number");
}

console.log('my first node app 😎, and the terminal CAN print emojis ✌!!!');

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
// /home/lel/0-smilga/node/tutorialNode
// /home/lel/0-smilga/node/tutorialNode/app.js

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

// --> VARS.JS
// local
const secret = 'SUPER SECRET';
// shared
const john = 'john';
const peter = 'peter';

module.exports = { john, peter };

// --> UTILS.JS
const sayHi = name => {
   console.log(`Hello there ${name}`);
};

module.exports = { sayHi };

// --> APP.JS
const names = require('./vars');
const sayHi = require('./utils');

// doble sayHi xq la exporté como object, podria simplemente destructurar aquí
sayHi.sayHi(names.peter);
sayHi.sayHi(names.john);

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

//             os built in module
//============================================

// puedo destructurarlos altiro también
const os = require('os');

// info about current user
const user = os.userInfo();

console.log(user);
// {
//    uid: 1000,
//    gid: 1000,
//    username: 'lel',
//    homedir: '/home/lel',
//    shell: '/bin/bash'
// }

// system uptime is seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
// The system uptime is 9169.06 seconds

// system info
const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
};
console.log(currentOS);
// {
//    name: 'Linux',
//    release: '5.15.11-76051511-generic',
//    totalMem: 16179490816,
//    freeMem: 10586329088
// }

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

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

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////