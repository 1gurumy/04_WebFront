
// 메뉴 주문하기
function check1() {

  // 메뉴 가격 설정
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트용 변수 선언
  let gCount = 0; // 김밥
  let rCount = 0; // 라면
  let dCount = 0; // 돈까스

  // prompt로 입력한 값을 저장할 변수 선언
  let input;  // 이 시점에서 undefined타입. 입력한 값이 계속 재대입 될 거라 let

  // 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자 : 값과 자료형이 모두 같은 경우)

  // undefined == null (== 로 비교 시 같은 값이라고 인식됨.)
  // undefined === null (자료형도 같은지 비교. undefined 자료형과 object가 같냐? -> false)

  // === -> 값, 자료형이 모두 같은 경우 true
  // !== -> 값, 자료형이 모두 다른 경우 true


  while(input !== null) { // 취소 누르기 전까지 반복

    input = prompt("메뉴 번호를 입력하세요!");

    switch(input) {
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력하세요");
    }

  }

  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);

  alert(`총 가격 : ${sum} 원`);

}

// ---------------------------------------------------------
// Up & Down Game
function startGame() {
  
  // 맞춰야하는 난수(1~200) 발생시켜 저장시켜두기.
  const answer = Math.floor(Math.random() * 200) + 1;
  // const answer = Math.floor( (Math.random() * 200) ) + 1;
  // 0 ~ 1 사이의 실수가 나옴. 거기 * 200하고 내림처리 후 + 1 하면 1~ 200 사이의 난수가 발생함.

  // 정답 시도 회수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str = "1부터 200사이 숫자 입력";

  while(true) { // 무한 반복

    let input = prompt(str);
  
    if(input === null) { // 취소 클릭 시 
      alert("게임 포기");
      break;

    }

    // 숫자 입력 후 확인 클릭 시 
    // 입력 받은 값을 숫자로 변환
    const value = Number(input); // 입력 받은 값 숫자로 변환

    // 숫자가 아닌 문자열 같이 잘못 입력한 경우
    // value에 NaN (Not a Number : 숫자가 아니다) 저장됨.
    // isNaN(값) : 값이 NaN이면 true 출력해줌.
    
    if( isNaN(value)) { // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해 주세요");
      continue; // 아래 코드 수행하지 않고 다음 반복으로 넘어감.
    }

    if(value < 1 || value > 200) { // 입력한 값이 범위를 초과한 경우
      alert("1 ~ 200 사이의 값만 작성해주세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 1 증가
    count++;

    // 정답인 경우 
    if(value === answer) {// answer : 난수로 만들어진 값  / value : 입력받은 값
      alert(`정답 !!! (${answer}) / 시도 횟수 :  ${count}`);
      break;  // 정답 맞추면 더 반복할 필요 없어서 while문 빠져나가기.

    }

    // 정답이 아닌 경우
    if(value < answer) {  // 입력값이 정답보다 작은 경우
      str = `${value} [UP] / 시도 횟수 : ${count}`;

    } else {  // 입력값이 정답보다 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}`;
    }

  }

}