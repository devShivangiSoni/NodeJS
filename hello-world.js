console.log("hello world");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let prime = [];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % 2 === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    prime.push(num);
  }
}
console.log(prime);
