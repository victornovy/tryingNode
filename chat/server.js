var express = require('express'),
    app = express();
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    catchPhrases = [
        'Why I oughta...', 'Nyuk Nyuk Nyuk!', 'Poifect!',
        'Spread out!', 'Say a few syllables!', 'Soitenly!'
    ];

app.set('view engine', 'jade');
app.set('view options', {layout: true});
app.set('views', __dirname + '/views');

app.get('/stooges/chat', function(req, res, next) {
    res.send('chat');
});

io.sockets.on('connection', function(socket) {
    var sendChat = function(title, text) {
        socket.emit('chat', {
            title: title,
            contents: text
        });
    };

    setInterval(function() {
        var randomIndex = Math.floor(Math.random()*catchPhrases.length);
        sendChat('Stooges', catchPhrases[randomIndex]);
    }, 5000);

    sendChat('Welcome to Stooge Chat', 'The Stooges are on the line');
    socket.on('chat', function(data) {
        sendChat('You', data.text);
    });
});

app.get('/?', function(req, res) {
    res.render('chat');
});

var port = 3000;
server.listen(port);
console.log('Listening on port ' + port);