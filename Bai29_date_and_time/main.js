/*
1.Date: giúp chúng ta xử lý hiện thị thời gian và ngày tháng
        1. Tạo đối tượng mới: new Date() ; mặc định lấy thời gian hiện tại
        2. Các phương thức lấy thông tin thời gian:
            getFullYear(): lấy năm
            getMonth() + 1: lấy tháng // tháng bắt đầu từ 0
            getDate(): lấy ngày
            getHours(): lấy giờ
            getMinutes(): lấy phút
            getSeconds(): lấy giây

2.Timestamp: là một đại diện cho một điểm cụ thể trong thời gian, tính
bằng millisecond từ mốc 0.
    1.Mốc thời gian 0: 00:00:00 ngày 1 tháng 1 năm 1970
    2. để lấy timestamp hiện tại :getTime()

3.set ngày tháng năm theo ý muốn.
    cách 1: newDate(year, monthIndex,day,hour,minutes,second,milliseconds).
    cách 2: new Data(dateString)
        + T : là kí tự phân tách giữa ngày tháng và giờ
    cách 3: sử dụng setFullYear, setMonth, setDate
4. xuất ngày tháng năm.
    cách 1: toLocaleDateString().
    cách 2: định dạng Date tự code.
*/

let currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate);
// lấy năm
let year = currentDate.getFullYear();
console.log("năm hiện tại: " + year);

// thời gian mốc 0
let timestamp1 = new Date(0);
console.log(timestamp1);
// lấy timestamp hiện tại
let currentTimeStamp = currentDate.getTime(); // tính bằng giây.
console.log(currentTimeStamp);

// 3. set ngày tháng năm
// cách 1:
let myDate1 = new Date(2024, 1, 14);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());
// cách 2:
let myDate2 = new Date("2024-02-15T12:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleTimeString());
// cách 3:
let myDate3 = new Date();
myDate3.setFullYear(2023);
myDate3.setMonth(2);
myDate3.setDate(16);
console.log(myDate3);

//4.xuất ngày tháng năm
// cách 1:
console.log(myDate3.toLocaleDateString());
// cách 2:
console.log(`
ngày ${myDate3.getDate()}/${myDate3.getMonth() + 1}/${myDate3.getFullYear()}`);
// thêm số 0
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMoth = myDate3.getMonth() < 10 ? "0" : "";
console.log(`
ngày ${prefixDate}${myDate3.getDate()}/${prefixMoth}${myDate3.getMonth() + 1}/${myDate3.getFullYear()}`);
