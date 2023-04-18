//1. Nhập vào a, b. In ra các số lẻ từ a -> b
function inSoLe(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

inSoLe(1, 10);
//2. "Nhập vào a, b. In từ a đến b:
// - chia hết cho 3 in 'Fizz'
// - chia hết cho 5 in 'Buzz'
// - chia hết cho 3 và 5 in 'FizzBuzz'"
function printFizzBuzz(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

printFizzBuzz(1, 10);
//3. Nhập và a, b. In ra các số chính phương từ a đến b

function InSoChinhPhuong(num) {
  return Math.sqrt(num) % 1 === 0;
}
let a = 1;
let b = 100;
for (let i = a; i <= b; i++) {
  if (InSoChinhPhuong(i)) {
    console.log(i);
  }
}
