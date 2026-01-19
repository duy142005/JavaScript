// while(true) vòng lặp vô tận.
// nó sẽ tạo ra một vòng lặp vô tận. khi sử dụng vòng lặp này, mã lệnh bên
// trong nó sẽ được thực thi liên tục mà ko cần kiểm tra điều kiện bất kì.

// tăng n lên cho đên khi n=10.
let n=1;
while(true){
    n++;
    alert(n);
    if(n===10){
        break;
    }
}