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









*/
