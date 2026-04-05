/* Các phương thức.
    1)concat():nối mảng hiện tại với các mảng khác và trả về một mảng mới
    2)push(): thêm một hoặc nhiều phần tử vào cuối mảng gốc
    3)unshift(): thêm một hoặc nhiều phần tử vào đầu mảng gốc
    4)pop(): loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loại
    5)shift():loại bỏ phần tử đầu tiên của mảng và trả về phần tử bị loại
    6)slice(startIndex,endIndex): tạo một bản sao của mảng -> lưu sang một vùng nhớ mới
    7)includes(): kiểm tra xem một mảng có chứa một gia trị cụ thể hay không
trả về true nếu có và false nếu không.

*/
//(1) nối mảng
let arr1 = [1, 2, 3];
let arr2 = ["duy", "sss"];
let newArr = arr1.concat(arr2);
console.log(newArr);

//(2) thêm 1 hoặc nhiểu phần tử.
let a = [1, 2, 2, 3];
a.push(4);
console.log(a);

// (3) thêm 1 hoặc nhiều vào đầu mảng
let b = [1, 2, 2, 2];
b.unshift(5, 4, "nam");
console.log(b);

// (4) loại bỏ phần tử cuối và trả về phần tử đó
let c = [1, 2, 3, 4, 5];
let removeElement = c.pop();
console.log(c);
console.log(removeElement);

//(5) loại tử đầu và in ra nó
let aa = ["duy", 11, 2];
let remove = aa.shift();
console.log(aa);
console.log(remove);

// (6) tạo một bản sao của mảng.
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4); // cắt từ index 1 đến sát index 4.
let sliceArr2 = arr7.slice(); // sao chép lại nguyên mảng
console.log(sliceArr);
console.log(sliceArr2);

// (7) kiểm tra xem mảng có chứa giá trị cụ thể ko
let r = [1, 2, 2, 3, 5];
let isPresent = r.includes(5);
let isPresent1 = r.includes(6);
console.log(isPresent);
console.log(isPresent1);
