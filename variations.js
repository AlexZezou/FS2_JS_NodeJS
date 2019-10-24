// this will show course variations 1, 2, 3, and 4 //
const http = ('require http');

const servre = http.createServer((req,res) =>{
if (req.url === '/'){
    res.write('Hello World');
    res.end();
}

if (req.url === '/api/courses') {
    res.write (JSON.stringify([1,2,3,4]))
    res.end();
}
});

servre.listen(3000);

console.log('listening on port 3000...'):
