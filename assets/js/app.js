const btnSubmit = document.querySelector(".btn");
const xx = document.querySelectorAll(".image img");
const score = document.querySelector(".so");
const guess = document.querySelector(".inputt");
const solan = document.querySelector(".solan");
const solan2 = document.querySelector(".solan2");

let total = 0;
let count = 0;
const point = 10;
let scoreNum = 0;

function sumOfArray(arr) {
  let total = 0;
  arr.forEach((a) => (total += a));
  return total;
}
function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandom2() {
  const arrRandom = [];
  for (let i = 0; i < 3; i++) {
    arrRandom.push(getRandom());
  }
  return arrRandom;
}

console.log(btnSubmit, xx, guess, score, solan, solan2);
// btnSubmit.onclick = function (e){
//     console.log(e)
// }

btnSubmit.onclick = function () {
  //lấy dữ liệu của iput
  const value = guess.value;

  if (!value) {
    alert("Đoán không hợp lệ!");
    guess.focus();
    return;
  }
  //random xúc xắc
  const randomList = getRandom2();
  console.log(randomList);
  //xủ lý hình
  xx.forEach((item, index) => {
    item.src = `./assets/img/${randomList[index]}.png`;
    // console.log(item,index)
  });

  // xử lý điểm
  total++;
  const totalArr = sumOfArray(getRandom2());
  // console.log(totalArr)
  if (value == totalArr) {
    count++;
    scoreNum += point;
  }
  //gans gia tri
  solan.innerHTML = `${count}`;
  solan2.innerHTML = `/${total}`;
  score.innerHTML = `${scoreNum}`;
};
