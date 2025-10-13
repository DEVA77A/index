//function isodd(num) {
//    return num % 2 != 0;
//}
//let num = 8;
//console.log(isodd(num));

//let arr=[4,6,8,1,0,5];
//const multiply = (x) => x * 5;
//console.log(arr.map(multiply));


// let arr1=[1,2,3,4,5,6];
// let s= arr1.reduce((acc, curr) => acc * curr, 1);
// console.log(s);

// let arrr=[1,2,3,4,5,6];
// let triple = (x) => x * 3;
// console.log(arrr.map(triple));  

// let aa=[6,8,9];
// const [one,two]=aa;
// console.log(two);

let b=[1,2,3,4,5];
const [first,...rest]=b;
console.log(rest);