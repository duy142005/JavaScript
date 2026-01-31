// // Continue vaf break

// // break: thường được dùng để thoát một vòng lặp.
// // continue: dùng để bỏ qua 1 giá trị trong vòng lặp.

// // break
// let n = 0;
// while (n < 100) {
//   n++;
//   if (n === 4) {
//     break;
//   }
//   console.log(n);
// }

// // continue
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// // bài tập:
// // 1) viết chương trình nhập vào số nguyên n, in ra kết quả n!.
// let a = Number(prompt("Nhập số nguyên n:"));
// let giaiThua = 1;
// // for(let i=1; i<=a;i++){
// //     giaiThua *= i;
// // }
// // console.log("Giai thừa của", a, "là:", giaiThua);
// let i = 1;
// while (i <= a) {
//   giaiThua *= i;
//   i++;
// }
// console.log("Giai thừa của", a, "là:", giaiThua);

// // viết chương trình nhập số a từ bàn phím nếu a chẵn thì tính tổng chẵn
// // từ 0 đến a, còn nếu lẻ thì in ra dòng " tôi ko tính lẻ bye bye".
// let b = Number(prompt("Nhập số a: "));
// let tong = 0;
// if (b % 2 === 0) {
//   for (let i = 0; i <= b; i += 2) {
//     tong += i;
//   }
//   console.log("Tổng các số chẵn từ 0 đến", b, "là:", tong);
// } else {
//   console.log("Tôi ko tính tổng số lẻ...bye bye!");
// }

// // viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
// // a) nhập n=7, bỏ qua ko cộng tổng vs 3 => in ra kết quả.
// // b) thử break khi vòng lặp chạy đến gia trị 3.

// let d = Number(prompt(" Nhập n: "));
// let tongSoLe = 0;
// for (let i = 1; i <= d; i += 2) {
//   if (i === 3) {
//     continue;
//   }
//   tongSoLe += i;
// }
// console.log("Tổng số lẻ từ 1 đến", d, "(bỏ 3) là:", tongSoLe);

// // viết chương trình tìm những số chia hết cho 3 từ 10 đến 50.
// let result = "";
// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     result += i + ", ";
//   }
// }
// console.log("Những số chia hết cho 3 từ 10 đến 50 là:", result);
// // đếm có bao nhiêu giá trị
// let count = 0;
// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     count++;
//   }
// }
// console.log(`có ${count} số chia hết cho 10 đến 50.`);

// // viết chương trình tính tổng S=1!+2!+3!+...10!.
// let total = 0;
// let giaThua = 1;
// let j = 1;
// while (j <= 10) {
//   giaThua *= j;
//   total += giaThua;
//   j++;
// }
// console.log("Tổng S=1!+2!+...+10! là:", total);
// // cách 2:
// let sum = 0;
// for (let n = 1; n <= 10; n++) {
//   let gt = 1;
//   for (let j = 1; j <= n; j++) {
//     gt *= j;
//   }
//   sum += gt;
// }
// console.log("tổng S = " + sum);
// // tìm tất cả các số hoàn hảo từ 1 đến 1000.
// // kiểm tra xem 1 giá trị bất kì có phải là số hoàn hảo ko
// let q = 6;
// let Tong = 0;
// for (let i = 1; i < q; i++) {
//   if (q % i === 0) {
//     console.log(i);
//     Tong += i;
//   }
// }
// console.log(Tong);
// // tìm 1 đến 1000.
// for (let n = 1; n < 1000; i++) {
//   let kq = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       tong += i;
//     }
//   }
//   // so sánh xem tổng ước thực có bằng n hay ko.
//   if (kq === n) {
//     console.log(n);
//   }
// }
// kiểm tra số nguyên tố.(lớn hơn 1 và chỉ chia hết cho 1 và chính nó).

while (true) {
  let nt = Number(prompt("nhập một số a: "));
  // kiểm tra xem có là sô nguyên dương ko.
  while (!Number.isInteger(nt) || nt <= 0) {
    nt = Number(prompt("nhập lại số a, a ko phải là số nguyên dương."));
  }
  // kiểm tra điều kiện có chia hết chi 1 và chính nó ko
  let isPrime = true;
  for (let i = 2; i < nt; i++) {
    if (nt % i === 0) {
      isPrime = false;
      break;
    }
  }
  // kiểm tra xem số đó có là số nguyên tố ko
  if (isPrime) {
    alert(nt + " là số nguyên tố");
  } else {
    alert(nt + " ko là số nguyên tố");
  }
  // hỏi người dùng có muốn tiếp tục hay ko
  let answer = prompt(`
  Bạn có muốn tiếp túc ko.
    nếu ko thì bấm "next" để thoát 
    còn ko thì bấm phím bất kì.`);
  if (answer === "next") {
    break;
  }
}
