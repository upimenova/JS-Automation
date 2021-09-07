const allJsons = require('./jsons/task1.json');
const fs = require('fs');
const app = require('express')();
var json2xls = require('json2xls');

const filename = 'sample.xlsx';

app.listen(5050, () => {
  console.log("app is running on port 5050");
  convert();
})
var convert = function () {
let rawdata = fs.readFileSync('./jsons/task1.json');
let jsons = JSON.parse(rawdata, 8);
console.log(jsons);

    var xls = json2xls(jsons);
    fs.writeFileSync(filename, xls, 'binary', (err) => {
        if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}