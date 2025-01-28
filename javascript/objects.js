/*

=> Object : it is for stroing more data.

 objects are changes to way
   = mutable 
   = immutable

let firstName = "Prince";

let lastName = "Patel";

const obj = {
    firstName,
    lastName,
    fullName() {
       return `Mr. ${this.firstName} ${this.lastName}`
    }
}
// console.log(obj);

// console.log(obj.fullName());

const newObj = {...obj, age:22, firstName:"pppp"}

console.log(newObj);
console.log(obj);


=> immutably change the data

const users = [
    {
        name : 'prince',
        age: 22,
        gender:'male'
    },
    {
        name : 'sam',
        age : 24,
        gender : 'female'
    },
    {
        name : "pritvi",
        age : 20,
        gender:'unkonwn'
    }
]

const index = 2;

const final = [
    ...users.slice(0, index),
    {...users[2],gender:"female"},
    ...users.slice(index + 1),
];

console.log(final); //[
  { name: 'prince', age: 22, gender: 'male' },
  { name: 'sam', age: 24, gender: 'female' },
  { name: 'pritvi', age: 20, gender: 'female' }
]

console.log(users);     //[ { name: 'prince', age: 22, gender: 'male' }, { name: 'sam', age: 24, gender: 'female' },{name: 'pritvi', age: 20, gender: 'unkonwn' } ]



const users = [
    {
        name : 'prince',
        age: 22,
        gender:'male'
    },
    {
        name : 'sam',
        age : 24,
        gender : 'female'
    },
    {
        name : "pritvi",
        age : 20,
        gender:'unkonwn'
    }
]

const newUser = [
    {
        name : 'alia',
        age : 28,
        gender : 'female'
    },
    {
        name : 'rohan',
        age : 29,
        gender : "male"
    }
]

const allUser = users.concat(newUser)

const fullarr = [...users, ...newUser]

console.log(fullarr);

console.log(allUser);


const index = 2;

const final = [
    ...users.slice(0, index),
    {...users[2],gender:"female"},
    ...users.slice(index + 1),
];

console.log(final);

console.log(users);

const newarr = users.flat();

console.log(newarr);


















*/
