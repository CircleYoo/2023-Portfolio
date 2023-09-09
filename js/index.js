AOS.init();



// (시작) 햄버거 버튼 열림/닫힘
const $hamBtn = document.querySelector(".hamburger");
const $hamSpan = document.querySelector(".hamburger_box");
const $menu = document.querySelector(".fullscreen_menu");
const $linkArea = document.querySelectorAll(".fullscreen_menu > .link_area a");

$hamBtn.addEventListener("click", function () {
  $hamSpan.classList.toggle("active");
  $menu.classList.toggle("on");
});
// (끝) 햄버거 버튼 열림/닫힘

const $rotateIcon = document.querySelector(".rounded_shape > img");
function scrollRotate() {
  $rotateIcon.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
}
window.addEventListener("scroll", function () {
  let pos = window.scrollY;
  scrollRotate();
});

// (시작) 모바일 필터 버튼 보이기
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
// (끝) 모바일 필터 버튼 보이기

// (시작) 배경 원근감 효과
const paraGroup = document.querySelector(".para_group");
const deco1 = document.querySelector(".deco-1");
const deco2 = document.querySelector(".deco-2");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const speedFactor = 0.1; // 천천히 올라가는 이미지의 속도 조절

  // 이미지가 천천히 올라가도록 설정
  deco1.style.transform = `translateY(-${scrollPosition}px)`;
  deco2.style.transform = `translateY-(${scrollPosition * speedFactor}px)`;
});
// (끝) 배경 원근감 효과

// (시작) 프로젝트 리스트 가져오기
const swProjectWrapper = document.querySelector(".project_area");

let projectList = null;
function getProjectData() {
  fetch("data/data.json")
    .then((res) => res.json())
    .then((result) => {
      projectList = result;
      makeProjectList(result.projects);
    })
    .catch((err) => console.log("project 가져오기 실패", err));
}

function makeProjectList(items) {
  swProjectWrapper.innerHTML = null;
  items.forEach((item) => {
    const result = makeProjectsItem(item);
    swProjectWrapper.appendChild(result);
  });
}

function makeProjectsItem(item) {
  const div = document.createElement("div");
  div.classList.add("project_item");

  // 키워드 각각 <span> 태그로 가져오기
  const keyword = item.keyword
    .map((keyword) => `<span class="keyword">${keyword}</span>`)
    .join("");

  // review, github, origin 링크 조건부 출력
  let review = item.review
    ? `<a href="${item.review}" target="_blank">Review</a>`
    : "";
  let github = item.github
    ? `<a href="${item.github}" target="_blank">Gihub</a>`
    : "";
  let origin = item.original
    ? `<a href="${item.original}" target="_blank">Original</a>`
    : "";

  div.innerHTML = `
    <div class="img_wrap">
      <img class="item_img" src="${item.img}" alt="${item.alt}">
      <div class="img_hover">
        <div class="more_link">
          ${review}
          ${github}
          ${origin}
        </div>
        <a href="${item.create}" class="link" target="_blank">
          <img src="./img/arrow_small.svg" alt="바로가기">
          <span>view</span>
        </a>
      </div>
    </div>
    <h3 class="projects_title">${item.title}</h3>
    <span>${item.text}</span>
    <div class="projects_desc">
      <span class="contribution">기여도 ${item.contribution}%</span>
      <span class="keyword_area">${keyword}</span>
    </div>
  `;
  //
  return div;
}

getProjectData();
// (끝) 프로젝트 리스트 가져오기

// (시작) 그래픽 swiper
// (시작) 그래픽 swiper
const swGraphicWrapper = document.querySelector(".swiper-wrapper");

let graphicList = null;
function getGraphicData() {
  fetch("data/data.json")
    .then((res) => res.json())
    .then((result) => {
      graphicList = result;
      makeGraphicList(result.graphics);
    })
    .catch((err) => console.log("graphic 가져오기 실패", err));
}
function makeGraphicList(items) {
  swGraphicWrapper.innerHTML = "";
  items.forEach((item) => {
    const result = makeGraphicItem(item);
    swGraphicWrapper.appendChild(result);
  });
}
function makeGraphicItem(item) {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");

  // img-group 출력하기
  if (item["img-group"]) {
    const imgGroup = item["img-group"];
    const groupWrapper = document.createElement("div");
    groupWrapper.classList.add("img_group");

    imgGroup.forEach((img) => {
      const imgElement = document.createElement("div");
      imgElement.classList.add("graphic");

      imgElement.innerHTML = `
        <img src="${img.img}" alt="${img.alt}">
        <picture class="desc_area">
          <span>${img.desc}</span>
        </picture>
      `;

      groupWrapper.appendChild(imgElement);
    });

    div.appendChild(groupWrapper);
  } else {
    // 일반 출력
    div.innerHTML = `
    <div class="graphic">
      <img src="${item.img}" alt="${item.alt}">
      <picture class="desc_area">
        <span>${item.desc}</span>
      </picture>
    </div>
    `;
  }
  return div;
}
const mySwiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  height: 430,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  slidesOffsetBefore: 70,
  slidesOffsetAfter: 70,
  // grid: {
  //   rows: 2,
  //   column: 2,
  //   fill: "row",
  // },
  // breakpoints: {
  //   768: {
  //     spaceBetween: 10,
  //     slidesPerView: 5,
  //     slidesPerGroup: 5,
  //     grid: {
  //       rows: 2,
  //     },
  //   },
  //   1024: {
  //     spaceBetween: 32,
  //     slidesPerView: 3,
  //     // 화면당 3개씩 슬라이드 이동
  //     slidesPerGroup: 3,
  //     grid: {
  //       rows: 1,
  //     },
  //   },
  //   1280: {
  //     spaceBetween: 26,
  //     slidesPerView: 4,
  //     // 화면당 4개씩 슬라이드 이동
  //     slidesPerGroup: 4,
  //     grid: {
  //       rows: 1,
  //     },
  //   },
  // },
});

getGraphicData();
// (끝) 그래픽 swiper

// (시작) goTop 버튼 클릭 시, 최상단 이동
const $goTop = document.querySelector(".go_top");
$goTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// (끝) goTop 버튼 클릭 시, 최상단 이동
