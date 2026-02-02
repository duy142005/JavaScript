// phạm vi sử dụng(scope).
/**
 * Phạm vi sử dụng:
 *  1) global scope: phạm vi toàn cục, truy xuất được ở mọi nơi.
 *  2) function-scope: phạm vi của hàm.
 *  3) block-scope: phạm vi của khối (block) chẳng hạn như trong một if else,
 * statement hoặc vòng lặp
 */

// 1) ví dụ biến toàn cục.
let a = 1;
// có thể truy xuất ngay bên ngoài.
console.log(a);

function viDu_1() {
  // có thể truy xuất biến global ở trong hàm
  console.log(a);
  // thử với phạm vi block scope.
  if (a % 2 === 0) {
    console.log(`${a} số chẵn.`);
  } else {
    console.log(`${a} là số lẻ.`);
  }
}
// gọi hàm
viDu_1();
// => nếu biến khai báo ở global thì có thể truy xuất ở trong 3 loại

// 2) ví dụ phạm vi của hàm.
function viDu_2() {
// cấp đc tính theo tab. thụt cùng 1 tab là cùng cấp.
  let b = 2;
  // biến b chỉ có thể truy xuất bên trong hàm.
  console.log(b).a;
  // có thể truy xuất đc từ các cấp sâu hơn bên trong.
  if (b % 2 === 0) {
    console.log(`${b} la chan`);
  } else {
    console.log(`${b} le`);
  }
}
viDu_2();
// ngoài hàm.
// console.log(b); 

// 3) block cope.
let n =3;
if(n===3){ // nằm trong {} này gọi là block scope
    let m =1;
    console.log(m);
    if(m%2===0){
        console.log(`${m} chan`);
    }
    else{
        console.log(`${m} le`);
    }
}
