// Các cách xuất dữ liệu với biến.
let soA = 25;
let soB = 5;

// cách 1:
console.log("căn bậc hai của " + soA + " là: " + soB);
// cách 2:
console.log("căn bậc hai của ", soA, "là: ", soB);
// cách 3:
console.log(`căn bậc hai của ${soA} là : ${soB}`);
// cách 4:
console.log(`căn bậc hai của %s là %s`, soA, soB);

// luyện tập:
let a = 4,
  b = 5,
  kq = a + b;
console.log(a + " nhân với " + b + " bằng " + kq);
console.log(a, "nhân với ", b, "bằng", kq);
console.log(`${a} nhân với ${b} bằng ${kq}`);
console.log(`%s nhân với %s bằng %s`, a, b, kq);
