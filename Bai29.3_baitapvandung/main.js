// bài 29: viết chương trình nhập vào năm sinh và in ra số tuổi.
// kiểm tra điều kiện dữ liệu năm sinh nhập vào là số nguyên, phải lớn hơn 0.

function tinhTuoi(inputYear) {
  // ép kiểu sang number
  let yearBirth = Number(inputYear);
  console.log(yearBirth);
  // kiểm tra số nguyên, lớn hơn 0
  if (!Number.isInteger(yearBirth) || yearBirth <= 0) {
    alert(" năm sinh ko hợp lệ, nhập lại");
    return;
  }
  // lấy năm sinh hiện tại
  let currentYear = new Date().getFullYear();
  let age = currentYear - yearBirth;
  alert(`tuổi của bạn là ${age}`);
}
// nhập liệu
let inputYear = prompt(" nhập năm sinh: ");
// gọi hàm
tinhTuoi(inputYear);

// bài 30: viết chương trình đếm ngược thời gian từng giây.
// ví dụ thời gian làm bài là 45p, nếu chạy về 0 thì báo hết giờ

function demNguoc(minutes) {
  alert("thoi gian lam bai la: " + minutes + "phut");
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    // thân hàm
    let minutesLeft = Math.floor(seconds / 60); // 65 / 60 ~1.083 --> 1
    let secondsLeft = seconds % 60; // 65%60 =5
    // hiển thị số giây theo định dạng 01 02 03 04,...
    let prefixSecondsFormat = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}:${prefixSecondsFormat}${secondsLeft}`);

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("het thoi gian");
    } else {
      seconds--;
    }
  }, 1000);
}

let timeInput = Number(prompt("nhap thoi gian lam bai"));
// goi ham
demNguoc(timeInput);

/*bài tập 31: viết chương trình có tên timeSince, thông báo người dùng 
 offline x phút ...
 ví dụ : bạn đang chat với bạn A, và sau đó bạn A offline
 --> yêu cầu update hiển thị thời gian a offline , x giay trước, x phút trước,..

*/

function timeSince(timestamp) {
  let now = new Date();
  console.log("thời gian hiện tại là :" + now.getTime());
  let timeDifference = now - timestamp;
  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  if (years > 0) {
    return `Online ${years} năm trước`;
  } else if (months > 0) {
    return `Online ${months} tháng trước`;
  } else if (days > 0) {
    return `Online ${days} ngày trước`;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước`;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước`;
  } else {
    return `Online ${seconds} giây trước`;
  }
}
// ví dụ sử dụng
let timeOffLine = 0;
console.log(timeSince(timeOffLine));
