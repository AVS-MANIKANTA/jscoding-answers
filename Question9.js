// 9. Write a program that takes a list of strings as input and
// returns a new list with only the strings that contain the letter 'a'.

const ans = (arr) => {
    return arr.filter(e => e.includes('a'));
}

console.log(ans(['avs', 'sai', 'durga', 'pravallika', 'triveni', 'ramesh']));

// output
// ['avs', 'sai', 'durga', 'pravallika', 'ramesh']