/*

=> Array : it is same as object. collection of data.

=> array mathods :
        
Array length  :  for find array length         
Array toString() : for convert to string(without couma"" )
Array at()  : to find exect array
Array join() : join somthing between arrays
Array pop() : change,update,delete data.   using principal of lilo
Array push() : change,update,delete data.  "
Array shift() :  "         "               using pricipal of fifo
Array unshift() :  "       "                "       "
Array delete() :  delete data 
Array concat() : add two array name.concat(name)
Array copyWithin() : 
Array flat()
Array splice()
Array toSpliced()
Array slice()





=> immutably change specific data with using slice(). 

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


// sortig data 

const users = [
  {
    name: "Alice Johnson",
    age: 28,
    gender: "Female",
    profession: "Software Engineer",
  },
  { name: "Bob Smith", age: 35, gender: "Male", profession: "Data Scientist" },
  {
    name: "Charlie Davis",
    age: 22,
    gender: "Male",
    profession: "Graphic Designer",
  },
  {
    name: "Diana Martinez",
    age: 30,
    gender: "Female",
    profession: "Marketing Manager",
  },
  {
    name: "Ethan Brown",
    age: 40,
    gender: "Male",
    profession: "Cybersecurity Analyst",
  },
  { name: "Fiona Clark", age: 27, gender: "Female", profession: "UX Designer" },
  {
    name: "George Wilson",
    age: 50,
    gender: "Male",
    profession: "Project Manager",
  },
  {
    name: "Hannah White",
    age: 29,
    gender: "Female",
    profession: "Financial Analyst",
  },
  {
    name: "Isaac Lewis",
    age: 33,
    gender: "Male",
    profession: "DevOps Engineer",
  },
  {
    name: "Julia Scott",
    age: 24,
    gender: "Female",
    profession: "Content Writer",
  },
];

// console.log(users);

=> // for sorting data in number asending order 

const ageSort = users.sort((a, b) => a.age - b.age);
console.log(ageSort);

=> // for sorting data in assending order 

const ageSortAssending = users.sort((a, b) => b.age - a.age);
console.log(ageSortAssending);

=> // for name sorting 

const nameSort = users.sort ((a,b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    if (aName > bName) {
        return -1
    } 
    
    if (aName < bName) {
        return 1;
    }
    return 0

})

---------------


console.log(nameSort);

console.log(obj["male"]);

obj.male = [],

console.log(obj["male"]);


const res = users.reduce((p, c) => {
    const key = c.gender;
    if(p[key] === undefined){
        p[key] = [];
    }
    p[key].push(c);
    return p;

}, {})

console.log(res);

---------------------------------------------------------

=> updating formate :

const users = [
  {
    firstname: "Alice",
    lastname: "Johnson",
    companyname: "TechCorp",
    salary: 85000,
    role: "Software Engineer",
  },
  {
    firstname: "Bob",
    lastname: "Smith",
    companyname: "DataWorks",
    salary: 92000,
    role: "Data Scientist",
  },
  {
    firstname: "Charlie",
    lastname: "Davis",
    companyname: "DesignStudio",
    salary: 70000,
    role: "Graphic Designer",
  },
  {
    firstname: "Diana",
    lastname: "Martinez",
    companyname: "MarketMinds",
    salary: 95000,
    role: "Marketing Manager",
  },
  {
    firstname: "Ethan",
    lastname: "Brown",
    companyname: "CyberSec Solutions",
    salary: 105000,
    role: "Cybersecurity Analyst",
  },
  {
    firstname: "Fiona",
    lastname: "Clark",
    companyname: "UX Innovations",
    salary: 78000,
    role: "UX Designer",
  },
  {
    firstname: "George",
    lastname: "Wilson",
    companyname: "PM Global",
    salary: 110000,
    role: "Project Manager",
  },
  {
    firstname: "Hannah",
    lastname: "White",
    companyname: "Finance Experts",
    salary: 88000,
    role: "Financial Analyst",
  },
  {
    firstname: "Isaac",
    lastname: "Lewis",
    companyname: "Cloud Solutions",
    salary: 102000,
    role: "DevOps Engineer",
  },
  {
    firstname: "Julia",
    lastname: "Scott",
    companyname: "Content Creators",
    salary: 68000,
    role: "Content Writer",
  },
];

// console.log(users);

const newUsers = users.map(
  ({ companyname, salary, role, firstname, lastname }) => {
    return {
      name: {
        firstname,
        lastname,
      },companyData : {
        companyname,
        role,
        salary
      }
    };
  }
);

console.log(newUsers);








*/
