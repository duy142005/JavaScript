// toán tử 3 ngôi:
/* cú pháp:
    biến = biểu thức 1 ? biểu thức 2: biểu thức 3.
     + kiểm tra điều kiện, nếu đúng thì thực hiện biểu thức 2,
    ngược lại thì thực hiện biểu thức 3.




*/

// ví dụ
let number = 10;
let message = number > 0 ? "số dương" : "số âm";
console.log(message);

let number2 = 11;
let message2 = number2 % 2 === 0 ? "số chẵn" : "số lẻ";
console.log(message2);

// bài tập.
let dtb = Number(prompt("Nhập điểm trung bình: "));
let kq =
  dtb >= 8 ? "giỏi" : dtb >= 6.5 ? "khá" : dtb >= 5 ? "trung bình" : "yếu";
console.log(kq);
