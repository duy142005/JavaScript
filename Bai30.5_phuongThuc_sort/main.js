/**
    - sort(): sử dụng để sắp xếp
        + cú pháp: array.sort([compareFunction])
            array: mảng cần được sắp xếp
            compareFunction(tùy chọn): hàm so sánh được sử dụng để xác
        định thứ tự sắp xếp. nếu ko đc cung cấp, sort() sẽ sắp xếp các 
        phần tử dưới dạng chuỗi unicode.

        + hàm so sánh:
            1. nếu compareFunction đc cung cấp, nó sẽ nhận 2 đối số
            thường đc gọi là a và b
            2. nếu compareFunction(a,b) trả về một giá trị < 0, a sẽ đc
            đặt trước b.
            3. nếu compareFunction(a,b) trả về 0, thứ tự giữa a và b ko
            thay đổi.
            4. nếu compareFunction(a,b) trả về một giá trị > 0, b sẽ đc 
            đặt trước a.
 */

/* TH1: khi không truyền compareFunction: so sánh lần lượt từ ký tự đầu, đến
các ký tự phía sau(nếu các ký tự khác nhau sẽ dừng so sánh -> sắp xếp 
tự tăng dần dựa theo thứ tự trong bảng unicode) .
*/
let M1 = ["a", "c", "b"];
// để xem giá trị unicode ta dùng charCodeAt()
console.log("b".charCodeAt());
// duyệt mảng để xem
for (let element of M1) {
  // console.log(element);
  console.log(`${element} có mã unicode là: ${element.charCodeAt()}`);
}

let sortedM1 = M1.sort();
console.log(sortedM1);

/* TH2: phần tử có nhiều ký tự : so sánh các ký tự đầu để sắp xếp nếu
ký tự giống nhau, so sánh tiếp đến các ký tự phía sau, mã unicode thấp hơn
xếp trước.
*/
// let M2 = ["baa", "a", "c"];
let M2 = ["aaa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

// ví dụ với ký tự số(vì sắp xếp theo unicode nên kq ko như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3);

// hàm so sánh:
let M4 = [9, 2, 3, 5, 4];
// trước khi sắp xếp
console.log(M4);
// sx tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4);
// sx giảm dần
let sortedM5 = M5.sort((a, b) => b - a);
console.log(sortedM5);
