// 3. Write a function that takes a list of integers as input and returns the largest integer in the list.

// By using predefine math.max function and spread operator
const ans = (arr) =>  Math.max(...arr);
console.log(ans([2, 54, 67, 32, 89, 67, 22, 18, 41, 199]));

// output
// ans=199


// Let's code general traditional way
// function findMax(arr) {
//     let res = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//           arr[i] > res ? res = arr[i] : res;
//     }
//     return res;
// }

// const ans = findMax([202, 45, 67, 32, 69, 78, 22, 41, 199, 8]);
// console.log(ans);

// output
// ans=202