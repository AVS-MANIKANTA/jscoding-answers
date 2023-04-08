//2. Write a function that takes a string as input and returns the reverse of the string

const ans = (str) => {
    let res = ""
    for (let i = str.length - 1; i >= 0; i--){
        res += str[i];
    }
    return res;
}

console.log(ans("malak ludba"))

// output
// abdul kalam