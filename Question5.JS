//5. Write a program that takes a list of integers as input and
// returns a new list with only the even numbers from the original list.

function evenList(arr) {
  return  arr.filter(e => e%2==0)
}

const ans = evenList([1, 2, 3, 4, 5, 6, 7, 8,9,10]);
console.log(ans)
     
// output
// ans=[2,4,6,8,10]