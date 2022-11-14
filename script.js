function timer(){

    const buttonStart = document.querySelector('#start');
    const buttonPause = document.querySelector('#pause');
    const buttonRestart = document.querySelector('#restart');
    let timer = document.querySelector('#setTimer')
    let appTimer;
    
    function addClass(element){
        element.classList.add('paused')
    }
    
    function removeClass(element){
        element.classList.remove('paused');
    }
    
    function createDateFromSeconds(seconds){
        const date = new Date( seconds * 1000 );
        return date.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'})
    }
    
    function startTimer(){
        removeClass(timer);
        appTimer = setInterval(function(){
            timer.innerHTML = createDateFromSeconds(seconds);
            seconds++;
        }, 100);
    }
    
    function stopTimer(){
        clearInterval(appTimer);
    }
    
    buttonStart.addEventListener('click', function(event){
        if(timer.classList.contains('paused') || seconds == 0){
            clearInterval(appTimer);
            startTimer();
        }
    })
    
    buttonPause.addEventListener('click', function(event){
        if(seconds > 1){
            addClass(timer);
            buttonStart.innerHTML = 'Continuar';
            stopTimer()
        }
    })
    
    buttonRestart.addEventListener('click', function(event){
        removeClass(timer);
        buttonStart.innerHTML = 'Iniciar';
        stopTimer();
        seconds = 0;
        timer.innerHTML = '00:00:00';
    })

}

timer();
