/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. "this" default binds to the window, unless something else is binding to "this" because "this" can only be bound to one thing at a time.
 * 2. Implicit Binding is when "this" is used to the left of the . so you aren't specifically calling it out as bound to that thing, but by using this.(thing) it implicitly binds it.
 * 3. New Binding is when you use a constructor function and bind "this" to your properties, and while "this" is not bound to your constructor it will be bound to the new object created by the constructor.
 * 4. Explicit Binding is when you actually tell the code to bind "this" to a specific (thing) you can do that by using call, apply, or bind.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function print(param) {
    console.log(this)
}
print();

// Principle 2

// code example for Implicit Binding
const lion = {
    name: 'Lion',
    type: 'Predator',
    genus: 'Big Cat',
    eat() {
        return `${this.name}s are ${this.type}s that love to eat any other animal they can get their teeth into.`
    }
}
console.log(lion.eat());

// Principle 3

// code example for New Binding
function Person(hobby) {
    this.hobby = hobby
    this.do = function() {
        console.log(`This person likes to ${this.hobby}`)
    }
}

const cory = new Person("play video games")
cory.do();

// Principle 4

// code example for Explicit Binding
const reyna = {
    name: "Reyna"
}

const favFoods = ["Pizza", "Tamales", "Hamburgers"];

function eat(food1, food2, food3) {
    console.log(`Some of ${this.name}'s favorite foods are ${food1}, ${food2} and ${food3}`)
}

eat.apply(reyna, favFoods)