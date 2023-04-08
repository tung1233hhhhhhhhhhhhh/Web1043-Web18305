const items = document.querySelectorAll(".column");

for (const item of items) {
  item.setAttribute("draggable", true);
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("itemid", e.target.id);
  });
}

const bin = document.querySelector("#bin");
bin.addEventListener("dragover", (e) => {
  e.preventDefault();
});

bin.addEventListener("drop", (e) => {
  let itemid = e.dataTransfer.getData("itemid");
  e.target.appendChild(document.getElementById(itemid));
});
