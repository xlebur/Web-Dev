function hello(name) {
    let phrase = `Hello, ${name}!`;

    debugger;  // <-- the debugger stops here

    say(phrase);
}

// open console to see
for (let i = 0; i < 5; i++) {
    console.log("value,", i);
}

 // Even a single function can often be divided into logical blocks. In the example below, the initialization of variables, the main loop and returning the result are split vertically:

function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //              <--
    return result;
}

function pow(x, n) {
    if (n < 0) {
        alert("Negative 'n' not supported");
    } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }
}

function showPrimes(n) {
    nextPrime:
        for (let i = 2; i < n; i++) {

            // check if i is a prime number
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }

            alert(i);
        }
}

// here we add whiskey
for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
}

// here we add juice
for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
}

// ...

// taken from a well-known javascript library
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;


describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });

});

if (!Math.trunc) { // if no such function
                   // implement it
    Math.trunc = function(number) {
        // Math.ceil and Math.floor exist even in ancient JavaScript engines
        // they are covered later in the tutorial
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
}

