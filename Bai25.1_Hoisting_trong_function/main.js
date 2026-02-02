// Hoisting trong function
/**
    1) function declaration: khai báo tường minh - có hoisting. bạn có thể
gọi hàm trước khi định nghĩa.
    2) function expression, arrow function: ko có hoisting . phải gọi hàm
sai khi đã định nghĩa.
*/

// ví dụ 1)
hoistedFunction();
function hoistedFunction() {
  console.log("hello");
}
// trình duyệt đọc.
function hoistedFunction() {
  console.log("hello");
};
hoistedFunction();

// ví dụ 2)
nonHoistedFunction(); // nhận đc thông báo ko thể truy cập vào hàm
let nonHoistedFunction=()=>{
    console.log("hello");
};

// arrowFunction(); // nhận đc thông báo ko thể truy cập vào hàm
let arrowFunction= ()=>{
    console.log("hello");
};
arrowFunction(); // hoạt động bình thường