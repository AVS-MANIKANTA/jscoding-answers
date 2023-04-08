//4. Write a program that prints the first 10 Fibonacci numbers

let a = 0;
let b = 1;

function printFibonacci(n) {
    for (let i = 0; i <n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }    

}
printFibonacci(10);

// output
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34