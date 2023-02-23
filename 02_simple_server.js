var http = require("http");


// create server object
http
.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type": "text/plain" });
    response.write("Hello World\n");
    response.write("<h1>terve vaa</h1>");
    response.end("This is the  eeeend!");
})
.listen(8081); // the server object listen on port 8081
// terminal node ja copy relative path täst filest ni servu päällä
// ctrl + c ni voi sulkee servun siks aikaa kun päivittää yms sit uudelleen terminalist server päälle