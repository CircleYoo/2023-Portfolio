// header button
const $hamBtn = document.querySelector(".hamburger_box");
const $menu = document.querySelector(".fullscreen_menu");
const $linkArea = document.querySelectorAll(".fullscreen_menu > .link_area a");

$hamBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  $menu.classList.toggle('on');
})

// $linkArea.forEach(element => {
//   element.addEventListener('click', function () {
//     $menu.classList.remove("on");
//   })
// });
console.log($linkArea);

const $rotateIcon = document.querySelector(".rounded_shape > img");
function scrollRotate() {
  $rotateIcon.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
}
window.addEventListener("scroll", function () {
  let pos = window.scrollY;
  scrollRotate();
})

