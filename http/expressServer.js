var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = '3000';

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all(function(req, res, next) {
        res.writeHead(200, {'Context-Type': 'text/plain'});
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send all the dishes to you.');
    })
    .post(function(req, res, next) {
        res.end('Will and the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Delete all dishes');
    })
;

dishRouter.route('/:dishId')
    .all(function(req, res, next) {
        res.writeHead(200, {'Context-Type': 'text/plain'});
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .put(function(req, res, next) {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Deleting dishe: ' + req.params.dishId);
    })
;

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':'+ port);
});