// toán tử gán :
/*
    1) = : gán bằng (x = 1 => x = 1).
    2) += : gán cộng ( x += y => x = x+y).
    3) -= : gán trừ ( x -= y => x = x-y).
    4) *= : gán nhân (x *= y => x = x*y).
    5) /= : gán chia (x /= y => x = x/y).
    6) %= : gán chia lấy dư (x %= y => x = x%y).
*/

// toán tử gán bằng.
let x = 10;
let y = 5;
console.log(x);
console.log(y);

// toán tử gán cộng.
let m = 10;
m += 5;
console.log(m);

// toán từ gán trừ.
let n = 10;
n -= 5;
console.log(n);

// toán tử gán nhân.
let a = 10;
a *= 5;
console.log(a);

// toán từ gán chia.
let b = 10;
b /= 5;
console.log(b);

// toán tử gán chia lấy dư.
let c = 10;
c %= 5;
console.log(c);

// bài tập vẫn dụng: rút gọn biểu thức e=e-(f+1) và tính e=5;f=2.
// e=e-(f+1) => e -= f+1.
let e =5;
let f =2;
    e -= f+1;
console.log(e);
