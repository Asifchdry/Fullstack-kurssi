var fs = require("fs");

var content = 'gulugulugulu';

fs.writeFile('example2.txt', content, err => {
    if (err) {
        console.log(err);
    }
});