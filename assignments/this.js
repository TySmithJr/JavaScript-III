/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding, when using "this" in the global scope 
     the value will be the console object.
* 2. Implicit Binding, when a funtion or method is called with 
     a dot the object left of the dot will esentially get "this"
* 3. New Binding, the (new)object that is created and returned will 
     represent "this"

* 4. Explicit Binding, "this" is defined when ever whenever
JS's call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    function success(suctivebje) {
        console.log(this);
        return subjective;
    }
     success("wealth");

// Principle 2

// code example for Implicit Binding
    const obj = {
        greeting: "Hi",
        sayHi: function(name) {
            console.log(`${this.greetin} my name is Ty`);
            console.log(this);
        }
    }
    obj.sayHi("Ty")
// Principle 3

// code example for New Binding
function happyPerson(greeter) {
    this.greeting = "hi ";
    this.greeter = greeter;
    this.talk = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const Ty = new happyPerson("Tyrone");
const Tyrone = new happyPerson("Ty");

Ty.talk();
Tyrone.talk();
// Principle 4

// code example for Explicit Binding
function happyPerson(greeter) {
    this.greeting = "hi ";
    this.greeter = greeter;
    this.talk = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const Ty = new happyPerson("Tyrone");
const Tyrone = new happyPerson("Ty");

Ty.talk.call(Tyrone);
Tyrone.talk.apply(Ty);


Ty.talk();
Tyrone.talk();