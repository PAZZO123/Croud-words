var arr=[1,2,3]
var newArr=[...arr,3,4,5,5]//to make shallow copy
var add=[4,5,6,6]
var comb=[...arr , ...add]//combine two array
console.log(Math.max(...newArr))//to iterate over array 
console.log(comb)