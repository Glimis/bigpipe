var http = require('http');
var fs=require("fs");
var text= fs.readFileSync('html/aq.txt','utf-8');
var _=require("lodash");


http.createServer(function(req, res) {
    
    res.writeHead(200, {
      'Content-Type' : 'text/html',
      'Content-Length':3
    });
    res.write("1");
    res.end("");

}).listen(3001);

http.createServer(function(req, res) {
    
    res.writeHead(200, {
      'Content-Type' : 'text/html',
      //默认chunked
      // 'Transfer-Encoding' : 'chunked'
    });
    res.write("123456789");

}).listen(3002);