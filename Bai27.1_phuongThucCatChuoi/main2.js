/*
    10) replace(oldValue,newValue): thay thế giá trị cũ thành giá trị mới,
nó sẽ thay thế gia trị (oldValue) đầu tiên đc tìm thấy trong chuỗi bằng 
giá trị mới(newValue).
    11) string.repeat(count): lặp lại chuỗi count lần, count là số lần lặp lại chuỗi.

    12)  indexOf(searchValue,[fromIndex]):
        tìm kiếm(searchValue) xuất hiện lần đầu trong chuỗi. Nếu tồn tại 
    trả về vị trí index, 0 tồn tịa trả về -1.
    13) lastIndexOf(searchValue,[endIndex]):
        tìm kiếm(searchValue) xuất hiện lần đầu trong chuỗi. Nếu tồn tại 
    trả về vị trí index, 0 tồn tịa trả về -1.
    14) includes(searchValue,[fromIndex]): 
        tìm kiếm (searchValue) có trong chuỗi gốc hay ko, Nếu có trả về True,
    ko trả về false. fromIndex(tùy chọn): ví trí bắt đầu tìm kiếm trong chuỗi
    nếu bỏ trống sẽ tìm kiếm toàn bộ chuỗi.

    15) startWith(searchValue,[startIndex]): 
        kiểm tra chuỗi gốc có bắt đầu bằng searchValue ko, nếu đúng trả về
    True, sai trả False.
    16) endsWith(searchValue,[startIndex]): 
        kiểm tra chuỗi gốc có kết thúc bằng searchValue ko, nếu đúng trả về
    True, sai trả False.
    17) string.spilt(separator,[limit]): tách chuỗi trả về mảng
        string: chuỗi gốc cần chia.
        separator: chuỗi để thực hiện vị trí thực hiện tách, nó có thể 
    là một ký tự hoặc một biểu thức chính quy.
        limit(tùy chọn): giới hạn số lượng phần tử trong mảng kết quả.
    
*/

// ví dụ 10.
let s1 = " học nữa học mãi";
console.log(s1.replace("học", "ngủ"));
//(*) để thay thế toàn bộ thì ta sử dụng biểu thức chính quy(regular expression)
console.log(s1.replace(/học/g, "ngủ"));
// ví dụ 11.
let s2 = "hello, ";
console.log(s2.repeat(3));

// ví dụ 12.
let s3 = "abcc ddcdjjd";
let s4 = s3.indexOf("c"); // tìm kiếm kí tự "c" đầu tiên xuất hiện ở index nào.
console.log(s4);
// [fromIndex]: tìm chữ "c" nhưng bắt đầu từ vị trí index 3.
console.log(s3.indexOf("c", 3)); // bắt đầu tìm "c" từ vị trị 3 là "c".
// ko tồn tại.
console.log(s3.indexOf("g")); // trả về -1 vì ko tồn tại.

// ví dụ 13.
let s5 = "abcdef abcdef";
let s6 = s5.lastIndexOf("a");
console.log(s6); // bằng 7 vì nó xuất hiện cuối cùng ở index 7.
// [endIndex]: tìm kiếm tham số endIndex( trong khoảng từ 0 -> 6)
console.log(s5.lastIndexOf("a", 6)); // bằng 0 vì chỉ tìm từ 0 tới 6.

// ví dụ 14.
let s7 = "abcdef abcdef";
console.log(s7.includes("a")); // true vì có "a" trong chuỗi gốc.
// tìm "a" từ vị trí index 8.
console.log(s7.includes("a", 8)); // false vì bắt đầu tìm từ vị trí 8.
console.log(s7.includes("g")); // false vì ko tồn tại.

// ví dụ 16.
let s8 = "abcdef abcdef";
console.log(s8.startsWith("a")); // true
console.log(s8.startsWith("b")); // false
// tìm vị trí index số 1 xem có phải bắt đầu bằng chuỗi "bc".
console.log(s8.startsWith("bc", 1)); // true

// ví dụ 17.
let s9 = "01234567890";
console.log(s8.endsWith("0")); // true
// endPosition =10.
console.log(s9.endsWith("9", 10)); // true
console.log(s9.endsWith("5")); //false

// ví dụ 18.
let student = "hoa,lan,dung";
let array = student.split(",");
console.log(array); // ["hoa","lan","dung"]
// giới hạn phần tử của mảng.
let arr = student.split(",", 2);
console.log(arr); //["hoa","lan"]
// nếu nhập vào "" thì nó sẽ tự tách rời các ký tự.
let str = "abcdef";
let ar = str.split("");
console.log(ar);
