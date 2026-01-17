// Ép kiểu dữ liệu.

// xuất thông báo cho người dùng nhập vào số a.
let numberA = prompt("nhập số a: ");
console.log(numberA);
// kiểm tra thử kiểu loại.
console.log(typeof numberA);

// thực hiện tính toán (nếu chưa ép kiểu).
let numberB = 5;
console.log(typeof numberB);
// cộng A với B.
let kq = numberA + numberB;
console.log(`kết quả A+B = ${kq} `);
console.log(typeof kq);

/*
 - mặc định dữ liệu nhập vào sử dụng hàm prompt() có kiểu string.
 - đôi khi ta cần thực hiện tính toán với dữ liệu nhập vào bàn phím của người dùng.
 => cần ép kiểu trước khi thực hiện phép toán

 (*) tại sao phải ép kiểu:
 - trong JS khi nhập dữ liệu từ bàn phím bằng hàm prompt(), mặc định là kiểu string.
    1. đối với phép cộng -> JS sẽ hiểu là cộng chuỗi.
    2. các phép tính khác -> JS sẽ cố gắng chuyển đổi thành kiểu số trước khi thực hiện tính toán.
        -> nếu ko chuyển được sang số để tính toán, kết quả sẽ là NaN-not a number.
*/

// các phép tính khác:
console.log(`A - B = %s`, numberA - numberB);
console.log(`A * B = %s`, numberA * numberB);
console.log(`A / B = %s`, numberA / numberB);
console.log(`A % B = %s`, numberA % numberB);

// Ép kiểu dữ liệu nhập vào dùng prompt():
// xuất thông báo cho người dùng nhập vào số C:
let numberC = parseInt(prompt("nhap vao so C: "));
console.log(numberC);
console.log(typeof numberC);

// hoặc đơn giảm dùng hàm Number() để ép --> kiểu dữ liệu number.
let numberD = Number(prompt("nhap vao so D: "));
console.log(numberD);
console.log(typeof numberD); 