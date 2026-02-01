// function(Hàm).
/*
    (*) cách khai báo hàm:
 *  bước 1: function tênFunction(tham số - parameters){
 *      // mã lệnh thực hiện một nhiệm vụ nào đó.
 *      }
 *  bước 2: gọi hàm - khi cần sử dụng.
 *      tênFunction();
 *      tênFunction(tham số);

*/
/**
 * khi muốn thực thi một đoạn code nào đó nhiều lần, thay vì phải copy đi copy
 * lại đoạn code đó, dẫn đến chương trình bị trùng lặp code
 * => thì ta sử dụng hàm
 *  - hàm là một khối lệnh đc thực hiện 1 công việc hoàn chỉnh.
 *  - hàm còn đc gọi là chương trình con.
 *  (*)công dụng:
 *      1) chia nhỏ phân việc của dự án.
 *      2) tái sử dụng: khi cần chỉ cần gọi lại chương trình con mà 0 cần phải viết lại
 */

// CHÚ Ý: NẾU THÂN HÀM KO CÓ RETURN THÌ GIÁ TRỊ TRẢ VỀ LÀ UNDEFINED.
// VÀ CÓ RETURN THÌ MỚI SỬ DỤNG ĐC CONSOLE.LOG().
// KO CÓ RETURN THÌ CHỈ GỌI HÀM NHƯ BÌNH THƯỜNG.

// tính tổng của 2 số .
// a. 7 , 5
// b. 9 , 6
// c. 10 , 5

// a
let a = 7;
let b = 5;
console.log(a + b);

// b
let c = 9;
let d = 6;
console.log(c + d);

// khai báo một hàm đơn giản.
function xinChao() {
  console.log("chào mừng bạn");
}
// gọi hàm.
xinChao();

// khai báo hàm có tham số.
let inputName = prompt("mời bạn nhập tên mình vào đây: ");
function ten(name) {
  console.log(`chào bạn ${name} `);
}
// gọi hàm.
ten("duy");
ten(inputName);

// ví dụ 2: xây dựng một hàm tính tổng a và b.
function total(a, b) {
  // let kq=a+b;
  // return kq;
  return a + b;
}
console.log(total(5, 6));
// gán biến cho hàm (lưu giá trị trả về vào biến).
let toan = 8;
let van = 9.5;
let tong = total(toan, van);
console.log(`tong diem = ${tong}`);

// giá trị mặc định parameters.
function tinhTong(a = 0, b = 0) {
  return a + b;
}
console.log(tinhTong(10)); // 10 lúc này sẽ là a và b vẫn = 0.
