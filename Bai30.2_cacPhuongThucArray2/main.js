/**
    8) indexOf():trả về vị trí index của phần tử xuất hiện lần đầu tiên
trong mảng nếu tìm thấy. nếu ko tìm thấy sẽ trả về -1.
    9) lastIndexOf(): trả về vị trí index của phần tử xuất hiện lần cuối
cùng trong mảng nếu tìm thấy. trả về -1 nếu ko tìm thấy.
    10) reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc. nó
thay đổi mảng gốc và ko tạo ra mảng mới
    11) join(separator): nối các phần tử trong mảng thành chuỗi, theo ký
tự phần tách 'separator'; SEPARATOR : nếu bỏ trống sẽ mặc định là dấu ","
phương thức này ko thay đổi mảng gốc.
*/

// 8) indexOf()
let arr = [1, 2, 3, 4, 5, 3, 2];
let index = arr.indexOf(2);
let index2 = arr.indexOf(6);
console.log(index);
console.log(index2);

// 9) lastIndexOf()
let arr2 = [1, 2, 3, 1, 2];
let lastIndex = arr2.lastIndexOf(2);
let lastIndex2 = arr2.lastIndexOf();
console.log(lastIndex);
console.log(lastIndex2);

// 10) reverse():
let a = [5, 2, 1, 3];
// let b = a.reverse(); // đảo và thay đổi mảng gốc chứ ko tạo ra mảng mới
let f = a.slice().reverse(); // tạo ra một bản sao của mảng gốc rồi mới đảo
// console.log(b);
console.log(f);

// 11) join(separator):
// ko truyền separator
let c = ["nam","trung",1,2,3];
let e = c.join(); 
console.log(e);
//có truyền separator
let j = c.join("  +  ");
console.log(j);



