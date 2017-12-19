// Class - check point.ts

import {Point} from "./point";

let point = new Point(12, 22);
let x = point.x;
point.x = 2;
point.draw();


//  FUNCTIONS double arrow
/*let log = function (message) {
    console.log(message)
}

let doLog = (message) => {
    console.log(message);
}*/

// Interface
// Purely for declaration
/*interface Point {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint = (point: Point) => {
    console.log(point);
}

let getDistance = (pointA: Point, pointB) => {
    console.log(pointA.x - pointB.x);
    console.log(pointA.y - pointB.y);
}

drawPoint({x: 1, y: 2});*/


//----
// Variable casting

/*let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

console.log(endsWithC);*/

// ---------
// ENUM
/*let count: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
count = 1;

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};

let backgroundColor = Color.Blue;*/


// Let is define to the nearest block and not function
// Always use the let keyword and allow us to know
/*function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('finally ' + i);
}

doSomething();*/

/*function log(message) {
    console.log(message);
}

var message = 'Hello world';
log(message);*/
