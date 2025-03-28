// console.log(값)
// 브라우저 콘솔에 괄호() 내부의 값을 출력(기록)

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표/홀따옴표 작성");
console.log('JS는 홀따옴표도 문자열로 취급!');

//--------------------------------------------------

// 변수의 선언
// : 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// [JS에서의 변수 선언 작성법]
// 변수종류 변수명;
var number1;

// 초기화 (== 변수에 처음으로 값을 할당하는 행위)
// [작성법]
// 변수명 = 값;
number1 = 10;

// 콘솔에 number1 값 출력하기
console.log(number1);

// 변수 선언 + 초기화 동시에 하기
var number2 = 20;
console.log(number2);

// number1, number2의 합 출력하기
console.log(number1 + number2);

// 변수에 대입한 값 변경하기
number1 = 300;  // number1에 300 재대입(기존 값 10에 덮어쓰기 됨)
number2 = 400;  // number2에 400 재대입

// 변경된 두 변수의 값 출력하기
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기(자바와 동일함)
console.log("number1의 값 : " + number1); // "number1의 값 : 300"
console.log("100" + 100 ); // "100100"

// 2) 괄호 내부에 ,콤마를 작성해 각각의 값을 독립적으로 출력하기
// -> 형변환 없이 출력되어 문자열 따로, 다른 데이터타입 따로 독립되어 출력됨.

console.log("number1 : ",number1, " /number2 :" ,number2);

// --------------------------------------------------------------

// var. let, const 의 차이점

// 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
//  -> 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐

var menu = "삼겹살";
console.log("menu : " + menu);

var menu = "초밥";
console.log("menu : " + menu);
// 변수명이 중복되어 값이 덮어쓰기 되면
// 이전에 선언해놓은 변수를 쓸 수 없게 되는 문제가 발생함.

// ----------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제를 해결)

let number3 = 25;

// let number3 = 300; // 에러뜸. 변수명 중복 불가

number3 = 500;  // 기존 변수에 새로운 값 재할당은 가능

console.log("number3 : " + number3);

// ---------------------------------------------------------------

// 3. const (상수, constant의 줄임말, 항[상] 같은 [수])
// 한 번 값이 대입되면 새로운 값 재대입할 수 없음.

const PI = 3.141592;

// const test; // 상수는 선언과 동시에 초기화 해야함. 안 그럼 에러남.

// PI = 12; // 재대입 시 
// 해당 js파일에서는 에러가 안 뜨나, 브러우저 콘솔에 다음과 같이 에러뜸.
// Uncaught TypeError: Assignment to constant variable.
// : 상수에 새로운 값을 대입할 수 없는데, 재대입을 하고 있어 오류사항이다.

// --------------------------------------------------------------------

// 블록 레벨 scope / 함수 레벨 scope

// 블록 레벨 scope (let, const)
// let과 const로 선언된 변수는 
// 변수가 선언된 블록 (중괄호 {}) 내부에서만 유효하다는 것을 의미함.
// 즉, 코드 블록 내부에서 선언한 변수(let, const)는
// 해당 블록 외부에서는 접근할 수 없다.

let foo1 = 123;   // 전역 변수(: 블록 내부에 선언된 것이 아닌 바깥쪽에 선언된 변수)
const foo2 = 456;   // 전역 변수

{ // 블록 레벨

  let num1 = 789;   // 지역 변수(: 지역 내부에서만 유효한 변수)
  const num2 = 0;   // 지역 변수

}

console.log(foo1);  // 전역 변수이기 때문에(블록과 관계없음) 접근 가능
console.log(foo2);  // 전역 변수이기 때문에(블록과 관계없음) 접근 가능
// console.log(num1);  // Uncaught ReferenceError: num1 is not defined
// 중간에 에러가 발생하면 아랫줄에 작성된 코드는 실행이 안됨.
// 따라서 브라우저 콘솔에는 console.log(num1);에 대한 에러만 표시됨.
// console.log(num2);
// -> 둘 다 블록레벨 스코프이기 때문에 블록 밖에서 접근할 수 없음.

// -----------------------------------------------------------------------

// 함수 레벨 스코프 (var)
// var 키워드로 선언된 변수는 함수 내 어디서든 접근할 수 있음.
// if, for 등의 일반 블록은 무시하고, var로 선언된 변수가 있는
// 함수 전체에서 유효함.

var test1 = 123;  // 전역 변수 선언

{
  var test2 = 456;
}

console.log(test1);
console.log(test2);
// -> test2도 접근 가능.
// -> 왜? 함수레벨 스코프인 var는 일반 블록은
//    무시하기 때문에.

// 함수 안에서는 어떻게 될까?
function example() {  // 이렇게 함수 형태로 만들어진 
  // 코드 블록은 함수레벨 scope 라고 함.

  var test3 = '함수레벨 var 테스트';

  console.log(test3); // 이렇게만 작성하면 출력 안됨. 함수가 호출되어야 수행됨.

}

// console.log(test3);
// ReferenceError: test3 is not defined
// -> var는 일반 블록레벨만 무시할 뿐,
//    함수레벨 블록은 무시하지 못함.
// 즉, 함수 블록 안에서 선언된 var 변수는
// 해당 함수 안에서만 사용 가능하다

example();  // example 함수 호출 -> 함수 내부에 작성된 내용들이 수행되어 콘솔에 test3이 가진 값 출력됨.

