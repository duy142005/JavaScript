/*
    1. setInterval: giúp thực hiện một function lặp đi lặp lại sau một 
thời gian cố định.
    cú pháp: setInterval (function, millisecond, param 1, param 2,...)
        + function: hàm
        + millisecond: thời gian hàm sẽ tự động được gọi lần tiếp theo
    => cách sử dụng như setTimeout
    2. Hủy lặp
        + step 1: gán biến để giá trị trả về
        + step 2: dừng lặp dùng clearInterval
*/

// 1. function declaration
function showNotification() {
  console.log("ban co xx tin nhan");
}
// setInterval(showNotification, 2000);

// ví dụ 2:
function upDate() {
  let currentTime = new Date();
  console.log(currentTime);
}
// setInterval(upDate, 1000);

let counter = 0;
function count1() {
  console.log(counter++);
}
// setInterval(count1,1000);

// 2. function expression
let count2 = function () {
  console.log(counter++);
};
// setInterval(count2,1000);
//

// 3. arrow function
let count3 = () => {
  console.log(counter++);
};
// setInterval (count3,1000);

// 4.Hủy lặp
let count4 = () => {
  console.log(counter++);
  if (counter === 5) {
    // step 2: dùng clearInterval
    clearInterval(stopInterval);
  }
};
// step 1: gán biến để nhận giá trị trả về
let stopInterval = setInterval(count4, 1000);
