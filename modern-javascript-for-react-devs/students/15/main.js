// //
// // File: main.js
// // Date: 5/24/2022
// // 



// // const ex1 = () => {
// //     const array = [1, '2', 3, 'test', 1.2];
// //     console.log(countNumbers(array));
// //}

// //const ex2 = () => {
//     // TODO...
//   // console.log(min);
//   //}
//     const arr = [12, 55, 2, 22, 11];
//     let min = arr[0]; 
   
//   const minNumber = (arr) => {
//      for (let i = 0; i < arr.length ; i++) { 
//      if (arr[i] < min){
//          min = arr[i];
     
//      }
//         }
//         return min
//     }
//     console.log(minNumber(arr));


//  // const ex3 = () => {
//  //     // TODO...
//  // }
 
//  //
//  // Your functions here...
//  //
 
//  const countNumbers = (array) => {
//      let numberCounter = 0;
//  for (let i = 0; i < array.length ; i++) { 
//      if(typeof array[i] == 'number') numberCounter ++;
//      }
//      return numberCounter;
//  }

//  const array1 = [1, 2, 3, 4, 5]
// const array2 = ['a', 'b', 'c', 'd', 'e'];

// const interleave = (array1, array2) => {
//     if (array1.length !== array2.length) {
//       return 'ERROR: Array length mismatch';
//     }
    
//     let result = '';
//     for (let i = 0; i < array1.length; i++) {
//       result += array1[i] + array2[i];
//     }
  
//     return result;
//   }
//   console.log(interleave(array1, array2));

 

//   const palidrome =(string) =>{

//      const pal = string.length;
//     for (let i = 0; i< pal; i++) {
//     if (string[i] !== string[pal -1 -i]){
    
//         return false}

// }
//   return true  

// }

// console.log(palidrome('radar'));
// console.log(palidrome('month'));


// //ex5
// let str = "today this is a this is a this is a test.";


// console.log(str.split("this").length - 1);


// //ex6

// const array = ['this', 'is', 'a', 'test', 'happy'];

// let longestWord = array[0];
// const longestString = (array) => {

//     for (let i = 0; i < array.length; i++) {
        
//         if (array[i].length > array[0].length) 

//             longestWord = array[i]
//     }
//     return longestWord
// }
// console.log(longestString(array));
 

//  //ex7

//  let n = [1, 3, 6, 3, 6, 10];
//  n.sort(function(a,b){return a-b});
//  console.log(n)

// //ex8
// let words = "Count the words in this string";

// const checkWords = words.split(new RegExp('\\s+'))
// console.log(checkWords.length);

//ex9

let a = "this counts the number of words that end in s";

let count = 0
let countS = (a) => {
  //we are splitting the string to get an array of separeated words.
  let words = a.split(' ');

  // we are testing if the last letter of the each word is ending with s using a for loop.
 for (let i = 0; i < words.length ; i++) {
  //selecting the word
   for (let j = 0 ; j < words[i].length; j++){

   if (words[i][j] == 's')
    count += 1 
  }
}
return count
  }

console.log(countS(a))


//  const main = async () => {
//    //  ex1();
//  }
 
// main();
 