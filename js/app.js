
var min = 0, sec = 0, msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

function timer(){
    
    msec++;
    msecHeading.innerHTML = msec;
    
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
        if (sec >= 59) {
            min++;
            minHeading.innerHTML = min;
            sec = 0;
        }
    }
}

function disable(btn){
    btn.setAttribute('disabled', 'disabled');
    start();
}

function start(){
    interval = setInterval(timer, 10);
}

function stop(){
    document.getElementsByClassName('btn-success')[0].removeAttribute('disabled');
    clearInterval(interval);
}

function reset(){
    document.getElementsByClassName('btn-success')[0].removeAttribute('disabled');
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}