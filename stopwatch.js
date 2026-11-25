let Min = document.getElementById("Min") 
let Sec = document.getElementById("Sec") 
let mSec = document.getElementById("mSec") 

let startBtn = document.getElementById("startBtn")
let resetBtn = document.getElementById("resetBtn")
let pauseBtn = document.getElementById("pauseBtn")
let lapBtn = document.getElementById("lapBtn")

let lapsContainer = document.getElementById("laps")

let intervalId = null;

let milisec = 0;
let second = 0;
let minute = 0;

function start(){
  if(intervalId) return;

  intervalId = setInterval(()=>{

    milisec++;

    if(milisec == 100){
      second++;
      milisec = 0;
    }

    if(second == 60){
      minute++;
      second = 0;
    }

    // Display without ternary
    if (milisec < 10) {
      mSec.innerText = "0" + milisec;
    } else {
      mSec.innerText = milisec;
    }

    if (second < 10) {
      Sec.innerText = "0" + second;
    } else {
      Sec.innerText = second;
    }

    if (minute < 10) {
      Min.innerText = "0" + minute;
    } else {
      Min.innerText = minute;
    }

  },10);
}

startBtn.onclick = start;
pauseBtn.onclick = ()=>{
  clearInterval(intervalId);
  intervalId = null;
}

resetBtn.onclick = ()=>{
  clearInterval(intervalId);
  intervalId = null;

  milisec = 0;
  second = 0;
  minute = 0;

  mSec.innerText = "00";
  Sec.innerText = "00";
  Min.innerText = "00";

  lapsContainer.innerHTML = "";
}


lapBtn.onclick = ()=>{
  if(!intervalId) return;

  let m = minute;
  let s = second;
  let ms = milisec;

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  if (ms < 10) {
    ms = "0" + ms;
  }

  let lapTime = m + ":" + s + ":" + ms;

  let lapItem = document.createElement("div");
  lapItem.classList.add("lap-item");
  lapItem.innerText = "Lap " + lapTime;

  lapsContainer.append(lapItem);
}