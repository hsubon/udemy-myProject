const path = '/Magic/img/';

let start = document.getElementById('start');
let container = document.getElementsByClassName('container')[0];
let ok = document.getElementsByClassName('ok')[0];
let mask = document.getElementsByClassName('mask')[0];
let fivecard = [];
let remaincard = [];
let fourcard = [];
let allcard = [];
(function() {

  init();

  ok.addEventListener('click', () => {
    mask.style.display = 'none';
    start.style.visibility = 'visible';
    console.log(fivecard);
    createElementDom(fivecard);
  });
  
  start.addEventListener("click", () => {

    start.disabled = "true";

    flip(fivecard.length);
    setTimeout(function() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }, 3000);

    setTimeout(function() {
      createElementDom(fourcard);
      console.log(fourcard);
      flip(fourcard);
    }, 3500);

  });
})();

function init() {
  for (i = 0; i < 12; i++) {
    allcard[i] = i + 1;
  }
  fivecard = getRandomArrayElements(allcard, 5);
  remaincard = check(allcard, fivecard);
  fourcard = getRandomArrayElements(remaincard, 4);
}
function flip(len) {
  var timer = null;
  var i = 0;
  var j = 0;

  var aFlip = $(".card");
  // console.log(aFlip);
  function flipFn(arg1, arg2) {
    aFlip.eq(i).addClass('card-flipped'); 
    i++;
    if(i==len){
      i=0;
    }
  }
  timer = setInterval(flipFn, 300);
}

function createElementDom(arr) {
  for (let i = 0; i < arr.length; i++) {

    let DOM_div_card = document.createElement("div");
    DOM_div_card.className = "card";
    container.appendChild(DOM_div_card);

    let DOM_div_front = document.createElement("div");
    DOM_div_front.className = "front";
    DOM_div_front.style = `background: url('${path}card0.png') no-repeat;`;
    DOM_div_card.appendChild(DOM_div_front);

    let DOM_div_back = document.createElement("div");
    DOM_div_back.className = "back";
    DOM_div_back.style = `background: url('${path}card${arr[i]}.png') no-repeat;`;
    DOM_div_card.appendChild(DOM_div_back);
  }
}
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0);
  var i = arr.length;
  var min = i - count;
  var temp;
  var index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function check(arr1, arr2) {
  let arr = arr1.slice(0);
  let temp;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr2[i]) {
        temp = arr[j];
        arr[j] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        arr.pop();
      }
    }
  }
  return arr;
}