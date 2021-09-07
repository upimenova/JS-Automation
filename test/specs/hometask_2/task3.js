const fs = require('fs');

fs.readFile('/etc/passwd', (err, data) => { 
    if (err) throw err; 
        const objectToString = JSON.stringify();
    if (typeof data.flag !== 'boolean') {
        fs.writeFile('errors.txt', 'flag value: ' + data.flag + ' is not a boolean value', function (err) {
            if (err) throw err;
          });
    }
    if (!data.myPromises.isArray()) {
        fs.writeFile('errors.txt', 'myPromises value: ' + data.myPromises + ' is not an array', function (err) {
            if (err) throw err;
          });
    }
    if (typeof data.element !== 'object' || data.element == null) {
        fs.writeFile('errors.txt', 'element value: ' + data.element + ' is not an object', function (err) {
            if (err) throw err;
          });
    }
    console.log(data); 
  });
  