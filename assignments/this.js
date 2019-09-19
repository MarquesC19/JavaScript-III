/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding-- 

* 2. implicit Binding-- is when dot notation is used to invoke a function.

* 3.New Binding--is used to allow us to create an object from a constructor function.

* 4.Explicit Binding -- are when .call, .apply, .bind is used on an function. 
*
* write out a code example of each explanation above
*/

// Principle 1
function weak(){
console.log(this.beverage)
}
const beverage= "orange juice";
// code example for Window Binding

// Principle 2
let person = {
name:'Marques',
lastName:'Carter',
fullName:function(){
    return `${this.name} ${this.lastName}`;
}
};
// code example for Implicit Binding

// Principle 3
const person = new Person('param');
function Person(eyeColor){
this.eyeColor=function() {
console.log(`the color of my eyes is${eyeColor}`);
}
}
// code example for New Binding

// Principle 4

// code example for Explicit Binding