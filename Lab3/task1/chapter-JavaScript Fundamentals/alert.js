/* An example with two messages.
This is a multiline comment.
*/
alert('Hello')
alert('World')

alert(3 +
    1
    + 2);

alert("Hello");

[1, 2].forEach(alert);

let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!

let user = 'John', age1 = 25;

let n = 123;
n = 12.345;

alert( 1 / 0 );

alert( "not a number" / 2 ); // NaN, such division is erroneous

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

let age = null;

alert(age1); // shows "undefined"

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number


let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values


alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings


let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

let counter = 0;
alert( ++counter ); // 1

let counter = 1;
alert( 2 * ++counter ); // 4



let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}


let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );

if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' ); // it is the weekend
}

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area = height ?? (100 * width) ?? 50;

let x = (1 && 2) ?? 3; // Works

alert(x); // 2

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}

let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Sum: ' + sum );

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}


let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
    case 4:
        alert( 'Exactly!' );
    case 5:
        alert( 'Too big' );
    default:
        alert( "I don't know such values" );
}

let a = 3;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?");
switch (arg) {
    case '0':
    case '1':
        alert( 'One or zero' );
        break;

    case '2':
        alert( 'Two' );
        break;

    case 3:
        alert( 'Never executes!' );
        break;
    default:
        alert( 'An unknown value' );
}

switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}

function showMessage() {
    alert( 'Hello everyone!' );
}

showMessage();
showMessage();

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function


function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}

function sayHi() {   // (1) create
    alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);


let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        alert("Greetings!");
    }

}

// ...use it later
welcome(); // Error: welcome is not defined



function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
    // ...
    return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;