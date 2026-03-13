/*  1) string.slice(beginIndex,[endIndex]);
    2) string.substring(startIndex,[endIndex]);
        beginIndex: vị trí bắt đầu cắt chuỗi.
        endIndex: (tùy chọn) vị trí sát endIndex, ko bao gồm endIndex.
        enIndex: nếu ko nhập thì ngầm định là cắt đến cuối chuỗi.
    ==> 2 phương thức này khá giống nhau.

    ==> Điểm khác nhau:
    (*) Về đối số truyền vào:
        2) substring: nhận vào tham số là vị trí bắt đầu và kết thúc. Nếu
    end < start, chúng sẽ đc đảo ngược- tự động hiểu số nhỏ hơn là vị trí start.
        1) slice: cũng nhận vào 2 vị trí , Nếu end < start, chuỗi sẽ đc xem là rỗng.
        
    (*) Xử lý số âm:
        2) substring: sẽ chuyển só âm thành 0 và nếu end < start, sau khi
    chuyển số âm thì nó sẽ tự đảo ngược chúng.
        1) slice: cho phép sử dụng số âm nhưng sẽ đếm từ cuối chuỗi. Số âm
    sẽ đc hiểu là đếm từ cuối chuỗi về phía trước.

    3) string.trim(): xóa toàn bộ khoảng trắng ở cả 2 đầu chuỗi.
    4) string.trimEnd(): xóa toàn bộ khoảng trắng ở cuối chuỗi.
    5) string.trimStart(): xóa toàn bộ khoảng trắng ở đầu.

    6) str1.concat(str2,str3,...,strN): nối các chuỗi str2,3,...,n vào chuỗi str1.
    7) toUpperCase(): chuyển toàn bộ chuỗi sang in hoa.
    8) toLowerCase(): chuyển toàn bộ sang in thường.
    9) charAt(index): trả về chuỗi nằm ở vị trí index đc truyền vào.
*/

// ví dụ 1:
let s1 = "0123456789";
// cắt từ vị trí index 1 đến sát index 4 (4-1)=3
let s2 = s1.slice(1, 4); // cắt index từ 1 tới 4-1.
// ko truyền endIndex
let s3 = s1.slice(1);
console.log(s2);
console.log(s3);

// bài tập vận dụng: chỉ cho phép tin nhắn dài tối đa 20 kí tự,
// nếu quá thì tự cắt xuất chuỗi sau xử lý.
let input = prompt("mời nhập vào chuỗi ");
console.log(`bạn đã nhập ${input.length} ký tự: ${input}`);
if (input.length > 20) {
  console.log(`bạn đã nhập quá ${input.length - 20} ký tự `);
  let s4 = input.slice(0, 20);
  console.log("chuỗi sau khi cắt " + s4);
}
//code online
console.log("chuỗi sau xử lý : " + prompt("mời bạn nhập: ").slice(0, 20));

// ví dụ 2:
let s5 = "2345678";
let s6 = s5.substring(2, 9);
console.log(s6);

// ví dụ khác nhau.
// về truyền vào.
let s7 = "213346576";
console.log("sử dụng substring");
console.log(s7.substring(1, 4)); // bình thường sẽ start bé hơn end.
console.log(s7.substring(4, 1)); // lúc này start > end, nó sẽ tự động hiểu là (1,4)
console.log("sử dụng slice");
console.log(s7.slice(1, 4)); // như bình thường.
console.log(s7.slice(4, 1)); // start > end => chuỗi " ".

// về xử lý số âm.
let s8 = "0123456789";
console.log(" sử dụng substring với con số âm");
console.log(s8.substring(-3, -1)); // <=> s8.substring(0,0)
console.log(s8.substring(4, -1)); // <=> s8.substring(4,0) <=> (0,4)
console.log("sử dụng slice với con số âm");
console.log(s8.slice(-3, -1)); // cắt từ -3 đến -2 <=> (-3,-1) =78

// ví dụ 3:
let s9 = "      he   llo  ";
console.log(s9.length);
let s10 = s9.trim();
console.log(s10);
console.log(s10.length);
// ==> 4,5 cũng tương tự 3.

// ví dụ 6.
let firstName = "john";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);
// ví dụ 7.
let s11 = "chào các bạn TÔI HỌC TẠI Nhà ";
console.log(s11.toUpperCase()); // chuyển hết sang viết hoa
// ví dụ 8.
console.log(s11.toUpperCase()); // chuyển sang thường.
// ví dụ 9.
let s12 = "hello";
console.log(s12.charAt(2)); // trả về giá trị nằm ở 2 là : chữ l.
