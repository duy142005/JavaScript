// bài tập 24: nhập chuỗi bất kì và kiểm tra có bao nhiêu ký tự hoa,thường,số
let input = prompt("nhập 1 chuỗi bất kì: ");
let lowercase = 0;
let capitalLetters = 0;
let number = 0;
let space = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] >= "a" && input[i] <= "z") {
    lowercase++;
  } else if (input[i] >= "A" && input[i] <= "Z") {
    capitalLetters++;
  } else if (input[i] >= "0" && input[i] <= "9") {
    number++;
  } else if (input[i] === " ") {
    space++;
  }
}
console.log(`case test: ${input}
            Số ký tự thường : ${lowercase}
            Số ký tự in hoa: ${capitalLetters}
            Số chữ số: ${number}
            Số khoảng trắng: ${space}  `);

// bài 25: kiểm tra tính hợp lệ của mật khẩu:
// a)
// 1: có ít nhất 6 ký tự
// 2: chứa ít nhất 1 chữ viết hoa
// 3: chứa ít nhất 1 chữ viết thường.
// 4: chứa ít nhất 1 chữ số
// b) cho người dùng nhập vào mật khẩu để login/so sánh, nếu đúng mở
// cửa , sai quá 5 lần khóa đăng nhập, thoát chương trình.

let passWord;
while ((passWord = prompt(" hãy tạo mật khẩu: "))) {
  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let isValidLength = passWord.length >= 6;
  for (let i = 0; i < passWord.length; i++) {
    let char = passWord[i];
    if (char >= "a" && char <= "z") hasUpper = true;
    if (char >= "A" && char <= "Z") hasLower = true;
    if (char >= "0" && char <= "9") hasDigit = true;
  }
  if (hasUpper && hasDigit && hasLower && isValidLength) {
    alert("mật khẩu hợp lệ !");
    break;
  } else {
    alert(`     1: có ít nhất 6 ký tự
                2: chứa ít nhất 1 chữ viết hoa
                3: chứa ít nhất 1 chữ viết thường.
                4: chứa ít nhất 1 chữ số`);
  }
}
let attempts = 0;
let maxAttempts = 5;
while (attempts < maxAttempts) {
  let matKhau = prompt("nhập mật khẩu");
  if (matKhau === passWord) {
    alert("Đăng nhập thành công! Mở cửa.");
    break;
  } else {
    attempts++;
    if (attempts < maxAttempts) {
      alert(`sai mật khẩu . Còn ${maxAttempts - attempts} lần thử`);
    } else {
      alert("quá 5 lần . khóa đăng nhập");
      break;
    }
  }
}

// bài 26: viết chương trình chuyển tin nhắn sang mật mã theo bảng:
// const a= "abcdefghijklmnopqrstuvwxyz"
// const b="zxcvbnmasdfghjklqwertyuiop"

function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // chuyển chữ hoa sang chữ thường

    // kiểm tra xem ký tự nhập vào có trong bảng mã hóa ko
    if (a.includes(char)) {
      // thực hiện chuyển đổi
      // kiểm tra vị trí index ký tự vào của a
      let index = a.indexOf(char);
      // lấy giá trị index, dóng sang chuỗi b để lấy kí tự tương ứng.
      result += b[index];
    } else {
      // nếu ko có trong bảng mã, thì giữ nguyên ký tự và dồn vào biến result
      result += char;
    }
  }
  return result;
}

// input message
let messageInput = prompt("input message");
let kq = encryptMessage(messageInput);
alert(`tin nhan duoc ma hoa: ${kq}`);

// bài 27: const a=" tôi chăm học tôi chịu khó tôi đẹp zai";
// đếm từ tôi trong string a trên ?

const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const b = "tôi";
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + b.length) === b) {
    count++;
  }
}
alert(`số lần xuất hiện từ ${b} trong chuỗi a là : ${count}`);
