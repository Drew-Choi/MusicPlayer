//패널 돌리기
const frame = document.querySelector("section");
const articleFrame = frame.querySelectorAll("article");
const articleLength = articleFrame.length;
const deg = 360 / articleLength;

for (let i = 0; i < articleLength; i += 1) {
  articleFrame[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`
}