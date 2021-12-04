let div1 = document.createElement("div");

div1.className = "demo";

document.body.appendChild(div1);

let dragging = false;

let lastX;
let lastY;

div1.onmousedown = function (e) {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
};

document.body.onmousemove = function (e) {
  if (dragging === true) {
    let top = parseInt(div1.style.top) || 0;
    let left = parseInt(div1.style.left) || 0;
    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;
    div1.style.left = left + deltaX + "px";
    div1.style.top = top + deltaY + "px";
    lastX = e.clientX;
    lastY = e.clientY;
  }
};

div1.onmouseup = function () {
  dragging = false;
};
