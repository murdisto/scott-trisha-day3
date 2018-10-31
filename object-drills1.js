'use strict';

// https://courses.thinkful.com/web-dev-001v1/project/2.6.2
//
// /* **********************************************
// Object creator
// ********************************************** */
// const creatMyObject = () =>{
//   return {
//   foo: 'bar',
//   answerToUniverse: 42,
//   "olly olly": 'oxen free',
//   sayHello: () => "hello",
//  };
// };
// console.log(creatMyObject());
//
//
// /* **********************************************
// Object updater
// ********************************************** */
//
// const myObj = {
//   item1: 'Fruit',
//   item2: 'Cantaloupe'
// };
//
// function updateObject(obj){
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }
//
// console.log(updateObject(myObj));


/* **********************************************
Self-reference
********************************************** */
function personMaker(firstName, lastName) {
  const person = {
    firstName,
    lastName,
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  return person;
}
let person = personMaker("Paul", "Jones");
console.log(person.fullName());







/* **********************************************
Deleting keys
********************************************** */




// If finished early:
// https://courses.thinkful.com/web-dev-001v1/project/2.6.5

/* **********************************************
Make student reports
********************************************** */


/* **********************************************
Enroll in summer school
********************************************** */



/* **********************************************
Find by id
********************************************** */



/* **********************************************
Validate object keys
********************************************** */
