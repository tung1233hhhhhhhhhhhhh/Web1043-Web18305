const input = document.querySelector(".input");
const myButtons = Array.from(document.querySelectorAll(".js-button"));
var bien = null;
var bien1;

function clickButton() {
  if (this.innerHTML === "Delete") {
    input.value = input.value.slice(0, -1); // Xóa đi 1 ký tự cuối cùng
  } else if (
    this.innerHTML === "+" ||
    this.innerHTML === "-" ||
    this.innerHTML === "x" ||
    this.innerHTML === ":"
  ) {
    bien = this.innerHTML;
    num1 = parseInt(input.value);
    input.value = "";
  } else if (this.innerHTML === "=") {
    bien1 = this.innerHTML;
    num2 = parseInt(input.value);
    var cong = "+";
    var tru = "-";
    var nhan = "x";
    var chia = ":";
    if (bien === cong) {
      var result = num1 + num2;
    } else if (bien === tru) {
      var result = num1 - num2;
    } else if (bien === nhan) {
      var result = num1 * num2;
    } else if (bien === chia) {
      var result = num1 / num2;
      result = result.toFixed(2);
    }
    input.value = result;
    bien = null; // Đặt lại biến 'bien' để chờ phép tính tiếp theo
  } else {
    if (bien1 === "=") {
      input.value = "";
      bien1 = "";
    }
    if (bien === null) {
      input.value += this.innerHTML;
    } else {
      input.value += this.innerHTML; // Thêm giá trị của button vào input
    }
  }
}
for (const myButton of myButtons) {
  myButton.addEventListener("click", clickButton);
}
