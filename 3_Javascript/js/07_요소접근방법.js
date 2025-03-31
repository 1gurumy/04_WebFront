// 클래스 접근 테스트
function classTest() {

  // 유사 배열이란?
  // 배열처럼 index, length를 가지고 있으나
  // 배열 전용 기능(메서드)를 제공하지 않음.
  // 배열 전용 기능 : pop(), push(), map(), filter() 등..을 제공하지 않음.
  // HTMLCollection, NodeList 는 유사 배열임.

  // .cls-test 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");


  console.log(divs);
  // HTMLCollection(3) [div.cls-test, div.cls-test, div.cls-test]

  // divs 0, 1, 2 째 요소에 각각 배경색 변경하기

  divs[0].style.backgroundColor = "rgb(114, 203, 80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "deepPink";

}

// 태그명으로 요소 접근하기
function tagNameTest() {

  const tagList = document.getElementsByTagName("li");

  console.log(tagList);
  // HTMLCollection(5) [li, li, li, li, li]

  for(let i = 0; i < tagList.length; i++) {

    console.log(tagList[i].innerText);

    tagList[i].style.backgroundColor = tagList[i].innerText;
  }

}

/*
HTMLCollection : 동적 Collection 
-> DOM에서 변경 일어날 시 HTMLCollection에서도 자동 업데이트 됨.
-> getElementsByTagName(), getElementsByClassName()

NodeList : 정적 Collection
-> DOM에서 변경이 일어나는 것과 무관함.
-> getElementsByName(), querySelectorAll()
*/ 


// name으로 요소 접근하기
function nameTest() {
  // name 속성값이 hobby인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList);
  // NodeList(6) [input#game, input#music, input#movie, input#coding, input#exercise, input#book]

  let str = ""; // 체크된 값 누적할 문자열
  let count = 0; // 체크된 수 카운트할 변수

  // 전체 순회하면서 체크 여부 따져주기
  for(let i = 0; i < hobbyList.length; i++) {

    // .checked : checkbox와 radio의 전용 속성
    // input요소.checked 
    // -> 요소가 체크되어있다면 true, 아니면 false 반환
    // input요소.checked = true; -> 해당 요소를 체크하겠다. 언체크 되어있어도 체크표시로 변경됨.
    // input요소.checked = false; -> 체크가 되어있어도 해당 요소가 체크 해제됨.

    if(hobbyList[i].checked) {
      str += hobbyList[i].value + " ";  // "음악감상 독서 코딩 ..."
      count++;
    }
  }

  // #name-div인 요소에 내용으로 결과를 출력
  // document.getElementById("name-div").innerText
    // = `${str} <br><br>선택된 취미 개수 : ${count}`; 
    // div 태그 사이에 `${str} <br><br>선택된 취미 개수 : ${count}` 을 문자열로 대입함.
    // 순수 문자열만 있을 경우 innerText 사용

    document.getElementById("name-div").innerHTML
    = `${str} <br><br>선택된 취미 개수 : ${count}`; 
    // <div>태그 사이에 `${str} <br><br>선택된 취미 개수 : ${count}`;문자열이 html 문자로 해석되어 대입됨.
    // 문자열 사이에 html 코드가 있을 경우 innerHTML을 사용

    // 요소.innerHTML
    // HTML 태그를 포함하여 문자열 등을 실제 HTML 요소로 해석함.

    // 요소.innerText
    // 요소 콘텐트 내부에 단순 텍스트로만 출력함. (HTML 코드로 해석 안 해줌).
}

function cssTest() {

  // target-div 속성값이 "css-div" 요소에 접근
  const container = document.querySelector("[target-div='css-div']");

  // 요소의 테두리 변경
  container.style.border = "10px solid red";

  // 첫번째 자식 div 접근해서 
  // 내용을 "CSS선택자로 선택해서 값 변경됨" 변경해보기
  const div1 = document.querySelector("[target-div='css-div'] > div");
  div1.innerText = "CSS선택자로 선택해서 값 변경됨";

  const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
  div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div 한 번에 선택하기(배열로 얻어오기)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");

  console.log(divList);
  // NodeList(2) [div, div]

  // index를 이용해서 요소 하나씩 접근
  divList[0].style.fontFamily = "궁서체";
  divList[1].style.fontSize = "20px";

  for(let i = 0; i < divList.length; i++) {
    divList[i].onclick = function() {
      alert(`${i} 번째 요소 입니다!`);
    }
  }

}

// 카카오톡 채팅 화면 만들기
function readValue() {

  // 채팅이 출력되는 배경 요소 얻어오기
  const bg = document.querySelector("#chatting-bg")
  
  // 채팅 내용 입력 input 요소
  const input = document.querySelector("#user-input");

  // 입력된 값이 없을 경우
  // 1) 진짜 안 적은 경우
  // 2) 공백만 적은 경우

  // 문자열.trim() : 문자열 좌우 공백 제거  
  if(input.value.trim().length == 0) {  // 아무것도 안 적거나 공백만 적은 경우
    alert('채팅 내용을 입력해주세요');

    input.value = ""; // 이전 input에 작성된 값 비우기

    input.focus();  // 해당 input창에 커서 활성화

    return; // 아래 수행하지 않고, 현재 수행중인 함수 종료하고 호출한 곳으로 돌아감.
  }

  // 입력된 값이 있을 경우

  bg.innerHTML += `<p><span>${input.value}</span></p>` 
  // 그냥 대입(=)해버리면 기존에 있던 채팅내역 사라짐(덮어쓰기 되어버림)

  // 스크롤 맨 아래에 고정하기 (공식)
  bg.scrollTop = bg.scrollHeight;

  // bg.scrollTop : 현재 스크롤의 위치를 반환환
  // (스크롤이 현재 얼마만큼 내려와 있는지를 나타냄)

  // bg.scrollHeight : bg의 스크롤 전체 높이
  // (스크롤 바를 이용해 스크롤 할 수 있는 전체 높이)

  console.log(bg.scrollTop);
  console.log(bg.scrollHeight);

  input.value = "";
}

/* 
아이디가 user-input인 input 요소에서
키가 올라오는 동작이 발생했을 때(감지되었을 때)
올라온 키가 "Enter" 키 이면 readValue() 함수를 호출하는 스크립트 작성
*/

// keydown : 키가 눌러졌을 때 (꾹 누르고 있으면 계속 인식됨.)
// keyup : 눌러지던 키가 올라왔을 때(손가락으로 누르던 키를 뗐을 때)(1회만 인식함.)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {  // keydown / keyup 로 각각 바꿔서 input창에 입력하고 콘솔창 확인
  console.log("키보드 떼어짐"); 

  // e : 이벤트 객체 (발생한 이벤트의 모든 정보를 담고있는 객체)
  console.log(e);

             //  K : V 형태 
  if(e.key == "Enter") { // code는 key에 해당함. -->  key에 해당하는 value값이 "Enter"라면
  readValue();
  }

});