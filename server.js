var express = require('express'),
		bodyParser = require('body-parser');

var app = express();
var port = 8899;
var messages = [];

//does the JSON parsing for us
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res){
	res.type('application/json');
	res.json(messages);
});

app.post('/', function(req, res){
	req.body.created_At = new Date();
	messages.push(req.body);
	res.json(messages);

})




app.listen(port);



















// var http = require('http');
// var port = 8080;
// var messages = [];

// var newDate = function(){
// 	return new Date();
// }

// var onRequest = function(req, res){
// 	if(req.method === 'GET'){
// 		res.writeHead(200, {
// 			'Connection': 'close', 
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		})
// 		res.end(JSON.stringify({message: messages}))
// 	};
// 	if(req.method === 'POST'){
// 		console.log("got post");
// 		var postData = '';
// 		//chunk = message from messageservice
// 		req.on('data', function(chunk){		
// 			postData += chunk;
// 			console.log(postData); 
// 			// postData += chunk.toString();
// 			// console.log(postData);
// 			// console.log(chunk);
// 		});
// 		req.on('end', function(){
// 			console.log("Got POST data:");
// 			var temp = {};
// 			temp.message = JSON.parse(postData).message;
// 			temp.username = JSON.parse(postData).username;
// 			temp.created_At = newDate();
// 			messages.push(temp);
// 				res.writeHead(200, {
// 			'Connection': 'close', 
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 			})
// 		res.end(JSON.stringify(messages))
// 		});
	
// 	}
// 	if(req.method === 'OPTIONS'){
// 		res.writeHead(200, {
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end();
// 	};
// }

// http.createServer(onRequest).listen(port);
// console.log('listening on port ' + port);