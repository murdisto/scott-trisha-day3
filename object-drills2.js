'use strict';

// https://github.com/rich-at-thinkful/ft-curric-gists/blob/master/fundamentals/objects.md

/* **********************************************
1. Object initializers and methods
********************************************** */
// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour) * 100;
//   }
// }

// console.log(loaf);
// console.log(loaf.hydration());




/* **********************************************
2. Iterating over an object's properties
********************************************** */

// const myObj = {
//   foo: 'bee',
//   bar: 'celona',
//   fum: 'fee',
//   quux: 'something',
//   spam: 'is good'
// };
//
// for (const key in myObj){
//  console.log(`key: ${key} value: ${myObj[key]}`);
// }



/* **********************************************
3. Arrays in objects
********************************************** */
// const food = {
//   meals: ['breakfast',
//   'second breakfast',
//   'elevenses',
//   'lunch',
//   'afternoon tea',
//   'dinner',
//   'supper']
// }
// console.log(food.meals[3]);





/* **********************************************
4. Arrays of objects
********************************************** */

// const pam = {
//   name: 'Pam Beesly',
//   jobTitle: 'Receptionist'
// };
//
// const jim = {
//   name: 'Jim Halpert',
//   jobTitle: 'Salesman'
// };
//
// const michael = {
//   name: 'Michael Scott',
//   jobTitle: 'Regional Manager'
// };
//
// const dunderStaff = [
//   pam, jim, michael
// ];
//
// for (let i in dunderStaff){
//   console.log(`${dunderStaff[i].name} is a ${dunderStaff[i].jobTitle}`);
// }



/* **********************************************
5. Properties that aren't there
********************************************** */
const pam = {
  name: 'Pam Beesly',
  jobTitle: 'Receptionist',
  boss: 'Michael Scott',
};

const jim = {
  name: 'Jim Halpert',
  jobTitle: 'Salesman',
  boss: 'Michael Scott',
};

const michael = {
  name: 'Michael Scott',
  jobTitle: 'Regional Manager',
};

const dunderStaff = [
  pam, jim, michael
];

for (let i in dunderStaff){
  if (dunderStaff[i].boss === undefined){
    console.log(`"${dunderStaff[i].jobTitle} ${dunderStaff[i].name} doesn't report anybody"`);
  } else {
    console.log(`"${dunderStaff[i].jobTitle} ${dunderStaff[i].name} reports to ${dunderStaff[i].boss}."`);
};


/*


/* **********************************************
6. Cracking the code
********************************************** */






/* **********************************************
7. Factory Functions with LOTR
********************************************** */





/* **********************************************
8. BONUS: A Database Search
********************************************** */







/* **********************************************
8. BONUS: A Database Search
********************************************** */
