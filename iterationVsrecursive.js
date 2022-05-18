function iterativeFibonacci(n) {
  // TODO your code goes here
  const fib = [0, 1]
  for(let i = 2; i <= 20; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib[n]
}

console.log(iterativeFibonacci(20));

function recursiveFibonacci(n) {
  // TODO your code goes here
  if (n === 0 || n === 1) return n;
  return recursiveFibonacci(n-2) + recursiveFibonacci(n-1);
}