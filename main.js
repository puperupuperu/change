var port = process.env.PORT || 3000;
var DATAFILE ='log.json';
var masterDATAFILE='guaimao.json'
var http = require('http'),
    url =require('url'),
    path = require('path'),
    fs = require('fs');

var logs = [];
if (fs.existsSync(DATAFILE)) {
  logs = JSON.parse(fs.readFileSync(DATAFILE));
}
var masterlogs = [];
if (fs.existsSync(masterDATAFILE)) {
  masterlogs = JSON.parse(fs.readFileSync(masterDATAFILE));
}
http.createServer(function(request,response){
  if (request.url === "/"){
      request.url = "/index2.html";
  }
  var x = url.parse(request.url, true);
  if (x.pathname === "/api") { 
      procAPI(x, response, request);
  }
  var fullpath = path.resolve(__dirname, "." + x.pathname);
  if (fs.existsSync(fullpath)) {
    var ext = path.extname(fullpath).toLowerCase();
    if (ext.match(/\.(png|jpg|jpeg|gif|html|css|js|mp3|json)$/) && x.pathname != '/main.js') {
      response.writeHead(200, {'Content-type':'text/html'});
      var strm = fs.createReadStream(fullpath);
      strm.pipe(response);
    } else{
       response.writeHead(404, {'Content-type':'text/plain'});
       response.end('404 not found');
    }
  } else{
       response.writeHead(404, {'Content-type':'text/plain'});
       response.end('404 not found');
    }
})
.listen(port);
console.log('start server');
console.log('http://localhost:8080');
function procAPI(x, response, request) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  var q = x.query;
  if (q.mode === "sendMsg") {
    function iptest(){
        return request.headers['x-forwarded-for']
    ? request.headers['x-forwarded-for']
    : (request.connection && request.connection.remoteAddress)
    ? request.connection.remoteAddress
    : (request.connection.socket && request.connection.socket.remoteAddress)
    ? request.connection.socket.remoteAddress
    : (request.socket && request.socket.remoteAddress)
    ? request.socket.remoteAddress
: '0.0.0.0';
    }
    var ipall = request.connection.remoteAddress;
    //var ip4= ipall.substring(7);
    var ip4= iptest();
    logs.unshift([q.name, q.msg, q.time]);
    fs.writeFile(DATAFILE, JSON.stringify(logs),
      function(err) {
        if(err) { console.log(err); }
      });
    masterlogs.unshift([q.name, q.msg, q.time,ip4]);
    fs.writeFile(masterDATAFILE, JSON.stringify(masterlogs),
      function(err) {
        if(err) { console.log(err); }
      });
    response.write("{'result':'ok'}");
  }  else if (q.mode === "show") {
    var o = {};
    o.result = "ok";
    o.items = logs;
    response.write(JSON.stringify(o));
    }
  response.end();
}
