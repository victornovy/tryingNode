var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = '3000';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', function(req, res, next) {
    res.writeHead(200, {'Context-Type': 'text/plain'});
    next();
});

app.get('/dishes', function(req, res, next) {
    res.end('Will send all the dishes to you.');
});

app.post('/dishes', function(req, res, next) {
    res.end('Will and the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes', function(req, res, next) {
    res.end('Delete all dishes');
});

app.get('/dishes/:dishId', function(req, res, next) {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
});

app.put('/dishes/:dishId', function(req, res, next) {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', function(req, res, next) {
    res.end('Deleting dishe: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':'+ port);
});