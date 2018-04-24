var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleGoodRequest(request, response) {
  response.end('You are kind.');
}

function handleBadRequest(request, response) {
  response.end('You need to be more honest.');
}

var serverGood = http.createServer(handleGoodRequest);

var serverBad = http.createServer(handleBadRequest);

serverGood.listen(PORT1, function(){
  console.log(`Server listening on: http://localhost:${PORT1}`)
  console.log('You are kind.')
});

serverBad.listen(PORT2, function(){
  console.log(`Server listening on: http://localhost:${PORT2}`)
  console.log('You could be more honest with everything you do.')
});