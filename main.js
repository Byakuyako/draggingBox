let div1 = document.createElement("div");
div1.className = "demo";

document.body.appendChild(div1);

let dragging = false;

div1.onmousedown = function () {
  dragging = true;
};

document.body.onmousemove = function (e) {
  if (dragging === true) {
    div1.style.left = e.clientX + "px";
    div1.style.top = e.clientY + "px";
  }
};

div1.onmouseup = function () {
  dragging = false;
};
