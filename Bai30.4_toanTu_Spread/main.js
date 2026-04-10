/*
    - toán tử spread (...) : là toán tử mới đc thêm vào từ phiên bản ES6.
spread cho phép duyệt qua lần lượt các phần tử -> và qua đó ta có thể thực hiện :
    a. tạo bản sao(clone) của mảng:
    b. truyền đổi số vào hàm:
    c. kết hợp mảng ( nối mảng):
    d. tạo mảng mới vào thêm phần tử:
    e. chuyển đổi iterable (có thể duyệt qua: string,arr) thành mảng:
 */

// a. tạo bản sao của mảng:
let m1 = [1, 2, 4];
let m2 = [...m1];
console.log(m2);
// mảng m2 là clone của m1, và thay đổi giá trị của m2 ko liên quan đến m1
m2[0] = 99;
console.log("mảng m2 = " + m2);
console.log("mảng m1 = " + m1);

// b. truyền đối số vào hàm.
function sum(a, b, c) {
  return a + b + c;
}

let number = [1, 2, 3];
let total = sum(...number);
console.log(total);

// c. kết hợp mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let noi = [...arr1, ...arr2];
console.log(noi);

// d. tảo mảng mới vào thêm phần tử.
let m3 = [1, 2, 3];
let m4 = [...m3, 4];
console.log(m4);

// e. chuyển đổi iterable thành mảng
let myName = "jacky";
let chars = [...myName];
console.log(chars);
