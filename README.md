# 2023-Portfolio

2023 포트폴리오 - 반응형 웹사이트<br/>
**배포주소** : <https://jeongwon.site/> <br/> <br/>
<img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/73b099ae-5493-4f53-be6c-5fa46430bde6" width="100%"/>


### 💼 작업기간
> 1인 제작 <br/>
  2023.08월 말 ~ 2023.09.16 (약 3주)

### ⚙ 개발환경
> `JavaScript(ES6)` <br/>
  `HTML5` <br/>
  `SCSS`

## 📌 주요기능
### 비주얼
* **타이틀** : AOS, vivus 라이브러리를 이용해 모션 추가
  <img src="https://github.com/CircleYoo/2023-Portfolio/blob/master/assets/visual-animation.gif" width="80%"/>
  
* **svg 스크롤 이벤트** : 속도에 따라 `transformY` 바꾸기
  <img src="https://github.com/CircleYoo/2023-Portfolio/blob/master/assets/visual-scroll-svg.gif" width="80%"/> <br/>
  <img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/b9a312dd-08fd-4157-98e7-f2a0092cc690" width="80%"/> <br/>


### ✔ 프로젝트 <br/>
   <img src="https://github.com/CircleYoo/2023-Portfolio/blob/master/assets/projects-filter.gif" width="80%"/>

* **아이템 필터링**
  * `getAttribute`를 사용해 클릭된 버튼의 `data-filter`속성을 읽은 후, 해당 필터 값을 저장
  * <img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/7ba8071e-26df-44fd-b6eb-849b98a4b7c3" width="80%"/> <br/>

* **필터 버튼 클릭 시, 투명도 조절**
  * **scss** <br/>
  <img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/08672423-3367-45a9-b8f2-2de611ba2573" width="80%"/> <br/>
  * **js** <br/>
  <img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/3c857bb7-05f2-4704-a97d-52f641aa5327" width="80%"/> <br/>
  * 버튼 클릭 시, .project_area에 fade-out 클래스 추가
  * `setTimeout`을 이용해 250ms 뒤에 fade-out 클래스 삭제
       
* **( 앨범형 / 리스트형 ) 보기 방식 변경**
  <img src="https://github.com/CircleYoo/2023-Portfolio/assets/87813501/071dbfbe-f0dc-478e-b548-4956e071e656" width="80%"/> <br/>
  * `data-view`로 데이터 속성값 지정
  * `getAttribute`를 사용해 클릭된 버튼의 "data-view"속성을 읽은 후, 해당 필터 값을 저장
  * view가 "list"면 클래스 list 추가, 그렇지 않으면 클래스 list 삭제
 
* **모바일형 필터 버튼** <br/>
  <img src="https://github.com/CircleYoo/2023-Portfolio/blob/master/assets/mobile-filter.gif" width="40%"/>
  * 768px 이하일 경우, mb_mobile로 전환
  * 라벨에 클릭한 옵션의 텍스트로 교체
 
### ✔ 전체
* **페이지 키컬러 변경 이벤트**  <br/>
  <img src="https://github.com/CircleYoo/2023-Portfolio/blob/master/assets/color-change.gif" width="80%"/> <br/>
  * `setProperty()`를 이용해 기존 css 속성을 새로운 css 속성으로 설정
  * css에 `transition`을 주어 부드럽게 전환
