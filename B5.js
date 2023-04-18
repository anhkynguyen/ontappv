// Nhập vào n. Tính S = 1.2 + 2.3 + 3.4 + ... + n(n+1)
let n = 9;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i * (i + 1);
}

console.log(sum);
// Nhập vào n. Tính S = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2;
let n2 = 5;
let sum2 = 0;
for (let i = 0; i <= n; i++) {
  let x = (2 * i + 1) / (2 * i + 2);
  sum2 += x;
}
console.log(sum2);
// Nhập vào n. Tính  S = 100 +1/3 + 1/2 + 3/5 + … + n*(n + 1)/ (n+1)*(n + 2);
let n3 = 5;
let sum3 = 100;

for (let i = 1; i <= n; i++) {
  let fraction = (i * (i + 1)) / ((i + 1) * (i + 2));
}

console.log(sum3);
