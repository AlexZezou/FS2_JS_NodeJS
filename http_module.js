
//HTTP Module//

const http = require('http');   
const server = http.createServer();

server.on('connection',(socket)=> {
    console.log('Hello Server');
});

http.createServer();
Server.listen(3000);

console.log('lestining on port 3000...');