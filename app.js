//        EL CÓDIGO ASYNC CON LAS LIBRERIAS DE NODE
//=========================================================

// --> el async original con el 👺 callbackHELL 👺
const { readFile, writeFile } = require('fs');

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
            if (err) {
               console.log(err);
               return;
            }
            console.log(result);
         }
      );
   });
});

// --> con las librerias de node q "promesifican", en este caso el 'read' y 'write'
const { readFile, writeFile } = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
   try {
      const first = await readFile('./content/first.txt', 'utf8');
      const second = await readFile('./content/second.txt', 'utf8');

      await writeFile(
         './content/result-mind-grenade.txt',
         `THIS IS AWESOME : ${first} ${second}`,
         { flag: 'a' }
      );
   } catch (error) {
      console.log(error);
   }
};
