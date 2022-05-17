function iterativeFibonacci(n) {
  // TODO your code goes here
  if(n === 0 || n === 1) return n;
  let num = 0;
  for(let i = 0; i < n; i++) {
    num = (n-1) + (n-2)
    console.log(n - 1)
  }
  return num
}

console.log(iterativeFibonacci(6));