var http = require('http');
var fs=require("fs");
var text= fs.readFileSync('html/aq.txt','utf-8');
var _=require("lodash");


function setData(res,text,flag){
  if(flag){
    res.end(text);
  }else{
    res.write(text);
  }
}


 http.createServer(function(req, res) {
    
    var set=_.partial(setData,res);

  
    res.writeHead(200, {
      'Content-Type' : 'text/html',
      'Content-Length':text.length
    });

    set(' <meta charset="UTF-8">');

    var texts=text.split('\r');
    
    _.each(texts,function(data,i){
        _.delay(set, 800*i,"<p>"+data+"</p>");
    })

}).listen(3001);

http.createServer(function(req, res) {
    
    var set=_.partial(setData,res);

  
    res.writeHead(200, {
      'Content-Type' : 'text/html',
      // 'Transfer-Encoding' : 'chunked'
    });

    set(' <meta charset="UTF-8">');

    var texts=text.split('\r');

    _.each(texts,function(data,i){
        _.delay(set, 800*i,"<p>"+data+"</p>");
    })
    
     _.delay(set, 800*texts.length,"over",true);

}).listen(3002);