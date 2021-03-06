var rect = {
    perimeter: function(b, l) {
        return 2*(b+l);
    },
    area: function(b, l) {
        return b*l;
    }
};

function solveRect(b, l) {
    if (b < 0 || l < 0)
        return console.log("You can't calculate the area or perimeter with negative values");

    console.log("================AREA================");
    console.log(rect.area(b, l));
    console.log("=============PERIMETER==============");
    console.log(rect.perimeter(b, l));
}

solveRect(5, 5);