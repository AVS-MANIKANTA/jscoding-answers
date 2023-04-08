// 6. Write a program that takes a string as input and counts the number of vowels in the string.

const vowelsCount = (str) => {
    let vowels=['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count += 1;
        }
    }
    return count;
}

console.log(vowelsCount('TRIVENI'))

// output
// 3