/*
// 봄버맨 이미지 
const bomberman = document.getElementById("bomberman");

// 네모칸
const box = document.getElementById("box");

// 봄버맨의 초기 위치 (좌측 상단)
let bombermanX = 0; // x축
let bombermanY = 0; // y축
const step = 10; // 봄버맨이 이동하는 간격

let bombs = []; // 폭탄들을 저장할 배열

// 방향키를 눌렀을 때 봄버맨 이동
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    bombermanY -= step; // 10만큼 위로 이동
  } else if (e.key === "ArrowDown") {
    bombermanY += step; // 아래로 이동
  } else if (e.key === "ArrowLeft") {
    bombermanX -= step; // 왼쪽으로 이동
  } else if (e.key === "ArrowRight") {
    bombermanX += step; // 오른쪽으로 이동
  }

  // 봄버맨의 위치를 업데이트
  bomberman.style.top = `${bombermanY}px`;
  bomberman.style.left = `${bombermanX}px`;
});

// 폭탄 생성 및 폭발 함수
document.addEventListener('keydown', function(e) {
  if (e.key === "x") {
    createBomb();
  } else if (e.key === "z") {
    explodeAllBombs();
  }
});

// 폭탄 생성 함수
function createBomb() {
  const bomb = document.createElement("img");
  bomb.src = "../../images/bomb.png";
  bomb.classList.add("bomb");
  bomb.style.top = `${bombermanY}px`;
  bomb.style.left = `${bombermanX + 50}px`; // 봄버맨 오른쪽에 폭탄 배치
  box.appendChild(bomb);
  
  // 5초 후 폭탄 터짐
  setTimeout(() => {
    bomb.src = "../../images/boomm.png"; // 폭탄 터짐 이미지로 변경
    setTimeout(() => {
      bomb.remove(); // 1초 후 폭탄 삭제
    }, 1000);
  }, 5000);
  
  bombs.push(bomb); // 생성된 폭탄을 배열에 저장
}

// 모든 폭탄 터트리기 함수
function explodeAllBombs() {
  bombs.forEach(bomb => {
    bomb.src = "../../images/boomm.png"; // 폭탄 터짐 이미지로 변경
    setTimeout(() => {
      bomb.remove(); // 1초 후 폭탄 삭제
    }, 1000);
  });
  
  bombs = []; // 폭탄 배열 초기화
}
*/


// 봄버맨과 AI 봄버맨의 초기 설정
let bombermanX = 0; // 내 봄버맨의 X 좌표
let bombermanY = 0; // 내 봄버맨의 Y 좌표
let aiX = 0; // AI 봄버맨의 X 좌표
let aiY = 0; // AI 봄버맨의 Y 좌표
const step = 10; // 이동 간격
let bombs = []; // 폭탄 배열
const box = document.getElementById("box");

// 봄버맨 캐릭터
const bomberman = document.createElement("img");
bomberman.src = "../../images/bomberman.png";
bomberman.style.position = "absolute";
bomberman.style.top = `${bombermanY}px`;
bomberman.style.left = `${bombermanX}px`;
box.appendChild(bomberman);

// AI 봄버맨 캐릭터
const aiBomberman = document.createElement("img");
aiBomberman.src = "../../images/bomberman.png";
aiBomberman.style.position = "absolute";
aiBomberman.style.top = `${aiY}px`;
aiBomberman.style.left = `${aiX}px`;
box.appendChild(aiBomberman);

// 이동 방향을 임의로 설정하는 함수 (AI 봄버맨)
function moveAI() {
  const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];

  if (randomDirection === "ArrowUp") aiY -= step;
  if (randomDirection === "ArrowDown") aiY += step;
  if (randomDirection === "ArrowLeft") aiX -= step;
  if (randomDirection === "ArrowRight") aiX += step;

  aiBomberman.style.top = `${aiY}px`;
  aiBomberman.style.left = `${aiX}px`;
}

// AI 봄버맨 폭탄 생성
function createAIBomb() {
  const aiBomb = document.createElement("img");
  aiBomb.src = "../../images/bomb.png";
  aiBomb.classList.add("bomb");
  aiBomb.style.top = `${aiY}px`;
  aiBomb.style.left = `${aiX + 50}px`; // AI 봄버맨 오른쪽에 폭탄 배치
  box.appendChild(aiBomb);
  
  // 6초 후 폭탄 터짐
  setTimeout(() => {
    aiBomb.src = "../../images/boomm.png"; // 폭탄 터짐 이미지로 변경
    setTimeout(() => {
      aiBomb.remove(); // 1초 후 폭탄 삭제
    }, 1000);
  }, 6000);

  bombs.push(aiBomb); // 생성된 폭탄을 배열에 저장
}

// 모든 폭탄 터트리기 함수 (AI가 사용하는 함수)
function explodeAllBombs() {
  bombs.forEach(bomb => {
    bomb.src = "../../images/boomm.png"; // 폭탄 터짐 이미지로 변경
    setTimeout(() => {
      bomb.remove(); // 1초 후 폭탄 삭제
    }, 1000);
  });

  bombs = []; // 폭탄 배열 초기화
}

// 일정 시간마다 AI 봄버맨 이동
setInterval(moveAI, 1000); // 1초마다 AI 봄버맨 이동

// 일정 시간마다 AI 봄버맨 폭탄 생성
setInterval(createAIBomb, 5000); // 5초마다 AI 봄버맨 폭탄 생성

// 키 이벤트 처리 (봄버맨 이동)
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    bombermanY -= step; // 위로 이동
  } else if (e.key === "ArrowDown") {
    bombermanY += step; // 아래로 이동
  } else if (e.key === "ArrowLeft") {
    bombermanX -= step; // 왼쪽으로 이동
  } else if (e.key === "ArrowRight") {
    bombermanX += step; // 오른쪽으로 이동
  }

  bomberman.style.top = `${bombermanY}px`;
  bomberman.style.left = `${bombermanX}px`;
});

// 폭탄 생성 (봄버맨)
document.addEventListener('keydown', function(e) {
  if (e.key === "x") {
    createBomb();
  } else if (e.key === "z") {
    explodeAllBombs();
  }
});

// 봄버맨의 폭탄 생성
function createBomb() {
  const bomb = document.createElement("img");
  bomb.src = "../../images/bomb.png";
  bomb.classList.add("bomb");
  bomb.style.top = `${bombermanY}px`;
  bomb.style.left = `${bombermanX + 50}px`; // 봄버맨 오른쪽에 폭탄 배치
  box.appendChild(bomb);

  // 6초 후 폭탄 터짐
  setTimeout(() => {
    bomb.src = "../../images/boomm.png"; // 폭탄 터짐 이미지로 변경
    setTimeout(() => {
      bomb.remove(); // 1초 후 폭탄 삭제
    }, 1000);
  }, 6000);

  bombs.push(bomb); // 생성된 폭탄을 배열에 저장
}
