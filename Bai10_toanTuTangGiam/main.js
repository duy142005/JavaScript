// toán tử tăng giảm:
/*
    1) ++ : tăng giá trị lên 1.
    2) -- : giảm giá trị xuống 1.

    (*) trường hợp biểu thức phức tạp:
        1) quy tắc viết dấu ++,--
            - a++ , a-- : Postfix.
            - ++a, --a : prefix.
        2) ưu tiên tính toán postfix và prefix.
            - step 1: prefix.
            - step 2: các phép tính còn lại.
            - step 3: gắn giá trị cho biến ở bên trái dấu bằng.
            - step 4: tính postfix.
*/

// tăng giá trị lên 1:
let a = 5;
a++;
++a;
console.log(a);

// giảm giá trị xuống 1:
let b = 10;
b--;
--b;
console.log(b);

// trường hợp phức tạp.
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x);
console.log(y);
console.log(z);
// step 1: ++y => y=3
// step 2: x=1 ,y=3 => 1-3+1 = -1
// step 3: z=-1
// step 4: x++ => x=2
