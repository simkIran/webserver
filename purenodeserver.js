const http=require('http');

function handler(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('Hello, I am a webserver!')
    res.end();
}
    const server=http.craeteServer(handler);

    server.listen(3000);