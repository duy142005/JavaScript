// đệ quy: là cách dùng hàm để tự gọi lại chính nó
/* để giải bằng đệ quy cần 2 điều kiện:
    1: điểm dừng của bài toán.
    2: quy luật của bài toán.
*/

// ví dụ 1: tính giai thừa 
function giaiThua(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n* giaiThua (n-1);
    }
}

// gọi hàm giai thừa.
let ketQua = giaiThua(5);
console.log(ketQua);

// ví dụ 2: dãy fibonacci: F1=1, F2=1, Fn=F(n-1) + F(n-2)
/*
 quy luật:: Fn= F(n-1) + F(n-2)
 điểm chung: n<=2 thì F(n)=1
*/
function f(n){
    if(n<=2){
        return 1;
    }
    else{
        return f(n-1)+f(n-2);
    }
}

// gọi hàm tính fibonacci
let ketQua2 = f(10);
console.log(ketQua2);