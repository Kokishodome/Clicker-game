
let moneyAmount=1
let timer=document.getElementById('timer')
let time=0
let isStarCoin=false
let isPotion=false
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
    if(isPotion){
        moneyAmount=Math.floor(Math.random()*10+1)
    }
    money=money+moneyAmount
    moneyTitle.innerHTML='Money: '+money+'$'
    if(Math.random()>0.9){
    clicker.src='Daki (1).png'
    }
   else{
    clicker.src='character_avatar__7ksrBmWl.png'
   }
}
    katana.onclick=function(){
        katana.style.pointerEvents='none'
        katana.style.boxShadow= '0 0 20px rgb(136 255 217 / 88%)'
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
        moneyAmount=2
        setTimeout(()=>{
        moneyAmount=1
        katana.style.pointerEvents='auto'
        katana.style.boxShadow= 'none'
        },5000)
        money=money-100
        moneyTitle.innerHTML='Money: '+money+'$'
    }

    potion.onclick=function(){
        isPotion=true

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
        starCoin.style.pointerEvents='none'
        isStarCoin=true
     
        setTimeout(() => {
            starCoin.style.pointerEvents='auto'
        }, 1000);
        if(Math.random()>0.5){
        money=money+800
        }
        else{
            money=money-300
        }
        moneyTitle.innerHTML='money: '+money+'$'
    }

    blueSpiderLilly.onclick=function(){
        if(money<1300){
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

//    when you click on Daki it minus 5 coins



