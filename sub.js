window.onload = function(){
    
var w = $('body').width(); 
var h = $('body').height();
   
var time =10,
    counter,
    memoryTime = 10,
    min = document.getElementById('min'),
    sec = document.getElementById('sec'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    minMone = document.getElementById('min-minus-one'),
    minPone = document.getElementById('min-plus-one'),
    minMfive = document.getElementById('min-minus-five'),
    minPfive = document.getElementById('min-plus-five'),
    minMten = document.getElementById('min-minus-ten'),
    minPten = document.getElementById('min-plus-ten'),
    minMthirty = document.getElementById('min-minus-thirty'),
    minPthirty = document.getElementById('min-plus-thirty'),
    secMone = document.getElementById('sec-minus-one'),
    secPone = document.getElementById('sec-plus-one'),
    secMfive = document.getElementById('sec-minus-five'),
    secPfive = document.getElementById('sec-plus-five'),
    secMten = document.getElementById('sec-minus-ten'),
    secPten = document.getElementById('sec-plus-ten'),
    secMthirty = document.getElementById('sec-minus-thirty'),
    secPthirty = document.getElementById('sec-plus-thirty'),
    alarmOn = document.getElementById('alarmon'),
    alarmOff = document.getElementById('alarmoff'),
    alarmStop = document.getElementById('alarmstop'),
    alertOn = document.getElementById('alerton'),
    alertOff = document.getElementById('alertoff')
start.disabled = false;
stop.disabled = true;
alarmOn.disabled = true;
alarmOff.disabled = false;
alertOn.disabled = false;
alertOff.disabled = true;
alarmStop.disabled = true;

var timeTominsec = function(){
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time/60);
}
timeTominsec();

	backchange1();
	var backNum = 1;
	var checkNum = 1;
	function backchange1(){
		$('body').css('background-position',  backNum + '% 0%');
		backNum = backNum + 0.08;
		if(backNum > 99){
			setTimeout(backchange2,10);	
		} else{
			setTimeout(backchange1,10);
		}
	}
	function backchange2(){
		$('body').css('background-position',  backNum + '% 0%');
		backNum = backNum - 0.08;
		if(backNum < 1){
			setTimeout(backchange1,10);	
		} else {
			setTimeout(backchange2,10);
		}
	}


var count = function(){
    if(time === 0){
        min.innerHTML = 0;
        sec.innnerHTML =0;
        clearInterval(counter);
        if(alarmOn.disabled === true){
            document.getElementById('sound-file').currentTime = 0;
            document.getElementById('sound-file').play();
            alarmStop.disabled = false;
        }
        if(alertOn.disabled === true){
            if(alarmOn.disabled === true){
                alert('時間です。BGMを流します。\n\n『ふたたび』（千と千尋の神隠しより）');
            } else {
                alert('時間です。')
            }
        }
		/*
		$('body').append('<img id = "baby" src="baby.gif">');
		$('#baby').pep();
		$('#baby').css('margin', '-445px 0 0 ' + (w/2-112.5) + 'px');
   		*/
	    	$('body').append('<img id = "sen1" src="sen1.jpg">');
		$('#sen1').pep();
		var pictureNum1 = 1 ;
		$('#sen1').css('pointer-events', 'none');
		putPicture1();
		function putPicture1(){
			$('#sen1').css('margin', (-445 - pictureNum1*(305-112.5)/(w/2-112.5) ) + 'px 0 0 ' +  (w/2-112.5-pictureNum1) + 'px');
			pictureNum1 = pictureNum1 + 3;
			if( pictureNum1 > w/2-112.5){
			$('#sen1').css('pointer-events', 'auto');
			$('body').append('<img id = "sen2" src="sen2.jpg">');
			$('#sen2').pep();
			$('#sen2').css('pointer-events', 'none');
			putPicture2();
			/* $('#baby').remove();//baby要素を消す */
			return;
			}
			setTimeout(putPicture1,10);
		}
	    
		var pictureNum2 = 1 ;
		function putPicture2(){
			$('#sen2').css('margin', (-445 - pictureNum2*(305-112.5)/(w/2-112.5) ) + 'px 0 0 ' +  (w/2-112.5+pictureNum2) + 'px');
			pictureNum2 = pictureNum2 + 3;
			if( pictureNum2 > w/2-112.5){
			$('#sen2').css('pointer-events', 'auto');
			$('body').append('<img id = "sen3" src="sen3.jpg">');
			$('#sen3').pep();
			$('#sen3').css('pointer-events', 'none');
			putPicture3();
			return;
			}
			setTimeout(putPicture2,10);
		}
		
		var pictureNum3 = 1 ;
		function putPicture3(){
			$('#sen3').css('margin', (-445 + pictureNum3*(305-112.5)/(w/2-112.5) ) + 'px 0 0 ' +  (w/2-112.5-pictureNum3) + 'px');
			pictureNum3 = pictureNum3 + 3;
			if( pictureNum3 > w/2-112.5){
			$('#sen3').css('pointer-events', 'auto');
			$('body').append('<img id = "sen4" src="sen4.jpg">');
			$('#sen4').pep();
			$('#sen4').css('pointer-events', 'none');
			putPicture4();
			return;
			}
			setTimeout(putPicture3,10);
		}
		
		var pictureNum4 = 1 ;
		function putPicture4(){
			$('#sen4').css('margin', (-445 + pictureNum4*(305-112.5)/(w/2-112.5) ) + 'px 0 0 ' +  (w/2-112.5+pictureNum4) + 'px');
			pictureNum4 = pictureNum4 + 3;
			if( pictureNum4 > w/2-112.5){
			$('#sen4').css('pointer-events', 'auto');
			return;
			}
			setTimeout(putPicture4,10);
		}
	    
        toggle();
    } else{
        time -= 1;
        timeTominsec();
    }
}

var toggle = function(){
    if(start.disabled === true){
        start.disabled = false;
        stop.disabled = true;
    } else {
        start.disabled = true;
        stop.disabled = false;
    }
}

start.onclick = function(){
    if(time > 0){
    counter = setInterval(count,1000);
    toggle();
    }
}

stop.onclick = function(){
    clearInterval(counter);
    toggle();
}

memory.onclick = function(){
     memoryTime = time;
}
reset.onclick = function(){
    time = memoryTime;
    timeTominsec();
}
var toggle2 = function(){
    if(alertOn.disabled === true){
       alertOn.disabled = false;
       alertOff.disabled = true;
    } else {
       alertOn.disabled = true;
       alertOff.disabled = false;
    }
}
alertOn.onclick = function(){
    toggle2();
}
alertOff.onclick = function(){
    toggle2();
}


var toggle3 = function(){
    if(alarmOn.disabled === true){
       alarmOn.disabled = false;
       alarmOff.disabled = true;
    } else {
       alarmOn.disabled = true;
       alarmOff.disabled = false;
    }
}
alarmOn.onclick = function(){
    toggle3();
}
alarmOff.onclick = function(){
    document.getElementById('sound-file').pause();
    alarmStop.disabled = true;
    toggle3();
}
alarmStop.onclick = function(){
    document.getElementById('sound-file').pause();
    alarmStop.disabled = true;
    $('#sen1').remove();
	$('#sen2').remove();
	$('#sen3').remove();
	$('#sen4').remove();
}


minMone.onclick = function(){
    if(time > 60){
        time -= 60;
        timeTominsec();
    } else if (time <=60){
        time = 0;
        timeTominsec();
    }
}
minMfive.onclick = function(){
    if(time > 300){
        time -= 300;
        timeTominsec();
    } else if (time <=300){
        time = 0;
        timeTominsec();
    }
}
minMten.onclick = function(){
    if(time > 600){
        time -= 600;
        timeTominsec();
    }else if (time <=600){
        time = 0;
        timeTominsec();
    }
}
minMthirty.onclick = function(){
    if(time > 1800){
        time -= 1800;
        timeTominsec();
    }else if (time <=1800){
        time = 0;
        timeTominsec();
    }
}
secMone.onclick = function(){
    if(time > 1){
        time -= 1;
        timeTominsec();
    }else if (time <=1){
        time = 0;
        timeTominsec();
    }
}
secMfive.onclick = function(){
    if(time > 5){
        time -= 5;
        timeTominsec();
    }else if (time <=5){
        time = 0;
        timeTominsec();
    }
}
secMten.onclick = function(){
    if(time > 10){
        time -= 10;
        timeTominsec();
    }else if (time <=10){
        time = 0;
        timeTominsec();
    }
}
secMthirty.onclick = function(){
    if(time > 30){
        time -= 30;
        timeTominsec();
    }else if (time <=30){
        time = 0;
        timeTominsec();
    }
}
minPone.onclick = function(){
    if(time <= 599939){
        time += 60;
        timeTominsec();
    }else if (time > 599939){
        time = 600000;
        timeTominsec();
    }
}
minPfive.onclick = function(){
    if(time <= 599699){
        time += 300;
        timeTominsec();
    }else if (time > 599699){
        time = 600000;
        timeTominsec();
    }
}
minPten.onclick = function(){
    if(time <= 599399){    
        time += 600;
        timeTominsec();
    }else if (time > 599399){
        time = 600000;
        timeTominsec();
    }
}
minPthirty.onclick = function(){
    if(time <= 598199){
        time += 1800;
        timeTominsec();
    }else if (time > 598199){
        time = 600000;
        timeTominsec();
    }
}
secPone.onclick = function(){
    if(time <= 599998){
        time += 1;
        timeTominsec();
    }else if (time > 599998){
        time = 600000;
        timeTominsec();
    }
}
secPfive.onclick = function(){
    if(time <= 599994){    
        time += 5;
        timeTominsec();
    }else if (time > 599994){
        time = 600000;
        timeTominsec();
    }
}
secPten.onclick = function(){
    if(time <= 599989){    
        time += 10;
        timeTominsec();
    }else if (time > 599989){
        time = 600000;
        timeTominsec();
    }
}
secPthirty.onclick = function(){
     if(time <= 599969){
        time += 30;
        timeTominsec();
     }else if (time > 599969){
        time = 600000;
        timeTominsec();
    }
}


}
