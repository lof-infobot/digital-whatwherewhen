const util = require('util');
const fs = require('fs');
const csv = require('csvtojson');

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const CSV_PATH = './csv/';

async function main() {
  let content = {};
  let fileNames = await readdir(CSV_PATH);

  let promises = fileNames.map((path) => {
    return new Promise(async (res, rej) => {
      try {
        let name = path.split(' ');
        name = name[name.length - 1].replace('.csv', '');
        let json = await csv().fromFile(CSV_PATH + path);
        content[name] = json;
        res();
      }

      catch(err) {
        console.error('!!! ', err);
        rej(err);
      }
    });
  });

  Promise.all(promises)
    .then(() => {
      console.log(JSON.stringify({ content }, null, 2));
  }).catch((err) => {
    console.error('!!! Promises.all caught: ', err);
  });
}

main();
