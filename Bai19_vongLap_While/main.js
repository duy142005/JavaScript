// vòng lặp While Loop
/* cú pháp:
    while(biểu thức điều kiện){
        // code sẽ được thực thi trong vòng lặp
        // khi condition trở thành false, vòng lặp se dừng.
    }
 
 
*/

let i = 1;
while(i<=5){ // trong khi i còn nhỏ hơn bằn 5 thì thực hiện trong {}. 
    console.log(i);
    i++;
}

// bài tập.
let n= prompt(" nhap so tu 1 den 99: ");
while(isNaN(n)||n<1||n>99||n%1!==0){
    n =Number(prompt("so ban nhap ko hop le yeu cau nhap lai: "));
}
alert("ban da nhap so n " + n);