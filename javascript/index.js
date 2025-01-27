/*
//java script

// understanding about the concept of variables var, let,const
// also known scoping and hosting concept.  

// let x = 10;
// function testScope() {

//     console.log(x);
//     x = 20;

// }
// testScope();
// console.log(x);

// function outer() {
//     var a = 5;
//     if (true) {
//         let b = 10;
//         var c = 15;
//     }
//     console.log(a, b, c);
// }
// outer();

// {
//     var x = 10;
//     let y = 20;
// }
// console.log(x);
// console.log(y);

// console.log(a);
// var a = 5;
// console.log(b);
// let b = 10;

// console.log(myFunc());
// function myFunc() {
//     return "Hello!";
// }
// console.log(myVar);
// var myVar = "Hoisted!";

// console.log(foo);
// var foo = function() {
//     console.log("Hi!");
// };

// let x = 10;
// function testScope() {
//     console.log(x);
//     let x = 20;
// }
// testScope();

// function test() {
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }
// test();


// function x(){
//     var a =4;
//     y()

//     function y(){
//         console.log(a); 
//     }
// }
// x()


// let x = 10;
// function testScope() {
//     console.log(x);
//     let x = 20;
// }
// testScope();
// console.log(x);


*/

const arr = [...Array(100000).keys()];

console.time("for");
for (let i = 0; i < arr.length; i++) {}
console.timeEnd("for");

console.time("while");
let j = 0;
7;
while (j < arr.length) {
  j++;
}
console.timeEnd("while");

console.time("doWhile");
let k = 0;
do {
  k++;
} while (k < arr.length);
console.timeEnd("doWhile");

console.time("forEach");
array.forEach((element) => {});
console.time("forEach");
