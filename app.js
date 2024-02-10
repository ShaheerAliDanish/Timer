var hour = 0;
var min  = 0;
var sec  = 0;
var mili = 0;

var hourDisplayjs = document.getElementById("hourDisplay")
var minDisplayjs = document.getElementById("minDisplay")
var secDisplayjs = document.getElementById("secDisplay")
var miliDisplayjs = document.getElementById("miliDisplay")

function renderTimer() {
    hourDisplayjs.innerHTML = hour;
    minDisplayjs.innerHTML  = min;
    secDisplayjs.innerHTML  = sec;
    miliDisplayjs.innerHTML = mili;
}

var interval ;

function startTimer() {
    interval = setInterval(function (){
    mili++;
    if (mili==10){
        mili=0;
        sec++;
    
    if(sec==60){
      sec = 0;
      min++;

    if (min == 60 ){
      min = 0;
      hour++;  

    }
      
    }    
    }
       
  renderTimer();      
},100);
}

function stopTimer() {
    clearInterval(interval); 
}
function resetTimer (){
    stopTimer();
    hour = 0;
    min  = 0;
    sec  = 0;
    mili = 0;
}