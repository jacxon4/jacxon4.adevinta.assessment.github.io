const fs = require('fs');
function writeDBToFile() {
  let rawdata = fs.readFileSync('src/mock/db.json');
  let db = JSON.parse(rawdata);
  fs.writeFile(`build-prod/db.json`, JSON.stringify(db.sections));
}
writeDBToFile();
