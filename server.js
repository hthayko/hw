var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('app listening on port:', port);
});


app.get('/test/', function (req, res) {  
    res.send(`Hello World!`);
});
