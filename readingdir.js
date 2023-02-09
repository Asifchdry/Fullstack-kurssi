const testFolder = './newdata';
var fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});