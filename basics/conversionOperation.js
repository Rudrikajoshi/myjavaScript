//example 1
let score = 54;
let score_conversion = String(score);
console.log(score_conversion);
console.log(typeof score_conversion);

//example 2
let NaN_example = "33abc";
//console.log(typeof NaN_example)  //gives error because datatype is not defined
let NaN_example1 = Number(NaN_example);
console.log(typeof NaN_example1)
console.log( NaN_example1)

//example 3 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn);
console.log(booleanIsLoggedIn);