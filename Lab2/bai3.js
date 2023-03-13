let fullName = prompt("Nhap ho va ten:");
let gioiTinh = prompt("Nhap gioi tinh:");

const fullName_list = fullName.split(" ");
if (gioiTinh.toLocaleLowerCase() === "nam") {
  document.writeln("Họ là : " + fullName_list[0].toLocaleUpperCase());
  document.write("<br>");
  document.writeln("Tên đệm là : " + fullName_list[1].toLocaleUpperCase());
  document.write("<br>");
  document.writeln("Tên là : " + fullName_list[2].toLocaleUpperCase());
  document.write("<br>");
  fullName_list[1] = "Văn";
  document.write("Giới tính: " + gioiTinh.toLocaleUpperCase());
  document.write("<br>");
  let newfull = fullName_list.join(" ");
  document.writeln("Tên thay đổi : " + newfull.toLocaleUpperCase());
} else if (
  gioiTinh.toLocaleLowerCase() === "nữ" ||
  gioiTinh.toLocaleLowerCase() === "nu"
) {
  document.writeln("Họ là : " + fullName_list[0].toLocaleUpperCase());
  document.write("<br>");
  document.writeln("Tên đệm là : " + fullName_list[1].toLocaleUpperCase());
  document.write("<br>");
  document.writeln("Tên là : " + fullName_list[2].toLocaleUpperCase());
  document.write("<br>");
  fullName_list[1] = "Vẽ";
  document.write("Giới tính: " + gioiTinh.toLocaleUpperCase());
  document.write("<br>");
  let newfull = fullName_list.join(" ");
  document.writeln("Tên thay đổi : " + newfull.toLocaleUpperCase());
} else {
  document.write("?");
}

// let newfull = fullName_list.join(" ");

// document.writeln("Tên mới của bạn là: " + newfull);
