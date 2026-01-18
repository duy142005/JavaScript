// Các hàm toán học:

/*
    1) Hàm `Math.sqrt()` : căn bậc hai.
    2) Hàm `Math.pow(base, exponent)`: lấy số mủ.
    3) Hàm `Math.abs()` : giá trị tuyệt đối. 
    4) Hàm `Math.ceil()` : làm tròn lên.
    5) Hàm `Math.floor()` : làm tròn xuống.
    6) Hàm `Math.round()` : làm tròn số, từ 0.5 trở lên làm tròn 1 và ngược lại.
    7) Hàm `toFixed()` : làm tròn đến số thấp phân thứ n.
        + lưu ý toFixed sẽ trả về kết quả là string.
        + muốn là kiểu số để tính toán cần ép kiểu sang number.
    8) Hàm `Math.min()` và `Math.mac()` : giá trị nhỏ nhất và lớn nhất.




*/

// 1) hàm căn bậc hai.
let a=Math.sqrt(4);
console.log(a);

// 2) hàm mủ.
let b=Math.pow(2,3);
console.log(b);

// 3) hàm giá trị tuyệt đối.
let c=Math.abs(-10);
console.log(c);

// 4) hàm làm tròn lên.
let d =Math.ceil(4.01);
console.log(d);

// 5) hàm làm tròn xuống.
let e=Math.floor(5.0004);
console.log(e);

// 6) hàm làm tròn số.
let f=Math.round(7.5);
console.log(f);

// 7) làm tròn số thập phân.
let g = 3.14159;
let fRound=g.toFixed(2);
console.log(fRound);
console.log(typeof fRound); // lưu ý toFixed sẽ trả về kết quả là string.

// 8) hàm tìm số lớn nhất nhỏ nhất.
let h =Math.min(1,2,2,3,5,100);
let i =Math.max(1,1,3,4,5,100);
console.log(h);
console.log(i);