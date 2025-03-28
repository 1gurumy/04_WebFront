// 변수 선언

// document : HTML 문서 내에서
// get : 얻다
// Element : 태그들로 이루어진 HTML 요소
// ById : 아이디로(아이디가 일치하는) 
const number1 = document.getElementById("input1");

console.log(number1);
// <input type="number" id="input1">
// id가 input1인 input태그 자체가 출력됨.

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");


// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {

  // input요소.value : input 요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;

  console.log(value1, value2);

  // -> input 요소에 작성된 값은 무조건 문자열(string)형태라서 
  // 더했을 때 이어쓰기 되는 문제가 발생함.
  console.log(value1 + value2);

  // [해결방법]
  // 문자열을 숫자로 형변환하는 코드를 수행
  // 숫자만 작성된 문자열("123")을
  // 숫자타입으로 바꾸는 방법
  // -> Number("123");  --> 123
  console.log(Number(value1) + Number(value2));


  // 두 수의 합을
  // 아이디가 "calcResult"인 요소 (result 변수)의
  // 내부 글자(innerText, HTML 요소의 content)로 대입하기
  result.innerText = Number(value1) + Number(value2);

}

// 빼기 함수
function minusFn() {
  const value1 = Number(number1.value); // Number타입으로 변환해서 value1에 저장
  const value2 = Number(number2.value); // Number타입으로 변환해서 value2에 저장

result.innerText = value1 - value2;
}

// 곱하기 함수
function multiFn() {
  const value1 = Number(number1.value); // Number타입으로 변환해서 value1에 저장
  const value2 = Number(number2.value); // Number타입으로 변환해서 value2에 저장

result.innerText = value1 * value2;
}

// 나누기 함수
function divFn() {
  const value1 = Number(number1.value); // Number타입으로 변환해서 value1에 저장
  const value2 = Number(number2.value); // Number타입으로 변환해서 value2에 저장

result.innerText = value1 / value2;
}

// 나머지 구하는 함수
function modFn() {
  const value1 = Number(number1.value); // Number타입으로 변환해서 value1에 저장
  const value2 = Number(number2.value); // Number타입으로 변환해서 value2에 저장

result.innerText = value1 % value2;
}

//-----------------------------------------------
// 입력 받은 3개의 수 합계 출력해보기 
const input1 = document.getElementById("num1"); 
const input2 = document.getElementById("num2"); 
const input3 = document.getElementById("num3"); 
const total = document.getElementById("total");

function totalFn() {

  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const num3 = Number(input3.value);

  total.innerText = num1 + num2 + num3; 
}