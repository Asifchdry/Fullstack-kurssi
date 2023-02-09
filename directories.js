var fs = require("fs");
var path = require('path');

getCurrentFileNames();

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Directory created succesfully!')
});

fs.rmdir('directory_one', () => {
    console.log("folder deleted!");

    getCurrentFileNames();
});

function getCurrentFileNames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
    console.log("\n");
}
