// tim hiểu Hoisting và sự khác nhau của var, let, const

/* Hoisting(nâng cao): 
    - là hành vi của JS nhằm di chuyển tất cả các khai báo lên đầu phạm 
vi hiện tại( lên đầu tập lệch hiện tại, hoặc hàm hiện tại, lên đầu block).
    1) var: được nâng cao(hoisted)- có thể sử dụng trước khi nó đc khai báo 
trong mã lệnh
    2) let, const: cũng đc nâng cao(hoisted)-tuy nhiên biến sẽ nằm trong 
vùng temporal dead zone - ko thể sử dụng biến trước khi khai báo.
    3) phạm vi sử dụng scope:
        a. var: có phạm vi là function-scope:
        -> nếu một biến đc khai báo bằng var, phạm vi của nó sẽ là phạm vi
    của hàm (function)
        -> biến sẽ đc đẩy lên đầu phạm vi function scope.
        b. let,const: có phạm vi là block scope.
    ==> var: có thể khai báo lại một biến sử dụng var mà ko gây lỗi.
    ==> let: không thể khai báo lại một biến sử dụng let trong cùng một phạm vi.
*/

// ví dụ hoisting.
console.log(" giá trị của biến c = " + c);
// khởi tạo c.
var c = 9;
// let c = 9; // báo lỗi: cannot access "c" before initialization

// cách JS hiểu.
/*
var c;
console.log(" giá trị của biến c = " + c");
// khởi tạo c
c = 9;
*/

// ví dụ phạm vi.
function exampleVar() {
  if (true) {
    var y = 20; // khởi tạo y nằm trong phạm vi block scope.
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong function scope`);
}
exampleVar();
// JS hiểu.
function exampleVar() {
  var y; // gọi đây là hoisting
  if (true) {
    y = 20; // khởi tạo y nằm trong phạm vi block scope.
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong function scope`);
}
exampleVar();

// khai báo
var diemToan;
// code chương trình.
var diemToan;
// ==> nhưng có một lỗi là cái sau đè lên cái trước, làm dữ liệu ko đúng như ban đầu. 
// let 
let diemVan;
// let diemVan; // báo lỗi. 
