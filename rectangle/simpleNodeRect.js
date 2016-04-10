exports.perimeter = function(b, l) {
    return 2*(b+l);
}

exports.area = function(b, l) {
    return b*l;
}

module.exports = function(b, l, callback) {
    try {
        if (b < 0 || l < 0)
            throw new Error("You can't calculate the area or perimeter with negative values");

        callback(null, {
            perimeter: function() {
                return 2*(b+l);
            },
            area: function() {
                return b*l;
            }
        });
    } catch(error) {
        return callback(error, null)
    }
}