// Hàm hiển thị hộp thoại lên trình duyệt cho người dùng.
// alert("xin chao");

/* Hàm prompt : được sử dụng để hiển thị hộp thoại nhập liệu trình duyệt
và chở người dùng nhập một giá trị.
    - dữ liệu nhập vào sẽ mất đi và không được lưu trữ vào bộ nhớ.
*/
// prompt("moi nhap vao ten cua ban: ");

// 3 từ khóa để khai báo biến: var , let và const.
/*
    - var: từ khóa khai báo biến trước ES6.
    - let: từ khóa báo biến được giới từ ES6.
    - const: là khai báo hằng số(biến không thể thay đổi giá trị sau khi đã gán)
*/
// Quy tắc đặt tên biến:
/*
    - tên bắt đầu bằng chữ cái, dấu gạch dưới _ hoặc dấu $.
    - JS phân biệt chữ hoa chữ thường.
    - không trùng với các từ khóa trong JS.
    - tuân theo quy ước kiểu camelCase(lặc đà) là viết (chứ cái thứ 2 Hoa, còn lại thường).
*/

//khai báo biến:
var myName;
let yourName;

// khởi tạo biến:
var diemToan = 10;
const doSoi = 100;
let firstName = "alice";

// xuất giá trị của biến:
console.log(diemToan);
console.log("Độ sôi của bạn là " + doSoi);

// thử gán lại biến cho hằng số.
// doSoi = 50;
// console.log(doSoi);

// bài tập:
// var uerName;
let userName = prompt("mời cụ nhập tên: ");
console.log(userName);
