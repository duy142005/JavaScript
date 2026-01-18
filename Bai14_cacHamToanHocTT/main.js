// các hàm tiếp theo.

/*
    1) Hàm Number(): chuyển value sang số, nếu ko chuyển được trả về NaN.
    2) Hàm isNaN(value): kiểm tra xem giá trị (hoặc biểu thức) truyền vào:
        + step 1: cố gắng chuyển đổi về kiểu number.
        + step 2: 
            -> trả về true, nếu gia trị sau chuyển đổi không phải là kiểu số.
            -> trả về false, nếu giá trị sau chuyển đổi là kiểu số.
    3) Hàm Number.isNaN : phương thức này chỉ trả về `true` nếu value h
hoặc biểu thức truyền vào có giá trị "NaN".
        (*) nó khác hoàn toàn hàm isNaN.
    4) Hàm `Math.random()` : hàm lấy số ngẫu nhiên từ 0 cho đến sát 1 [0 -> 1).
*/

// 1) hàm number
let str = "123a";
console.log(typeof str);
// chuyển sang kiểu số
let num = Number(str);
console.log(num);
console.log(typeof num);

// 2) kiểm tra giá trị.
// step 1:
let a = "123";
console.log(isNaN(a));
// step 2:
console.log(isNaN("abc")); // true
console.log(isNaN("123")); // false -> 123 về số được.

//trường hợp true , false
let b = Number(true);
console.log(b);
console.log(isNaN(true)); // false -> true(luôn là 1) : false ( luôn là 0).

console.log(isNaN(null)); // false -> giá trị nó ra 0.
console.log(isNaN("")); // false -> giá trị nó ra 0.
console.log(isNaN("  ")); // false -> giá trị nó ra 0.

// 3) hàm kiểm tra NaN.
console.log(Number.isNaN(NaN)); // true -> vì nó trả về NaN.
console.log(Number.isNaN("abc" / "abc"));
console.log("abc" / "abc");
console.log(0 / 0);
console.log(Number.Nan);
console.log({}); // false
console.log("ponyfoo"); // false

// 4) hàm lấy số ngẫu nhiên.
// trường hợp 1:
let randomValue = Math.random();
console.log(`lấy số ngẫu nhiên từ 0 đến sát 1 là : ${randomValue}`);
// trường hợp 2: lấy số lớn hơn 1.
let randomValues = Math.random() * 10;
console.log(`lấy số ngẫu nhiên từ 0 đến sát 1 là : ${randomValues}`);
// trường hơp 3: số nguyên.
let randomValue2 = parseInt(Math.random() * 10);
console.log(`lấy số ngẫu nhiên từ 0 đến sát 1 là : ${randomValue2}`);
// trường hợp 4: 0 đến sát 30.
let randomValue3 =parseInt( Math.random() * 30);
console.log(`lấy số ngẫu nhiên từ 0 đến sát 1 là : ${randomValue3}`);
