var express = require('express');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));
app.use('/', index);

var server = app.listen(3001, function(){
  var port = server.address().port;
  console.log('Server listening on port ' + port + '...');
});
