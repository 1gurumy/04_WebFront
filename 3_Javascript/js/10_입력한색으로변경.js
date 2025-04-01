// const input = document.querySelectorAll("[type='text']");
// console.log(input);

// const box = document.querySelectorAll(".box");
// console.log(box);

// const button = document.getElementById("changeButton");

// button.addEventListener("click", function(e){
//   if(input.value.innerText.length = 0 )

// });





// 배경색을 적용할 div 배열
const boxList = document.querySelectorAll(".box");

// 배경색을 입력할 input 배열
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function() {

  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
  }
});