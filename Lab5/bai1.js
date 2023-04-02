var taskList = [];
const btnAdd = document.querySelector(".js-add");

btnAdd.addEventListener("click", add);

function add() {
  const name = document.querySelector(".js-nametask").value;
  const mota = document.querySelector(".mota").value;

  var item = {
    nametask: name,
    motatask: mota,
  };

  if (name === "" || mota === "") {
  } else {
    taskList.push(item);
    render();
    document.querySelector(".js-nametask").value = "";
    document.querySelector(".mota").value = "";
  }
}

function render() {
  let form = ``;
  for (let i = 0; i < taskList.length; i++) {
    form += `<div class="hang">
    <span class="id">${i + 1}</span>
    <span class="name">${taskList[i].nametask}</span>
    <span class="motatask">${taskList[i].motatask}</span>
      <button class="js-edit" data-index="${i}" >Edit</button>
      <button class="js-delete" data-index="${i}">Delete</button>
    </div>`;
  }
  document.querySelector(".box").innerHTML = form;

  // Lấy danh sách các nút Edit và Delete sau khi render lại
  const btnEdits = document.querySelectorAll(".js-edit");
  const btnDeletes = document.querySelectorAll(".js-delete");

  // Thêm sự kiện click cho các button edit và delete
  for (let i = 0; i < btnEdits.length; i++) {
    btnEdits[i].addEventListener("click", edit);
  }
  for (let i = 0; i < btnDeletes.length; i++) {
    btnDeletes[i].addEventListener("click", deleteTask);
  }
}

btnAdd.addEventListener("mouseover", function () {
  const name = document.querySelector(".js-nametask").value;
  const mota = document.querySelector(".mota").value;
  if (name === "" || mota === "") {
    btnAdd.style.transform = "translateX(-100px)";
  }
});

btnAdd.addEventListener("mouseout", function () {
  btnAdd.style.transform = "translateX(0px)";
});

function edit(event) {
  const index = event.target.dataset.index;
  const name = prompt("Edit task name", taskList[index].nametask);
  const mota = prompt("Edit task description", taskList[index].motatask);

  if (name !== null && mota !== null) {
    taskList[index].nametask = name;
    taskList[index].motatask = mota;
    render();
  }
}

function deleteTask(event) {
  const index = event.target.dataset.index;
  taskList.splice(index, 1);
  render();
}
