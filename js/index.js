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

// 모바일 필터 버튼 보이기
const $optionBtn = document.querySelector('.label');
const $optionBtnSpan = document.querySelector(".more_btn span");
const $option = document.querySelector('.option_list');

$optionBtn.addEventListener('click', function () {
  console.log('ddd');
  $option.classList.toggle('on');
  $optionBtnSpan.classList.toggle("on");
})

