// Nhập vào a, b. Tính tổng các số từ a -> b
function Tong(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(Tong(5, 10));
// Nhập vào a, b. Tính tổng các số chẵn từ a -> b
function TongChan(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(TongChan(5, 10));
// - Nhập 2 số nguyên x và y. Viết chương trình tính tổng bình phương các số từ x đến y.
function TongBinhPhuong(x, y) {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i * i;
  }
  return sum;
}
console.log(TongBinhPhuong(5, 10));
