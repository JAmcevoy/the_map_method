  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {
  results.push(num * 2)
}
console.log(results);

// Using map()
const multByTwo = function (num){
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplfied = nums.map(function (num){return num * 2}); //----Function has been moved in brackets to make single line
console.log(simplfied)


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2); 
//----It only takes one parameter, the number to be multiplied by two, so it doesn’t need the parentheses around num  here.                               
//----The return value is quite simple too, so it doesn’t even need the return statement,  parentheses or curly braces.  
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const stundentWithIds = students.map(student => [student.name, student.id, student.skill]); 
//---The student before the arrow is declared as the single then using the dot notation I can pull each obeject from the map
//--- Inside the '[]' make it an array
console.log(stundentWithIds);
