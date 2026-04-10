/*
    - splice(): là một công cụ mạnh mẽ cho việc thay đổi cấu trúc của mảng
        array.splice(start, deleteCount, item1, item2,...);
        + start: chỉ định vị trí bắt đầu thay đổi mảng. nếu là một số âm,
    nó sẽ đc tính từ cuối mảng.
        + deleteCount: số nguyên chỉ định số lượng phần tử sẽ loại bỏ từ mảng,
    bắt đầu từ vị trí start.( nếu deleteCount là 0, ko có phần từ nào loại bỏ )
        + item 1,2,...: các phần tử mới sẽ đc them vào mảng từ vị trí start.
        
*/

// loại bỏ phần tử từ mảng:
let arr = [1, 2, 3, 4, 5];
// arr.splice(2,1); // bắt đầu xóa từ index 2 và xóa đi 1 phần tử.
arr.splice(-2, 1); // bắt đầu xóa từ index -2 và xóa đi 1 phần tử.
console.log(arr);

// thay thế phần tử trong mảng sau khi xóa
let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 6); // bắt đầu từ index 2 và xóa đi 1 phần tử 
// sau đó thêm phần tử 6 vào index 2
console.log(array);

// thêm phần tử mới vào mảng mà ko xóa
let ary = [1, 2, 3, 4, 5];
ary.splice(2, 0, 7);
console.log(ary);
