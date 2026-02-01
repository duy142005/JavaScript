// các cách khai báo hàm.
/**
 * 1) function declaration: khai báo tường mình.
 *
 * function tênFunction(parameters){
 *  // thân hàm
 *  // return something;
 * }
 *
 */

/**
 * 2) function expression: hàm gắn biến.
 *
 *  let ten_bien= function(parameters){
 *  // thân hàm
 *  // return something;
 * }
 *
 */

/**
 * 3) Arrow function: hàm mũi tên
 *
 * let ten_bien = (parameters) => {thân hàm ;}
 *  // với các biểu thức đơn giản, cú pháp sẽ ngắn hơn nhiều mà ko cần phải
 * dùng keyword return.
 */

/**
 * 4) function calling other function: hàm gọi hàm
 *
 * - là một hàm có thể gọi một hàm hoặc nhiều hàm khác để thực hiện các tác
 * vụ cụ thể. điều này giúp chia nhỏ chương trình thành các phần nhỏ, dễ quản lý
 * và tái sử dụng.
 *
 */

// ví dụ 1).
function tong(a = 0, b = 0) {
  return a + b;
}
console.log(tong(5, 3));

// ví dụ 2).
let tich = function (a, b) {
  return a * b;
};
console.log(tich(3, 5));

// ví dụ 3).
//  thân hàm ko phức tạp
let multiplyArrow = (a, b) => a * b;
// gọi hàm.
console.log(multiplyArrow(5, 4));
// thân hàm hợp phức tạp.
let multiplyArrow2 = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
console.log(multiplyArrow2(5, 5));

// ví dụ 4).
function cong(a, b) {
  return a + b;
}
function nhan(x, y) {
  return x * y;
}
// hàm gọi các hàm khác để thực hiện tính tổng và nhân.
function congNhan(num1, num2, num3) {
  let sum1 = cong(num1, num2);
  let product1 = nhan(sum1, num3);
  return product1;
}
console.log(congNhan(2, 3, 4));

// bài tập: viết chương trình nhập vào số nguyên n và in ra kết quả n!.
let n = Number(prompt("nhập vào 1 số nguyên 0 âm: "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("số không hợp lệ , vui lòng nhập lại: "));
}
// for.
function giaThuaFor(n) {
  let giaThua = 1;
  for (let i = 1; i <= n; i++) {
    giaThua *= i;
  }
  return giaThua;
}
let kq = giaThuaFor(n);
console.log(`kết quả tính giai thừa bằng for của ${n}! là: ${kq} `);
// while.
function gtWhile(n) {
  let i = 1;
  let gt = 1;
  while (i <= n) {
    gt *= i;
    i++;
  }
  return gt;
}
let kq2 = gtWhile(n);
console.log(`kết quả tính giai thừa bằng while của ${n}! là: ${kq2} `);
