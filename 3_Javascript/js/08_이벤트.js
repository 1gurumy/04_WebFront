/* 인라인 이벤트 모델 확인하기 */ 
function check1(btn) {    // 변수명을 this로 지정하지 않아도 this를 의미함.
  console.log(btn);
// <button onclick="check1(this)" style="background-color: yellow;"> 인라인 이벤트 모델 확인 </button>
// this(btn) == 이벤트가 일어난 버튼 태그 그 자체
// -> 매개변수 btn == 클릭한 버튼(this)

// 클릭할 때마다 노란색 - 분홍색 - 노란색 - 분홍색으로 바뀌도록하기
// 1. 현재 버튼 요소의 배경색을 얻어와 저장
const bgColor = btn.style.backgroundColor;

// 버튼이 클릭 될 때마다 pink <-> yellow 변경
if(bgColor == "yellow") {
  btn.style.backgroundColor = "pink";
} else {
  btn.style.backgroundColor = "yellow";
}

}

//--------------------------------------

// 고전 이벤트 모델 확인

// id가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");

// ** 고전 이벤트 모델 작성법 **
// 요소.이벤트리스너 = 이벤트핸들러 

                  // 익명함수 전달
test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

// 고전 이벤트 모델 제거하기

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트리스너의 이벤트 핸들러 제거하기
document.querySelector("#test1-2").onclick = function() {

  // 기존 onclick 의 이벤트핸들러(함수)를 없애려면
  // null로 덮어씌우면 됨.(이벤트 제거)
  test1a.onclick = null;
  alert("왼쪽 버튼 이벤트 제거됨");

};

// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// #test1-3 요소가 클릭되었을 때 배경색 빨간색으로 변경
test1c.onclick = function() {
  test1c.style.backgroundColor = "red";
};

// onclick 기능이 추가되는 것이 아니라 위에 것 덮어쓰기 됨.
test1c.onclick = function() {
  test1c.style.color = "white";
};
// -> onclick에 저장된 값이 덮어씌워지면서
// 이전 코드(배경색 red)가 사라지는 문제가 발생함.

// -------------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// *** 표준 이벤트 모델 작성법 ***
// 요소.addEventListener("이벤트 종류", 이벤트핸들러(함수));

test2.addEventListener("click", function() {

  // 투명도 1 (불투명) -> 0 (투명)      0.1씩 감소시키기

  // 현재 #test2의 투명도 확인
  let curr = test2.style.opacity;

  console.log(curr);

  // 맨처음에는 투명도가 빈문자열 형태 ""  -> 1 대입
  if(curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 아닐 때 투명도를 0.1씩 감소시키기
  test2.style.opacity = curr - 0.1;

  // 투명도가 0(완전히 투명)이 되면 다시 1(불투명)이 되도록 되돌리기
  if(test2.style.opacity == 0) {
    test2.style.opacity = 1;
  }
});





// #test2 요소를 클릭하면 클릭 횟수를 카운트하는 이벤트 작성
let count = 0;

test2.addEventListener("click", function() {

  count++;  // 카운트 1 증가

  // 표준 이벤트 모델의 이벤트 핸들러 내부에서 this
  // == 이벤트가 발생한 요소
  this.innerText = count;
});

// ---------------------------------------------------------

/*
function color() {
  const box = document.querySelector("#box3");
  const input = document.querySelector("#input3");

  box.style.backgroundColor = input.value;

  document.querySelector("#input3")
.addEventListener("keyup", function(e) {  // keydown / keyup 로 각각 바꿔서 input창에 입력하고 콘솔창 확인
  console.log("키보드 떼어짐"); 

  // e : 이벤트 객체 (발생한 이벤트의 모든 정보를 담고있는 객체)
  console.log(e);

             //  K : V 형태 
  if(e.key == "Enter") { // code는 key에 해당함. -->  key에 해당하는 value값이 "Enter"라면
  color();
  }
 
});
};*/

const input3 = document.querySelector("#input3");
const box3 = document.querySelector("#box3");

// input3이 이벤트가 일어날 대상/ 이벤트 종류:keyup
input3.addEventListener("keyup", function(e) {

  if(e.key == "Enter") {
    box3.style.backgroundColor = input3.value;
  }
});

// 클릭 이벤트가 일어날 대상 : box3
box3.addEventListener("click", function() {

  // e.target : 이벤트가 발생한 대상 요소 == this

  alert(`배경색 : ${this.style.backgroundColor}`);
                // == e.target.style.backgroundColor
                // == box3.style.backgroundColor
});