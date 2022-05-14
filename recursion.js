// Iteration loop function

function iteration (numbers) {
  let total = 0;
  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total;
}


// Recursive function

function sum (numbers) {
  if (numbers.length === 1) return numbers[0];
  return numbers[0] + sum(numbers.slice(1))
}

sum([0,1,2,3,4]) // 10