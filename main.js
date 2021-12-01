let div1 = document.createElement("div");
div1.className = "demo";

document.body.appendChild(div1);

document.body.onclick = function (e) {
  console.log(e.clientX, e.clientY);
  // console.log(e);
  div1.style.left = e.clientX + "px";
  div1.style.top = e.clientY + "px";
};
