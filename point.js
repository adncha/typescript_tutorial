"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Each file can be considered as a module
// Export is visible outside this file
var Point = (function () {
    // parametre
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    // Method
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',' + 'Y: ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
