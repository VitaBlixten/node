const http = require('node:http');
const fs = require('fs')



const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    try {
        const html = fs.readFileSync(__dirname + "/static_web/index.html");
        res.write(html);
        res.end();
    }
    catch(e) {
        res.statusCode = 404;
        res.write("Bad request");
        console.log(e);
        res.end;
    }
}); 

console.log(__dirname);

server.on('request', (request, res) => {
    res.end(request.statusCode);
  });

const port = 3000;

server.listen(port, function() {
    console.log("Servern körs, besök http://localhost:" + port);
});