/*
    Mảng giúp chúng ta quản lý và tổ chức dữ liệu một cách hiệu quả,
truy cập và thay đổi dữ liệu dễ dàng.
    Mảng hay còn gọi là Array : là tập hợp các phần tử có thể cùng hoặc 
khác kiểu dữ liệu dễ dàng.
    (1) khai báo mảng:
    - cách 1- thường dùng: sử dụng cặp dấu ngoặc []:
    - cách 2: dùng Array và Constructor.
    (2) truy xuất phần tử trong mảng với vị trí index.
    (3) thuộc tính length: trả về số phần tử của mảng.
    (4) gắn, thay đổi giá trị cho mảng qua index.
    (5) duyệt mảng.
*/

//cách1: khai báo mảng rỗng.
let arr = [];
console.log(arr);
// có cách phần tử
let arr1 = [1, 12, 2, "duy", [12, 23, 33], true];
console.log(arr1);

// cách 2:
// khai báo với mảng rỗng sử dụng Array
let arr2 = new Array();
// có các phần tử
let arr3 = new Array(1, 2, 3, "nam");
console.log(arr3);
// tạo với một độ dài xác định. với các phần tử là undefine
let arrayWithLength = new Array(5);
console.log(arrayWithLength);

//(2) truy xuất phần tử trong mảng.
let a = [1, 2, "nam"];
let array = new Array(1, 2, 3, 4, 5);
console.log(array[2]);
console.log(a[2]);

//(3) thuộc tính length
console.log(array.length);

//(4) gắn, thay đổi giá trị index.
a[2] = "duy";
console.log(a);

//(5) duyệt mảng
// cách dùng for
let mang = [1, 2, 3, 4];
console.log(mang);
for (let i = 0; i < mang.length; i++) {
  // sửa giá trị tại chỉ số i
  mang[i] *= 2;
}
console.log(mang);
// cách dùng for...of: chỉ có thể xem, chứ ko sửa đc giá trị của mảng.
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  // kiểm tra điều
  if (element % 2 == 0) {
    console.log(element);
    count++;
  }
  //   element = 5;
}
console.log(arr8);
console.log("số lượng số chẵn có trong mảng: " + count);
