const input = document.querySelector(".input");
const myButtons = Array.from(document.querySelectorAll(".js-button"));
var bien = null;

function clickButton() {
  if (this.innerHTML === "Delete") {
    input.value = input.value.slice(0, -1); // Xóa đi 1 ký tự cuối cùngs
  } else if (
    this.innerHTML === "+" ||
    this.innerHTML === "-" ||
    this.innerHTML === "x" ||
    this.innerHTML === ":"
  ) {
    bien = this.innerHTML;
    num1 = parseInt(input.value);
    input.value = "";
    // console.log(this.innerHTML);
  } else if (this.innerHTML === "=") {
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
    // bien = null;
  } else {
    input.value += this.innerHTML; // Thêm giá trị của button vào input
  }
}

for (const myButton of myButtons) {
  myButton.addEventListener("click", clickButton);
}
