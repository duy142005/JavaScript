// switch case:

/* cú pháp:
    switch(biểu thức){
        case giá_trị1:
            <đoạn mã được thực thi nếu biểu thức có giá trị 1>
            break;
        case giá_trị2:
            <đoạn mã được thực thi nếu biểu thức có giá trị 2>
            break;
        case giá_trị3:
            <đoạn mã được thực thi nếu biểu thức có giá trị 3>
            break;
        // các case khác ở đây
        default:
            <đoạn mã được thực thi nếu không có trường hợp nào
    }
*/

let number = 2;
switch (number % 2) {
  case 0:
    console.log("so chan");
    break;
  case 1:
    console.log("so le");
    break;
  default:
    console.log("khong phai so");
}


// switch case biến thể.
/* cú pháp:
    switch(bieu_thuc){
        case gia_tri1:
        case gia_tri2:
        case gia_tri3:
            //câu lệnh được thực hiện nếu bieu_thuc có giá trị là gia_tri1, gia_tri2,...
        break;
        // các case khác
        default:
            // đoạn mã thực thi nếu ko có trường hợp nào.
    
    }
*/

let month =parseInt(prompt(" nhap vao mot thang 1 -->12: "));
switch(month){
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
        console.log("THANG CO 31 DAYS");
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11:
        console.log("THANG CO 30 DAYS");
        break;
    case 2:
        console.log("THANG CO 28 DAYS");
        break;
    default:
        console.log("LAM GI CO THANG NAY BO!"); 
}