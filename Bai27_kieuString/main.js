// string là tập hợp các ký tự chữ, số, hoặc ký tự đặc biệt và có 3 
// cách để xuất chuỗi: 1:(""), 2:(''), 3: (``).

// cách xuất:
console.log("xin chào, ABC,123,@!#$");
console.log('xin chào, ABC,123,@!#$');
console.log(`xin chào, ABC,123,@!#$`);

// 2. khởi tạo chuỗi.
let s1 = `hồi đó tôi chê mồm em rộng 
không tin hai đứa chập mồm đo`; // có thể tùy ý xuống dòng.
console.log(s1);

let s2 ="hồi đó tôi chê mồm em rộng\nkhông tin hai đứa"; // sử dụng \n để xuống dòng
console.log(s2);
console.log(typeof s2);

// 3. quy tắc về index trong string: index bắt đầu từ 0
let ten ="linh";
console.log(ten[1]);

// 4. thuộc tính length: kiểm tra chiều dài của chuỗi(bắt đầu từ 1).
let s3 = " chưa có bao giờ";
console.log(s3.length); 

// ví dụ vận dụng.
let message = prompt("please input message");
if(message.length <=140){
    alert(
      "bạn đã nhập: " +
        message.length +
        "ký tự, số ký tự còn lại: " +
        (140 - message.length),
    );
}
else{
    alert("bạn đã nhập quá 140 kí tự");
}