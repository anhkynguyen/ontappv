// 1.Kiểm tra 1 số là số chẵn hay số lẻ
function Check(x) {
  if (x % 2 === 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẻ");
  }
}
Check(5);
// 2. Tìm số lớn nhất trong 3 số
let a = 7;
let b = 2;
let c = 5;
let max = a;
if (b > max && b > c) {
  max = b;
}
if (c > max && c > b) {
  max = c;
} else {
  max = a;
}

console.log(max);
// 3.Nhập vào 3 cạnh tam giác, cho biết loại của tam giác đó
let a1 = 4;
let b1 = 4;
let c1 = 4;
if (a1 + b1 > c1 && b1 + c1 > a1 && c1 + a1 > b1) {
  if (a1 == b1 && b1 == c1) {
    console.log(" Tam giác đều");
  } else if (a1 == b1 || b1 == c1 || c1 == a1) {
    console.log("Tam giác Cân");
  } else if (
    a1 * a1 == b1 * b1 + c1 * c1 ||
    b1 * b1 == a1 * a1 + c1 * c1 ||
    c1 * c1 == b1 * b1 + a1 * a1
  ) {
    console.log("Tam giác vuông");
  } else {
    console.log("Tam giác");
  }
} else {
  console.log("Không phải tam giác");
}
