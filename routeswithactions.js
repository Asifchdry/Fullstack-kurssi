var http = require("http");
var fs = require("fs");


// create server object
http
.createServer(function(request,response) {
    if (request.url == "/") {

        response.writeHead(200, {"Content-Type": "text/plain" });

        response.write("Nothing here to see");
    
    } 
    else if (request.url == "/frontpage") {

        response.writeHead(200, { "Content-Type": "text/html" });
        
        var html = fs.readFileSync("./frontpage.html");
        
        response.write(html);

    }
    else if (request.url == "/contact") {

        response.writeHead(200, {"Content-Type": "text/html" });

        var html = fs.readFileSync("./contact.html");

        response.write(html);

    }
    else if (request.url == "/plaintext") {
        
        response.writeHead(200, {"Content-Type": "text/plain"});

        var data = fs.readFileSync("./plaintext");

        response.write(data);
    }
    else if (request.url == "/json") {
        
        response.writeHead(200, {"Content-Type": "text/JSON"});

        var data = require("./sample.json");

        response.write(JSON.stringify(data));
    }
    
    response.end();
    
})
.listen(8081);