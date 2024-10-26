
let timer=document.getElementById('timer')
let time=0
let blueSpiderLilly=document.getElementById('blueSpiderLilly')
let starCoin=document.getElementById('starCoin')
let potion=document.getElementById('potion')
let katana=document.getElementById('katana')
let money=0
let moneyTitle=document.getElementById('moneyTitle')
let clicker=document.getElementById('character')
clicker.onclick=function(){
    clicker.style.transform='scale(0.95)'
    setTimeout(() => {
    clicker.style.transform='scale(1)'    
    }, 300);
    console.log(11);
    money=money+1
    moneyTitle.innerHTML='Money: '+money+'$'
}
    katana.onclick=function(){

        if(money<100){
            time=60
            // interval is a method that executes functions once every specific time and it works forever
            let timeInterval=setInterval(() => {
                time=time-1
                timer.innerHTML='time: '+time
                if(money>0){
                    timer.innerHTML='Clicker Game'
                    clearInterval(timeInterval)
                }
                
            }, 1000);
        }
        money=money-100
        moneyTitle.innerHTML='Money: '+money+'$'
    }

    potion.onclick=function(){
        
        if(money<100){
            time=180
            let timeInterval=setInterval(() => {
                time=time-1
                timer.innerHTML='time: '+time
                if(money>0){
                    timer.innerHTML='Clicker Game'
                    clearInterval(timeInterval)
                }
                
            }, 1000);
        }
        money=money-400
        moneyTitle.innerHTML='Money: '+money+'$ '
    }

    starCoin.onclick=function(){
        if(money<100){
            time=300
            // interval is a method that executes functions once every specific time and it works forever
            let timeInterval=setInterval(() => {
                time=time-1
                timer.innerHTML='time: '+time
                if(money>0){
                    timer.innerHTML='Clicker Game'
                    clearInterval(timeInterval)
                }
                
            }, 1000);
        }
        money=money-750
        moneyTitle.innerHTML='money: '+money+'$'
    }

    blueSpiderLilly.onclick=function(){
        if(money<100){
            time=420
            // interval is a method that executes functions once every specific time and it works forever
            let timeInterval=setInterval(() => {
                time=time-1
                timer.innerHTML='time: '+time
                if(money>0){
                    timer.innerHTML='Clicker Game'
                    clearInterval(timeInterval)
                }
                
            }, 1000);
        }
        money=money-1300
        moneyTitle.innerHTML='money: '+money+'$'
    }

    // make it so that when you press the other items the money gets taken away



