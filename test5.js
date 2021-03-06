var http = require('http');
var fs=require("fs");
var index= fs.readFileSync('html/index.html','utf-8'),
    info= fs.readFileSync('html/info.html','utf-8').replace(/\r\n/g,''),
    user= fs.readFileSync('html/user.html','utf-8').replace(/\r\n/g,'');

var _=require("lodash");

function setData(res,text,flag){
  if(flag){
    res.end(text);
  }else{
    res.write(text);
  }
}

function setComponent(text,id){
  return ['render("',id,'","',text,'")</script>'].join("");
}

http.createServer(function(req, res) {
  
  var set=_.partial(setData,res);

  res.writeHead(200, {
    'Content-Type' : 'text/html'
  });

  set(' <meta charset="UTF-8">');

  set(index);

  _.delay(set, 1000,"<script>");
  _.delay(set, 2000,setComponent(user,"user"));
  _.delay(set, 3000,"</script>");

  _.delay(set, 4000,"<script>");
  _.delay(set, 5000,setComponent(info,"info"));
  _.delay(set, 6000,"</script>",true);
  

}).listen(3001);
