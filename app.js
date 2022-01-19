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
