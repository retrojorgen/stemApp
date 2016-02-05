var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});