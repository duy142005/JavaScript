// Toán tử logic.
/*
    1) && : toán tử logic AND(và) giữa 2 giá trị, trả về true khi cả 2 đều đúng.
    2) || : toán tử logic OR(hoặc) giữa 2 giá trị, trả về false khi 2 đều sai.
    3) !  : NOT- phép phủ định (đảo ngược giá trị).
*/

let i = 7;
// kiểm tra xem i >0 và i<10 không?
console.log(i > 0 && i < 10);
// kiểm tra xem i<0 hoặc i<10 không?
console.log(i < 0 || i < 10);
// phủ định
console.log(!(i > 0 && i < 10));

// bài tập 1: tính chu vi, diện tích hình tròn. viết chương trình nhập từ bàn
// phím bán kính r của đường tròn, in ra kết quả
// chu vi = 2*PI*r.
// diện tích = PI*r*r.
// a. chu vi = ?
// b. diện tích = ?
let r = parseInt(prompt("nhập bán kính đường tròn: "));
let PI = Math.PI;
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;
console.log(`Chu vi hình tròn là : ${chuVi}`);
console.log(`Diện tích hình tròn là : ${dienTich}`);

// bài tập 2: viết chương trình nhập vào 3 điểm toán, văn, anh của 1 học sinh
// tính điểm trung bình và xuất kết quả.
let toan = Number(prompt("Nhập điểm môn toán: "));
van = Number(prompt("Nhập điểm môn văn: "));
anh = Number(prompt("Nhập điểm môn anh: "));
dtb = (toan + van + anh) / 3;
// dtb = dtb.toFixed(2);  lấy 2 số đằng sau dấu phẩy.
console.log(dtb.toFixed(2));
