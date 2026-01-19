// vòng lặp do...while
/* cú pháp:
    do {
        // mã lệnh được thực thi ít nhất một lần sau đó vòng lặp sẽ kiểm
    tra điều kiện.
    }while(điều_kiện);
    (*) vòng lặp này sẽ khác while ở chỗ, nó thi hành khối lệnh ít nhất 1
    lần đầu tiên, sau đó mới kiểm tra điều_kiện, nếu điều_kiện vẫn true 
    thì lặp tiếp.
*/
let i = 1;
do {
  console.log(i);
  i++;
} while (i < 5);
