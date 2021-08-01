const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

console.log({
  burger,
  close,
  menu,
});
burger.addEventListener("click", () => {
  menu.style.display = "contents";
  close.style.visibility = "visible";
  burger.style.visibility = "hidden";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  close.style.visibility = "hidden";
  burger.style.visibility = "visible";
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width:700px)").matches) {
    menu.style.display = "contents";
    close.style.visibility = "hidden";
    burger.style.visibility = "hidden";
  }
});
