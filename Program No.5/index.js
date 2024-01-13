// Question No.5 "Find the sum of all positive numbers in an array."

function sumOfPositiveNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

let numberArray = [5, -6, 8, -9, 10];
let result = sumOfPositiveNumbers(numberArray);
console.log(result);
