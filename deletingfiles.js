const fs = require('fs');

fs.unlink('example2.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log("Delete File successfully.");
});