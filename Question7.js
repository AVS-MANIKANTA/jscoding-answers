// 7. Write a program that takes a list of integers as input and returns a new list with each integer squared.

const ans = (arr) => {
    return arr.map(e => e * e);
}
console.log(ans([1, 4, 8, 12, 13, 15]));

// output
// [1,16,64,144,169,225]