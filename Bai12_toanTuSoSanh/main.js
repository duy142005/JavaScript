// các phép so sánh:
/*
    1) != : khác nhau.
    2) > : lớn hơn.
    3) < : nhỏ hơn.
    4) >= : lớn hơn hoặc bằng.
    5) <= : bé hơn hoặc bằng.
    6) == : bằng nhau, Ko quan tâm kiểu dữ liệu.
    7) === : bằng nhau, So sánh giá trị và kiểu dữ liệu.

    (*) phép toán với kiểu string
    - Đối với phép cộng nếu có một toán hàng là một kiểu chuỗi 
thì kết quả nhận được là một kiểu chuỗi, còn các phép toàn còn lại thì nó sẽ ưu
tiên chuyển đổi sang số (number) để tính toán.
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
