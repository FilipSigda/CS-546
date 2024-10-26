export const questionOne = (arr) => {
  var prime_sum = 0
    var composite_sum = 0
    var equal = false
    // Implement question 1 here
    for(let i=0;i<arr.length;i++){
        if(!(typeof(arr[i]) === 'number')){
            throw new Error("questionOne recieved a value which is not a number: " + (arr[i]) + " ("+typeof(arr[i])+")")
        }
        
        if(arr[i] < 0){
            throw new Error("questionOne recieved a value which below 0: " + (arr[i]))
        }
        
        //now that we know its a number, try and get whether its even or odd
        var flag = false
        if(arr[i]===1){
          flag = true
        }
        for(let x=2;x<(arr[i]);x++){
            if(arr[i] % x == 0){
                flag = true
            }
        }
        if(flag){
            //divisible, so composite
            composite_sum += arr[i]
        }else{
            //nondivisible, so prime
            prime_sum += arr[i]
        }
        
    }
    
   return [prime_sum,composite_sum,(composite_sum + prime_sum) % 2 === 0];
};

function fibbonacci(num){
  if(num <= 1){
    return num
  }
  return fibbonacci(num-1) + fibbonacci(num-2);
}

export const questionTwo = (index, multiplier) => {
  // Implement question 2 here
  var x = fibbonacci(index);
  let obj = {}
  obj[x] = x*multiplier;
  
  return obj;
};

export const questionThree = (str) => {
  // Implement question 3 here
  str = str.trim();
  var count = 0;
  var flag = true;
  for(let i=0;i<str.length;i++){
    var x = str[i].toLowerCase();
    if((x.charCodeAt(0) < "a".charCodeAt(0) || x.charCodeAt(0) > "z".charCodeAt(0)) && x.charCodeAt(0) != " ".charCodeAt(0)){
      continue;
    }
    if(x === ' '){
      flag = true;
    }else{
      if(flag === true){
        flag = false;
        count++;
      }
    }
    //console.log(x + " : " + flag + " : " + count)
  }
  return count; //return result
};

export const questionFour = (arr) => {
  //mean of cubes of given array

  //sum of cubes
  var sum = 0
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i]) != 'number'){
      throw new Error("each element in question 4 arr must be a number:" + arr[i] );
    }
    sum += arr[i] * arr[i] * arr[i];
  }
  return Math.round(sum / arr.length); //return result
};

//DO NOT FORGET TO UPDATE THE INFORMATION BELOW OR IT WILL BE -2 POINTS PER FIELD THAT IS MISSING OR NOT CHANGED.
export const studentInfo = {
  firstName: 'Filip',
  lastName: 'Sigda',
  studentId: '20013812'
};
