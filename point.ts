
//Each file can be considered as a module
// Export is visible outside this file
export class Point {
    // parametre

    constructor(private _x?: number, private _y?: number) {
        this._x = _x;
        this._y = _y;
    }

    // Method
    draw() {
        console.log('X: ' + this.x + ',' + 'Y: ' + this._y);
    }

    getDistance(another: Point) {
        // ...
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0');
        this._x = value;
    }

}
