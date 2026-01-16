// kiểu dữ liệu:
/*
    - string: kiểu chuỗi. ("xin chào")
    - number: kiểu số. (10; 3.14)
    - boolean: kiểu lý luận chỉ có true và false.
    - undefined: biến chưa được gán giá trị. 
    - null: biến được gán giá trị là null, thường dùng để reset biến,
gán gia trị mặc định.
*/

// 1. kiểu number:
let soNguyen = 10;
let soThuc = 3.14;
// xuát giá trị của biến.
console.log(soNguyen);
console.log(soThuc);
// kiểm tra kiểu dữ liệu.
console.log(typeof soNguyen);

// 2. kiểu boolean:
let check = true;
console.log(typeof check);

// 3. kiểu undefined (có khai báo nhưng mà chưa gán giá trị):
let diemToan;
console.log(diemToan);

// 4. kiểu null:
let connect = null;
console.log(typeof connect);

// Số nguyên an toàn tối đa/ tối thiểu.
console.log("số nguyên an toàn tối đa: " + Number.MAX_SAFE_INTEGER);
console.log("số nguyên an toàn tối đa: " + Number.MIN_SAFE_INTEGER);
 