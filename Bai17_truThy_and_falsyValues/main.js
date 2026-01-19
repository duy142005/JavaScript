// truthy and falsy values(giá trị đúng và giá trị sai)
/*
    - chúng ta có thể ép kiểu từ chuỗi--> số dùng: Number, parseInt, parseFloat.
    - chúng ta có thể ép ngược lại số  --> chuỗi.
    (*) tuy nhiên đối với kiểu boolean(kiểu luận lý true false thì cần chú ý):
        - nhưng giá trị này khi chuyển đổi thành kiểu boolean --> sẽ mang giá trị false.
    ngược lại các giá trị không phải là "falsy(giá trị sai)" được coi là "truthy(giá trị đúng)".
            1) false: giá trị boolean false luôn là "falsy".
            2) 0: số 0 được coi là "falsy".
            3) -0: số âm cũng là "falsy".
            4) 0n: số BigInt không cũng là "falsy". 
            5) "" : chuỗi rỗng cũng là "falsy".
            6) null : giá trị null được coi là "falsy".
            7) undefined : giá trị cũng là ..
            8) Nan : cũng là ...
*/

// chúng ta có thể ép ngược lại từ số --> chuỗi.
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("GIÁ TRỊ CỦA B LÀ : " + b);

// 8. giá trị falsy khi chuyển sang boolean.
let c = Boolean("");
console.log(c);
console.log(typeof c);

// ví dụ kiểm tra 1 biến đã được gán gia trị hay undefined.
let salary;
console.log(salary);
if (salary) {
  console.log("salary is defined");
} else {
  console.log("salary is undefined");
}
