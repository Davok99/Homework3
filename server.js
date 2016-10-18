const http = require('http');
const server = http.createServer(function (request, response) {
  if(request.url === "1"){
  	response.writeHead(200, {"Content-Type": "text/html"});
		response.end("My Name is David.");  }
  else if(request.url === "2"){
response.writeHead(200, {"Content-Type": "text/html"});
		response.end("I am 16.");
  }
  else if(request.url === "3"){
  	response.writeHead(200, {"Content-Type": "text/html"});
			response.end("I am Single.");
  }
  else if(request.url === "4"){
  	response.writeHead(200, {"Content-Type": "text/html"});
			response.end("I like programming");
  }
  else if(request.url === "5"){
  	response.writeHead(200, {"Content-Type": "text/html"});
			response.end("That's all");
  }
});
server.listen(8000);