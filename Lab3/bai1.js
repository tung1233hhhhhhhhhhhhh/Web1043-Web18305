function nhapDiem() {
  // let toan = parseFloat(prompt("Nhập điểm toán"));
  // if (toan < 0 || toan > 10) {
  //   alert("nhap lai");
  //   return nhapDiem();
  // }

  do {
    var maths = parseFloat(prompt("Nhập điểm toán"));
  } while (isNaN(maths) || maths < 0 || maths > 10);

  // let ly = parseFloat(prompt("Nhập điểm Lý"));
  // if (ly < 0 || ly > 10) {
  //   alert("nhap lai");
  //   return nhapDiem();
  // }

  do {
    var physical = parseFloat(prompt("Nhập điểm Lý"));
  } while (isNaN(physical) || physical < 0 || physical > 10);

  // let hoa = parseFloat(prompt("Nhập điểm Hóa"));
  // if (hoa < 0 || hoa > 10) {
  //   alert("nhap lai");
  //   return nhapDiem();
  // }

  do {
    var Chemistry = parseFloat(prompt("Nhập điểm Hóa"));
  } while (isNaN(Chemistry) || Chemistry < 0 || Chemistry > 10);

  // let sinh = parseFloat(prompt("Nhập điểm sinh"));
  // if (sinh < 0 || sinh > 10) {
  //   alert("nhap lai");
  //   return nhapDiem();
  // }

  do {
    var biology = parseFloat(prompt("Nhập điểm biology"));
  } while (isNaN(biology) || biology < 0 || biology > 10);

  let diemTb = parseFloat((maths + physics + Chemistry + biology) / 4);
  return diemTb;
}

function xepLoai2(diemTb) {
  if (10 >= diemTb && diemTb >= 9) {
    return "Giỏi";
  }
  if (9 > diemTb && diemTb >= 7) {
    return "Khá";
  }
  if (7 > diemTb && diemTb >= 5) {
    return "Trung Bình";
  }
  if (diemTb < 5) {
    return "Yếu";
  }
}

function xepLoai1(diemTb) {
  var diemTb = parseInt(diemTb);
  switch (diemTb) {
    case 1:
    case 2:
    case 3:
    case 4:
      return "Yếu";
      break;
    case 5:
    case 6:
      return "Trung Bình";
      break;
    case 7:
    case 8:
      return "Khá";
      break;
    case 9:
    case 10:
      return "Giỏi";
      break;
  }
}

do {
  var chon = parseInt(
    prompt(
      "Menu \n 1.Chức năng 1\n 2.Chức năng 2\n 0.Thoát\n Nhập chức năng bạn muốn chọn:"
    )
  );

  switch (chon) {
    case 1:
      var diemTb = nhapDiem();
      alert(
        `Điểm trung bình: ${diemTb.toFixed(2)}\nXếp loại: ${xepLoai1(diemTb)}`
      );
      break;
    case 2:
      var diemTb = nhapDiem();
      alert(
        `Điểm trung bình: ${diemTb.toFixed(2)}\nXếp loại: ${xepLoai2(diemTb)}`
      );
      break;
    case 0:
      break;
    default:
      let chon = prompt("nhap sai moi nhap lai");
      break;
  }
} while (chon != 0);
