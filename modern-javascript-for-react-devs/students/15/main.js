//
// File: main.js
// Date: 5/24/2022
// 



// const ex1 = () => {
//     const array = [1, '2', 3, 'test', 1.2];
//     console.log(countNumbers(array));
//}

//const ex2 = () => {
    // TODO...

    const arr = [12, 55, 2, 22, 11];
    let min = arr[0]; 
   
    // console.log(min);
  //}
 
  const minNumber = (arr) => {
     for (let i = 0; i < arr.length ; i++) { 
     if (arr[i] < min){
         min = arr[i];
     
     }
        }
        return min
    }
    console.log(minNumber(arr));


 // const ex3 = () => {
 //     // TODO...
 // }
 
 //
 // Your functions here...
 //
 
 const countNumbers = (array) => {
     let numberCounter = 0;
 for (let i = 0; i < array.length ; i++) { 
     if(typeof array[i] == 'number') numberCounter ++;
     }
     return numberCounter;
 }

 const array1 = [1, 2, 3, 4, 5]
const array2 = ['a', 'b', 'c', 'd', 'e'];

const interleave = (array1, array2) => {
    if (array1.length !== array2.length) {
      return 'ERROR: Array length mismatch';
    }
    
    let result = '';
    for (let i = 0; i < array1.length; i++) {
      result += array1[i] + array2[i];
    }
  
    return result;
  }
  console.log(interleave(array1, array2));

 

  const palidrome =(string) =>{

     const pal = string.length;
    for (let i = 0; i< pal; i++) {
    if (string[i] !== string[string.length -1 -i]){
    
        return false}

}
  return true  

}

console.log(palidrome('radar'));
console.log(palidrome('month'));


//ex5
let str = "today this is a this is a this is a test.";


console.log(str.split("this").length - 1);


//ex6

const array = ['this', 'is', 'a', 'test', 'happy'];

let longestWord = array[0];
const longestString = (array) => {

    for (let i = 0; i < array.length; i++) {
        
        if (array[i].length > array[0].length) 

            longestWord = array[i]
    }
    return longestWord
}
console.log(longestString(array));
 

 
 // const main = async () => {
 //     ex1();
 //}
 
 
 
 // main();
 