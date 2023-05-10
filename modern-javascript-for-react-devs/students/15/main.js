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
 
 // const countNumbers = (array) => {
 //     let numberCounter = 0;
 // for (let i = 0; i < array.length ; i++) { 
 //     if(typeof array[i] == 'number') numberCounter ++;
 //     }
 //     return numberCounter;
 // }

 const array1 = [1, 2]
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
 

 
 // const main = async () => {
 //     ex1();
 //}
 
 
 
 // main();
 