var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testa');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('you are connected.');
});

var kittySchema = mongoose.Schema({
    name: String
});
//TODO pluralization -> water -> Not exists -> file: utils.js -> method: toCollectionName
kittySchema.methods.speak = function() {
    var greeting = this.name ? 'Name is ' + this.name : 'Dont have a name';
    console.log(greeting);
}

var Kitten = mongoose.model('vi', kittySchema);

var silence = new Kitten({name: 'Silence'});
console.log(silence.name);

var fluffy = new Kitten({name: 'Fluffy'});
fluffy.speak();

fluffy.save(function(err, fluffy) {
    if (err)
        return console.error(err);
    fluffy.speak();
});

Kitten.find(function(err, kittens2) {
    if (err)
        return console.error(err);
    console.log(kittens2);
});

var a = Kitten.find({name: /^victor$/i}, function(err, list) {
    console.log(list);
});