// 8. Write a function that takes a string as input and returns the number of words in the string

function wordCount(str) {
    const words = str.trim().split(/\s+/);
    return words.length;
}

const ans = wordCount('Avs Manikanta is like to learn new things.');
console.log(ans);

// output
// ans=8