var fs = require("fs");


console.log("program started");
var data = fs.readFileSync("example.txt"); // täs luetaa kaks filee , eka täs
var data2 = fs.readFileSync("example2.txt"); // täs luetaa se toka
console.log(data.toString());
console.log(data2.toString()); // consoleen molemmat rivi 7-8

for (var i = 0; i < 15; i++) {
    console.log("Node just keeps on going while the file is being read");

}

console.log("program ended");