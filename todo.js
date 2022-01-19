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

//                  fs module - sync ( blocking )
//=====================================================
// carpeta 'content' con archivo 'first.txt' y 'second.txt'

const { readFileSync, writeFileSync } = require('fs');

// obtiene el contenido del archivo
// path y el encoding ( encoding del archivo creo :)
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);
// hola desde first text file. hola desde second text file.

//si no existe el archivo del path q se pasa => node lo crea, el segundo parametro es el valor q queremos pasar
// si el archivo ya tenia algo => lo va a sobreescribir
// para q haga append a lo q ya está se pasa el tercer argumento { flag: 'a' }
writeFileSync(
   './content/archivo-creado.txt',
   `Here is the result: ${first}, ${second}`
);

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

//                  fs module - async ( non blocking )
//=========================================================

const { readFile, writeFile } = require('fs');

// en async hay q pasar una callback-fcn, el result va a estar el resultado del readFile
// como son async, se va metiendo cada paso en una callback-fcn, pero se arma el callbackHELL 👺👺
readFile('./content/first.txt', 'utf8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;

   readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err) {
         console.log(err);
         return;
      }

      const second = result;
      writeFile(
         './content/result-async.txt',
         `Here is the result: ${first}, ${second}`,
         (err, result) => {
            /* en este caso solo estoy creando el archivo así q el console.log(result) va a mandar 'undefined', pero SI crea el archivo con el contenido, y TIENE Q LLEVAR LA CALLBACK-FCN  */
            if (err) {
               console.log(err);
               return;
            }
            console.log(result);
         }
      );
   });
});

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

//                  HTTP module
//==================================================
const http = require('http');

// req.url entrega el endpoint al q el usuario está tratando de entrar
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('Bienvenido al "home"');
   } else if (req.url === '/about') {
      res.end('Bienvenido al "about"');
   } else {
      /* respuesta default x si intentan meterse a una q no existe */
      res.end(`
         <h1>Oops!</h1>
         <p>No se puede encontrar la pagina q buscas</p>
         <a href="/">back home</a>
      `);
   }
});

// puerto en el q escucha el servidor
// en http://localhost:5000 se va a ver lo q mande como respuesta
server.listen(5000);

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////

//                  NPM
//==================================================

// local dependency --> use it only in this particular project
// npm i <packageName>

// global dependency --> use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> ( mac )

// package.json - manifest file ( stores important info about poject/package )
// manual aproach ( create package.json in the root, create properties etc )
// npm init ( step by step, press enter to skip )
// npm init -y ( everything default )

// para instalar como dev dependency --> -D ó --save-dev

// nodemon --> queda haciendo 'watch' por cambios en los archivo y los ejecuta para no tener q ejecutar a cada rato el archivo en la consola
// npm i nodemon -D

// en los scripts, de 'package.json' algunos se pueden correr simplemente como 'npm start' pero otros se tienen q correr como 'npm run dev' ( npm run nombreDelComando )

console.log('holi hola');

// para desinstalar un package --> npm uninstall nombreDelPaquete

/////////////////////////////    /////////////////////////////
//               ////////////////////////////               //
///////////////////////////// 🍑 /////////////////////////////
//               ////////////////////////////               //
/////////////////////////////    /////////////////////////////
