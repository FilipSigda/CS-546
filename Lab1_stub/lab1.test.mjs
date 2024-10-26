import * as lab1 from './lab1.mjs';

//TODO: Write and call each function in lab1.js 5 times each, passing in different input
// make 5 calls to questionOne passing in different inputs
console.log("Q1");
console.log(lab1.questionOne([17, 13, 1, 1, 2, 5])); //sum of both sum of prime + sum of composite = 39 function returns [37, 2, false] 
console.log(lab1.questionOne([1,2,3,4,5,6,7,8,9,10]));//should be [17,38,false]
console.log(lab1.questionOne([5, 4, 6])) // returns [5, 10, false] 
console.log(lab1.questionOne([5, 3, 6, 61, 97])) // returns [166, 6, true] 
var arr = [0]; for(let i = 1;i <= 100;i++){ arr =arr.concat([i]);}
console.log(lab1.questionOne(arr)); // returns [1060, 3990, true]

console.log("\nQ2");
console.log(lab1.questionTwo(3,5)); // returns {2 : 10}
console.log(lab1.questionTwo(11, 4)) // returns {89: 356} 
console.log(lab1.questionTwo(0, 5)); // returns {0: 0}
console.log(lab1.questionTwo(7,12)); // returns {13: 156}
console.log(lab1.questionTwo(8,10)); // returns {21: 210}

console.log("\nQ3");
console.log(lab1.questionThree("Hello, my name is Professor Hill"));                                                    //would return 6.
console.log(lab1.questionThree("I !!,123am hap2py to be. here t0oday"));            //after stripping out non-letters, you have "I am happy to be here today" and would return 7
console.log(lab1.questionThree("The quick,,, brown fox jumps over the lazy dog!"));                                      //would return 9
console.log(lab1.questionThree("Hi its a - me mario"));                                                                  //would return 5.
console.log(lab1.questionThree("When life gives you lemons, you don't make lemonade. Make life take the lemons back!")); //would return 15.

console.log("\nQ4");
console.log(lab1.questionFour([2,3,5]));        //returns 53
console.log(lab1.questionFour([14,5,7]));       //returns 1071 
console.log(lab1.questionFour([1,6,2,4,9]));    //returns 204  
console.log(lab1.questionFour([1,2,5,-6,20]));  // returns 1584
console.log(lab1.questionFour([5,7,9,2,-5]));   // returns 216