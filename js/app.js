var display = document.getElementById('timer');
var msecs = 0;
var sec = 0;
var min  = 0;
var m = "";
var s = "";
var ms = "";
var timer;

function countTimer(){
	msecs++;
	
	if(msecs >= 59){
		msecs = 0;
		sec++;
		if(sec >= 59){
			sec = 0;
			min++;
		}
	}
	
	m = min ? min > 9 ? min : "0" + min : "00";
	s = sec ? sec > 9 ? sec : "0" + sec : "00";
	ms = msecs > 9 ? msecs : "0" + msecs;
	
	display.innerHTML = m+":"+s+":"+ms+"s";
	
	timerDuration();
}

function timerDuration(){
	if(m != 99){
		timer = setTimeout(countTimer, 10);
	}
	
}

function startTimer(btn){
	btn.setAttribute('disabled', 'disabled');
	timerDuration();
	
}

function stopTimer(){
	document.getElementsByClassName('btn-success')[0].removeAttribute('disabled');
	clearTimeout(timer);
}

function resetTimer(){
	document.getElementsByClassName('btn-success')[0].removeAttribute('disabled');
	clearTimeout(timer);
	display.innerHTML = "00:00:00s";
	msecs = 0; 
	sec = 0; 
    min = 0;
	m = "";
	s = "";
	ms = "";
}