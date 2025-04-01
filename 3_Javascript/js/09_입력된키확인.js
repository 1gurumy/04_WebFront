// 문자열.toLowerCase() : 영어로 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// const q = document.querySelector(".key-box > div:nth-of-type(1)");
// const w = document.querySelector(".key-box > div:nth-of-type(2)");
// const e = document.querySelector(".key-box > div:nth-of-type(3)");
// const r = document.querySelector(".key-box > div:nth-of-type(4)");

// const q = document.querySelector(".key-box > div:nth-child(1)");
// const w = document.querySelector(".key-box > div:nth-child(2)");
// const e = document.querySelector(".key-box > div:nth-child(3)");
// const r = document.querySelector(".key-box > div:nth-child(4)");



const keys = document.querySelectorAll(".key");
console.log(keys);

// 화면(문서자체)에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function(e) {
  console.log(e.key);
  let idx; // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
  switch(e.key.toLocaleLowerCase()) {
    case 'q' : idx = 0; break;
    case 'w' : idx = 1; break;
    case 'e' : idx = 2; break;
    case 'r' : idx = 3; break;
    default : return; // q, w, e, r 외의 키 누르면 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
  keys[idx],style.backgroudColor = "deepPink";
});





// // 화면(문서자체)에서 키가 떼어지는 걸 감지했을 때
// document.addEventListener("keyup", function(e) {
//   // console.log(e.key);
//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toLocaleLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // q, w, e, r 외의 키 누르면 함수 종료
//   }

//   // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
//   keys[idx],style.backgroudColor = "white";
// });


// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changekeyColor(e, color) {
                        // 매개변수 e : 이벤트 종류 객체
                        // 매개변수 color : 색상

  const keyMap = { 'q' : 0, 
                   'w' : 1, 
                   'e' : 2, 
                   'r' : 3};                        

   const idx = keyMap[];                


 }


 // 키가 눌렸을 때 실행
 document.addEventListener("keydown", (e) => changekeyColor(e, "deepPink") );
//  == document.addEventListener("keydown", function(e) {changekeyColor(e)})
























 /*   
document.addEventListener("keydown", function(e){

  if(e.key.toUpperCase() === "Q") {
    q.style.backgroundColor = "red";
  }
});
  
document.addEventListener("keyup", function(e){

  if(e.key.toUpperCase() === "Q") {
    q.style.backgroundColor = "white";
  }
});

document.addEventListener("keydown", function(e){

  if(e.key.toUpperCase() === "W") {
    w.style.backgroundColor = "red";
  }
});
  
document.addEventListener("keyup", function(e){

  if(e.key.toUpperCase() === "W") {
    w.style.backgroundColor = "white";
  }
});


document.addEventListener("keydown", function(e){
  if(e.key.toUpperCase() === "E") {
    e.style.backgroundColor = "red";  // E 키에 해당하는 요소 선택
  }
});

document.addEventListener("keyup", function(e){
  if(e.key.toUpperCase() === "E") {
    e.style.backgroundColor = "white";  // E 키에 해당하는 요소 선택
  }
});
*/