// 10. Write a function that takes a list of integers as input and returns the average of the integers

function findAverage(arr) {
    let average;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    average = Math.round(sum / arr.length);
    return average;
}

const ans = findAverage([2, 7, 8]);
console.log(ans);

// output
// ans=6