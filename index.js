var http = require('http');
var fs = require('fs')

http.createServer((req,res)=>{
   
    if(req.url == '/'){
        fs.readFile('./index.html', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })
    }
    if(req.url == '/about'){
        fs.readFile('./about.html', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })
    }
    if(req.url == '/contact-me'){
        fs.readFile('./contact-me.html', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })
    }else{
        fs.readFile('./404.html', (err, data)=>{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
    })
    }
    
}).listen(8000);