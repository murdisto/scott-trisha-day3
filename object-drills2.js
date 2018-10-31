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
// const pam = {
//   name: 'Pam Beesly',
//   jobTitle: 'Receptionist',
//   boss: 'Michael Scott',
// };

// const jim = {
//   name: 'Jim Halpert',
//   jobTitle: 'Salesman',
//   boss: 'Michael Scott',
// };

// const michael = {
//   name: 'Michael Scott',
//   jobTitle: 'Regional Manager',
// };

// const dunderStaff = [
//   pam, jim, michael
// ];

// for (let i in dunderStaff){
//   if (dunderStaff[i].boss === undefined){
//     console.log(`"${dunderStaff[i].jobTitle} ${dunderStaff[i].name} doesn't report anybody"`);
//   } else {
//     console.log(`"${dunderStaff[i].jobTitle} ${dunderStaff[i].name} reports to ${dunderStaff[i].boss}."`);
//   }
// }

/*


/* **********************************************
6. Cracking the code
********************************************** */
//
// const cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5
// };
//
// // cipher[word[0]]
//
// function decode(str){
//   const wordArray = str.split(' ');
//   // let decodedArray = [];
//   wordArray.map(word => {
//     const firstLetter = word[0];
//     console.log(firstLetter);
//     const location = cipher[firstLetter] - 1;
//     console.log(location);
//
//     if (isNaN(location)) {
//       return ' ';
//     } else {
//       return word[location];
//     }
//     //console.log(location);
//     // if (word[0] === Object.keys((cipher)[0])){
//     //   decodedArray.push(word.charAt(1));
//     // } else if (word[0] === Object.keys((cipher)[1])){
//     //   decodedArray.push(word.charAt(2));
//     // } else if (word[0] === Object.keys((cipher)[2])){
//     //   decodedArray.push(word.charAt(3));
//     // } else if (word[0] === Object.keys((cipher)[3])){
//     //   decodedArray.push(word.charAt(4));
//     // }  else {
//     //   decodedArray.push(' ');
//     // }
//   })
//     .join('');
//
// }
//
// console.log(decode('craft block argon meter bells brown croon droop'));
//
//
//

/* **********************************************
7. Factory Functions with LOTR
********************************************** */
function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`;
    },
    evaluateFight: function(character) {
      let x = 0;
      let y = 0;

      if (this.attack > character.defense){
        x = this.attack - character.defense;
      }
      if (this.defense < character.attack){
        y = character.attack - this.defense;
      }
      return `${character.name} takes ${x} damage and ${this.name} receives ${y} damage"`;
    }
  }
};

const character = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 6, 7)
];

// retrive nickname of aragorn from characters, then call describe method
const aragorn = character.find(function(i){
  return i.nickname === 'aragorn';});

console.log(aragorn.describe());

const allHobbits = character.filter(function(i){
  return i.race === 'Hobbit';
});

console.log(allHobbits);

const aboveFive = character.filter(function(i){
  return i.attack > 5;
});

console.log(aboveFive);
// console.log(gandalf.evaluateFight(legolas));

/* **********************************************
8. BONUS: A Database Search
********************************************** */







/* **********************************************
8. BONUS: A Database Search
********************************************** */
