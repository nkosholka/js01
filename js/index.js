// alert('Hello World!');
//console.log('Hello World!');

var helloWorld = 'Hello World!';
const userName = prompt('Enter your name');
prn(helloWorld + '<br>' + userName);

// Data types
const num = 42; // Number, Infinity, NaN
const str = '<p>Some text</p>'; // String
let bool = true; // Boolean - true/false

const undef = undefined; // undefined
const n = null; // null

const obj = {}; // Object

const sym = Symbol(); // Symbol

const age = Number(prompt('Your age'));
prn('You are: ' + checkAge(age));
const nextAge = age + 1;
prn('Next year you will be: ' + nextAge);


function prn(val) {
    document.write('<br>' + val);
}

// > < >= <= !== ===
function checkAge(age) {
    if ((age >= 18) && (age <= 60)) {
        return 'Adult';
    }
    else if (age < 18) {
        return 'Child';
    }
    return 'Old';
}

Math.sqrt();

const a = Number(prompt('Input A'));
const b = Number(prompt('Input B'));
const c = Number(prompt('Input C'));

function solveQuadr(a, b, c) {
    let x1, x2;
    const d = disc(a, b, c);
    if (d > 0) {
        // two roots
        return 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if ()
}

function disc(a, b, c) {
    return ?????
}

const result = solveQuadr(a, b, c);
prn(result);