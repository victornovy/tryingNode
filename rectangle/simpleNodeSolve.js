var argv = require("yargs")
    .usage("Usage: node $0 -l=[num] -b=[num]")
    .demand(["l", "b"])
    .describe({b:"base"})
    .argv;

var rect = require("./simpleNodeRect");

function solveRect(b, l) {
    /*
    if (b < 0 || l < 0)
        return console.log("You can't calculate the area or perimeter with negative values");

    console.log("  =============================");
    console.log("||PERIMETER: " + rect.area(b, l));
    console.log("||     AREA: " + rect.perimeter(b, l));
    console.log("  =============================");
    */
    rect(b, l, function(error, callback) {
        if (!!error)
            return console.log(error);

        console.log("  =============================");
        console.log("||PERIMETER: " + callback.perimeter());
        console.log("||     AREA: " + callback.area());
        console.log("  =============================");
    });
}

solveRect(argv.b, argv.l);