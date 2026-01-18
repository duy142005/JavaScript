// if else.
/*
    if(điều kiện)
        <khối lệnh khi điều kiện đúng>
    else
        <khối lệnh khi điều kiện sai>

*/

let dtb = Number(prompt("mời nhập điểm trung bình môn: "));
if (dtb >= 5.0) {
  alert("bạn đã đỗ tốt nghiệp, xin chúc mừng !");
} else {
  alert("ăn với chả học, ở lại choooo tôiiiiii");
}

// Bài tập.
// 1) tính chỉ số BMI
let m=Number(prompt("Nhập vào chiều cao (m): "));
let kg=Number(prompt("Nhập vào cân nặng (kg)"));
  if (m <= 0 || kg <= 0 || isNaN(m) || isNaN(kg)) {
   alert("Dữ liệu không hợp lệ");
  } else {
    let BMI= kg/Math.pow(m,2);
if(BMI<15){
  alert("Thân hình quá gầy");
}else if(BMI>=15 && BMI<18.5){
  alert("Thân hình hơi gầy");
}else if(BMI>=18.5 && BMI<25){
  alert("Thân hình bình thường");
}else if(BMI>=25 && BMI<30){
  alert("Thân hình hơi béo");
}else if(BMI>=30 && BMI<35){
  alert("Thân hơi béo");
}else if(BMI>=35){
  alert("Thân hình quá béo");
}
}