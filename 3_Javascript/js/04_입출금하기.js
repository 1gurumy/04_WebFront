// prompt 사용 연습

function test() {
  
  const password = prompt("비밀번호를 입력하세요.");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null 저장

  if(password == null) { // 취소
    alert("취소");
    
  } else { // 확인

    if(password == '1234') {    // 문자열 비교 시 '==' 연산자 사용
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치!")
    }
    
  }

}

// ----------------------------------------------------------

const output = document.getElementById("output");   // 잔액 출력 span 태그
const amount = document.getElementById("amount");   // 금액 작성 input 태그

let balance = 10000; // 잔액 기록 변수(초기값 10000원). 입/출금 할때마다 잔액이 변하므로 let
const pw = '1234';  // 비밀번호 저장 변수(비밀번호 1234)

output.innerText = balance; // 초기 금액을 화면에 출력

// 입금 함수
function deposit() {
 
  // 1. input에 입력된 금액 구하기
  console.log(amount.value.length); // 아무것도 입력 안 하고 입금 누르면 0출력됨.
  // input 안에 작성한 값은 value로 얻어옴

   
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요");

  } else if(amount.value <= 0) {
    alert("잘못 입력하셨습니다");

  } else {
    // 구한 금액을 잔액(balance)에 누적하기.
    balance += Number(amount.value);  // 누적이므로 += 연산자 사용
    // balance = balance + Number(amount.value);
   
    output.innerText = balance;
    // 화면에 잔액을 업데이트

    amount.value = '';  // input에 작성된 값 제거
  }

}




// 출금 함수
function withdrawal() {

  if(amount.value.length == 0) {
    alert("금액을 입력해주세요");

  } else if(amount.value <= 0) {
    alert("잘못 입력하셨습니다");

  } else {

    const password = prompt("비밀번호를 입력하세요.");


    if(password == null) {  // 취소 버튼 누름
      alert("취소");
    } else {  // 확인 버튼 누름

      // 비밀번확 일치하지 않는 경우
      if(password != pw) {
        alert("비밀번호가 일치하지 않습니다.");

      } else { // 일치하는 경우
        const money = Number(amount.value);

        // 출금할 금액이 잔액보다 큰 경우
        if(money > balance) {
          alert("출금 금액이 잔액보다 클 수 없습니다.");
          
          amount.value = '';

        } else { // 출금할 금액이 잔액보다 작거나 같은 경우
          
          balance -= money;
          // balance = balance = money;

          // 업데이트
          output.innerText = balance;

          // 급액 입력란 비우기.
          amount.value = '';

        
          // == alert(money + "원이 출금되었습니다. 남은 잔액 " + balance);
          alert(`${money}원이 출금되었습니다. 남은 잔액 ${balance}`);  
          // 탬플릿 리터럴 방식(Template Literal)
          // : 백틱(``)을 사용하여 문자열을 감싸고,
          // ${} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식

        }

      }
    }

/*
    if(password == '1234') {
      balance -= Number(amount.value);

      output.innerText = balance;
  
      amount.value = '';

      alert(amount + " 원 출금 완료되었습니다.");

    } else {

      alert("비밀번호 불일치!");
    }
    */
  }

}