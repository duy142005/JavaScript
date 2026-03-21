/*
    setTimeout: đc sử dụng để thực hiện một hàm sau một khoảng thời gian
delay nhất định.
    cú pháp: setTimeout (function, millisecond, param 1, param 2,...)
        + function: hàm 
        + millisecond: thời gian delay đc tính bằng giây
        + param : đối số của hàm
    2. chuyển trực tiếp function vào setTimeout
    3. trường hợp có tham số hàm.
    4. khi muốn hủy quá trình thực hiện hàm
        + step 1: gắn setTimeout vào một biến để lưu giá trị.
        + step 2: sử dụng clearTimeout để hủy thực hiện hàm

*/

// ôn tập hàm
// a. Arrow
let helloArrow = () => {
  console.log("hello");
};
// gọi hàm
// helloArrow();
setTimeout(helloArrow, 3000);

// b. declaration
function xinChao() {
  console.log("hello in declaration");
}
setTimeout(xinChao, 3000);

// c. expression

let helloExpression = function () {
  console.log("hello in Expression");
};
setTimeout(helloExpression, 3000);

// 2. chuyển trực tiếp function vào setTimeout
setTimeout(function xinChao() {
  console.log("hello");
}, 3000);
// b.
setTimeout(() => {
  console.log("hello2222");
}, 3000);

// 3. trường hợp có tham số hàm.
let arrow = (yourName) => {
  console.log(hello + yourName);
};
arrow("nam");
setTimeout(arrow, 3000, "nam");

// 4. khi muốn hủy quá trình thực hiện hàm
// step 1:
let time = setTimeout(arrow, 3000, "giang");
// step 2:
clearTimeout(time);
