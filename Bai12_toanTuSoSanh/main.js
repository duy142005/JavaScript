// các phép so sánh:
/*
    1) != : khác nhau.
    2) > : lớn hơn.
    3) < : nhỏ hơn.
    4) >= : lớn hơn hoặc bằng.
    5) <= : bé hơn hoặc bằng.
    6) == : bằng nhau, Ko quan tâm kiểu dữ liệu.
    7) === : bằng nhau, So sánh giá trị và kiểu dữ liệu.
*/

let a = 3;
let b = 3;
let c = "3";

// các phép toán thông thường.
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(b != c);

// so sánh bằng == (không quan tâm đến kiểu biến).
console.log(a == b);

// so sánh tuyệt đối (===) so sánh giá trị và kiểu dữ liệu.
console.log(a === b);
console.log(a === c);

console.log("Phần 2:");
console.log(a != b);
console.log(c != b); // không quan tâm đến kiểu của biến.

console.log(a !== b);
console.log(c !== b); // so sánh giá trị và kiểu dữ liệu.