function example2 () {

  if(true) {  // 블록문(if, for, while 등) 내에서
              // 선언된 var 변수는 일반 블록 무시함.

    var x = 10; // 따라서 x는 블록 내부에서 선언되었지만 무시하기 때문에
                // 함수 레벨 스코프를 가진 var 변수임.
  }

  console.log(x); // 블록 밖에서 x변수에 접근 가능.
  //  

}

example2();

 //-------------------------------------------------------------------------

 // 1. var의 호이스팅
 // : var로 선언된 변수는 선언만 해당 스코프의 최상단으로
 // 호이스팅 됨. 변수의 초기화는 원래 코드 위치에서 수행된다.

 // 에러가 안나고 undefined 가 찍힘.
 // -> 호이스팅 되어 var a; 선언부는는 최상단으로 끌어올려짐. 
 // 선언만 된 상태에서 출력하려고 하니까 
 // 값이 정의되지 않았다는 의미로 undefined 가 반환.

 // 내부적으로 var a; 이렇게 선언만 된 상태에서 출력하는 것
 console.log(a);   // undefined

 // 변수의 선언과 초기화
 var a = 10;    // 변수의 선언만이 호이스팅 됨.
 // 초기화 코드는 원래 이 위치(184번째 라인)에서 이뤄짐.

 console.log(a);  // 변수 초기화 이후 출력 -> 콘솔에 값 정상적으로 찍힘.


 // 2. let / const 의 호이스팅
 // : let/const로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅 됨.
 // var와 달리, let/const로 선언된 변수는 초기화가 이루어지기 전에는 사용될 수 없음.

 // TDZ(Temporal Dead Zone) 
 // : 시간적으로 죽은 구역
 // 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함.
 // Javascript에서는 let/const 키워드로 선언된 변수가
 // 초기화되기 전까지 접근할 수 없는 구간을 말함.


// console.log(x);
// ReferenceError: Cannot access 'x' before initialization
// : let x; 내부적으로 선언은 끌어올려진 상태임(호이스팅됨). 
// 그러나 TDZ에 놓여 초기화 전까지 접근 불가하다.
// => 초기화가 이루어지기 전까지 해당 변수는 TDZ에 놓이며,
// 이 기간동안 벼수에 접근하려고 하면 위의 에러 메세지가 뜸.
// . 


 let x = 50;  // 선언과 동시에 초기화

console.log(x); // 초기화 이루어진 이후 출력 ->  정상적으로 50 출력됨.


// console.log(n); // 마찬가지로 cannot access 'n' before initialization 에러메세지 뜸.
const n = 100;

console.log(n); // 정상 출력됨

// -> 이러한 특성 때문에 let/const는 자유도가 너무 높은 var보다
//  예측 가능한 코드를 작성할 수 있음 (오늘날 지향되는 이유)

// -----------------------------------------------------------------------------

// JS 자료형 확인하기

// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자


// 1. undefined
let undef;  // 변수의 선언
console.log("undef : ", undef, typeof undef);
// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않았다.


// 2. string(문자열) 타입 : "" 또는 ''로 작성된 값
const userName = '홍길동';
console.log("name : ", userName, typeof userName);

const phone = '01012341234';
console.log("phone : ", phone, typeof phone);

const gender = 'M'; // 한 글자만 작성해도 문자열 타입(string)이다
console.log("gender : ", gender, typeof gender);


// 3. number 타입 (정사, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 160.5;
const eyesight = -5;

console.log("age : ", age, typeof age);
console.log("height : ", height, typeof height);
console.log("eyesight : ", eyesight, typeof eyesight);


// 4. boolean (논리값 true/false)
const isTrue = true;
const isFalse = false;

console.log("isTrye : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

// 5. object (객체)
// 값을 여러 개 저장할 수 있는 형태

// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];

console.log("numbers : ", numbers, typeof numbers);

console.log("numbers 배열 값 중 0번쨰 : ", numbers[0], typeof numbers[0]);
// typeof numbers[index 번호] => number타입이 출력됨. 배열은 object 타입이지만 
// 이 배열에 속한 값들은 모두 숫자이기 때문에.

console.log("numbers 배열 값 중 3번쨰 : ", numbers[3], typeof numbers[3]);
                                          // undefined undefined
                                          // 선언 당시 3칸으로 선언해서 정의되지 않았다는 에러 메세지 뜸.

// javascript에서의 배열은 값 추가 및 삭제 가능
// 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나
// 줄어든다.                                              


// 2) JS 객체
// 값을 K:V (Map) 형식으로 여러 개 저장하는 형태
// -> {K:V, K:V, K:V ...}

// K(Key) : 값을 구분하는 이름 (변수명 비슷한 거)
// V(Value) : K에 대응되는 값 (변수에 대입되는 값 비슷한 거)

const user = {id:"user01", pw:"pass01", userName:"홍길동"};

console.log("user : ", user, typeof user);

// 객체에 존재하는 값 하나씩 얻어오기

// 방법 1 : 변수명['key'] - key에 대응하는 value값 반환됨.
console.log(user['id']);

// 방법 2 : 변수명.key
console.log(user.id, user.pw, user.userName);


// 6. 함수 (function)

// 작성법
// const 변수명 = function() {};   // 익명함수(함수의 이름이 없음) -> 함수 이름이 변수명이 된다.

const sumFn = function(a, b) { return a + b };  // 익명함수. 함수명이 sumFn이 됨.
/* 이렇게 작성한 것과 같음
function sumFn(a, b) {
  return a + b
}
*/

console.log(typeof sumFn);  // function타입으로 출력됨

console.log(sumFn(3,5));  // 8

// null
console.log(typeof null); // object 출력됨. null의 타입은 object임.