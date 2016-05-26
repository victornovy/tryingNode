var events = require('events');
var eventEmitter = new events.EventEmitter();

var mainLoop = function() {
    console.log('Starting application.');
    eventEmitter.emit('ApplicationStart');

    console.log('Runnin Application.');
    eventEmitter.emit('ApplicationRun');

    console.log('Stopping application.');
    eventEmitter.emit('ApplicationStop');
};

var onApplicationStart = function() {
    console.log('Handling Application Start event.');
};

var onApplicationRun = function() {
    console.log('Handling Application Run event.');
};

var onApplicationStop = function() {
    console.log('Handling Application Stop event.');
};

eventEmitter.on('ApplicationStart', onApplicationStart);
eventEmitter.on('ApplicationRun', onApplicationRun);
eventEmitter.on('ApplicationStop', onApplicationStop);

mainLoop();