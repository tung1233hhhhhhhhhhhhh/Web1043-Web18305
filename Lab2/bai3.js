let fullName = prompt("Nhap ho va ten:");
let gioiTinh = prompt("Nhap gioi tinh:");

const fullName_list = fullName.split(" ");
document.writeln("Họ là : " + fullName_list[0].toLocaleUpperCase());
document.write("<br>");
document.writeln("Tên đệm là : " + fullName_list[1].toLocaleUpperCase());
document.write("<br>");
document.writeln("Tên là : " + fullName_list[2].toLocaleUpperCase());
document.write("<br>");
document.write("Giới tính: " + gioiTinh.toLocaleUpperCase());
if (gioiTinh.toLocaleLowerCase() === "nam") {
  document.write("<br>");

  fullName_list[1] = "Văn";
  var newfull = fullName_list.join(" ");
} else if (
  gioiTinh.toLocaleLowerCase() === "nữ" ||
  gioiTinh.toLocaleLowerCase() === "nu"
) {
  document.write("<br>");

  fullName_list[1] = "Vẽ";
  var newfull = fullName_list.join(" ");
} else {
  document.write("?");
}
document.writeln("Tên thay đổi : " + newfull.toLocaleUpperCase());
