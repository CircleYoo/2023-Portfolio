// header button
const $hamBtn = document.querySelector(".hamburger_box");
const $menu = document.querySelector(".fullscreen_menu");
const $linkArea = document.querySelectorAll(".fullscreen_menu > .link_area a");

$hamBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  $menu.classList.toggle("on");
});

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
});

// 모바일 필터 버튼 보이기
const $label = document.querySelector(".label");
const $labelTitle = $label.querySelector("h3");
const $moreBtn = document.querySelector(".more_btn span");
const $option = document.querySelector(".option_list");
const $options = document.querySelectorAll(".option_item");

// 클릭한 옵션의 텍스트를 .label 안에 넣음
const handleSelect = (item) => {
  $labelTitle.innerHTML = item.textContent;
};


// 옵션 몰록이 열림/닫힘
const toggleOptions = () => {
  if ($option.classList.contains("on")) {
    $option.classList.remove("on");
    $moreBtn.classList.remove("on");
  } else {
    $option.classList.add("on");
    $moreBtn.classList.add("on");
  }
};

// 옵션 클릭시, 클릭한 옵션을 넘기고 열림/닫힘
$options.forEach((option) => {
  option.addEventListener("click", () => {
    handleSelect(option);
    toggleOptions();
  });
});

// 라벨 클릭시, 옵션 몰록이 열림/닫힘
$label.addEventListener("click", toggleOptions);
