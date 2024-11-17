
let isTanjiro=true
let isBlueSpiderLilly=false
let moneyAmount = 1
let timer = document.getElementById('timer')
let time = 0
let isPotion = false
let blueSpiderLilly = document.getElementById('blueSpiderLilly')
let starCoin = document.getElementById('starCoin')
let potion = document.getElementById('potion')
let katana = document.getElementById('katana')
let money = 0
let moneyTitle = document.getElementById('moneyTitle')
let daki = document.getElementById('daki')
let clicker = document.getElementById('character')
function GameOver() {
    timer.innerHTML= 'WASTED'
    clicker.style.pointerEvents = 'none'
    katana.style.pointerEvents = 'none'
    potion.style.pointerEvents = 'none'
    blueSpiderLilly.style.pointerEvents = 'none'
}
clicker.onclick = function () {
    clicker.style.transform = 'scale(0.95)'
    setTimeout(() => {
        clicker.style.transform = 'scale(1)'
    }, 300);
    console.log(11);
    if (isPotion) {
        moneyAmount = Math.floor(Math.random() * 10 + 1)
    }
    if(isTanjiro){
        money = money + moneyAmount

    }
    else{
        money = money - 5
    }
    moneyTitle.innerHTML = 'Money: ' + money + '$'
    if (Math.random() > 0.95 && isBlueSpiderLilly==false) {
        clicker.src = 'Daki (2).png'
        isTanjiro=false
    }
    else {
        clicker.src = 'Tanjiro.png'
        isTanjiro=true
    }
}


katana.onclick = function () {
    katana.style.pointerEvents = 'none'
    katana.style.boxShadow = '0 0 20px rgb(136 255 217 / 88%)'
    if (money < 100) {
        timer.innerHTML='You are in debt. You have 1 minute.'
        setTimeout(() => {
            timer.innerHTML='Clicker Game'
        }, 3000);
        time = 60
        // interval is a method that executes functions once every specific time and it works forever
        let timeInterval = setInterval(() => {
            time = time - 1
            if (money > 0) {
                clearInterval(timeInterval)
            }
            if(time==0){
                clearInterval(timeInterval)
                GameOver()
            }

        }, 1000);
    }
    moneyAmount = 2
    setTimeout(() => {
        moneyAmount = 1
        katana.style.pointerEvents = 'auto'
        katana.style.boxShadow = 'none'
    }, 20000)
    money = money - 100
    moneyTitle.innerHTML = 'Money: ' + money + '$'
}

potion.onclick = function () {
    potion.style.pointerEvents = 'none'
    potion.style.boxShadow = '0 0 20px rgb(136 255 217 / 88%)'
    isPotion = true

    if (money < 100) {
        time = 180
        timer.innerHTML='You are in debt. You have 3 minute.'
        setTimeout(() => {
            timer.innerHTML='Clicker Game'
        }, 3000);
        let timeInterval = setInterval(() => {
            time = time - 1
            if (money > 0) {
                clearInterval(timeInterval)
            }
            if(time==0){
                clearInterval(timeInterval)
                GameOver()
            }

        }, 1000);
    }
    setTimeout(() => {
        potion.style.pointerEvents = 'auto'
        potion.style.boxShadow = 'none'
        isPotion=false
        moneyAmount=1
    }, 100000);x    
    money = money - 400
    moneyTitle.innerHTML = 'Money: ' + money + '$ '
}

starCoin.onclick = function () {
   starCoin.style.pointerEvents = 'none'
    starCoin.style.boxShadow = '0 0 20px rgb(136 255 217 / 88%)'

    setTimeout(() => {
        starCoin.style.pointerEvents = 'auto'
        starCoin.style.boxShadow = 'none'

    }, 5000);
    if (Math.random() > 0.5) {
        money = money + 800
    }
    else {
        money = money - 300
    }
    moneyTitle.innerHTML = 'money: ' + money + '$'
}

blueSpiderLilly.onclick = function () {
    blueSpiderLilly.style.pointerEvents = 'none'
    blueSpiderLilly.style.boxShadow = '0 0 20px rgb(136 255 217 / 88%)'
    isBlueSpiderLilly=true
    if (money < 1300) {
        time = 360
        timer.innerHTML='You are in debt. You have 6 minute.'
        setTimeout(() => {
            timer.innerHTML='Clicker Game'
        }, 3000);
        let timeInterval = setInterval(() => {
            time = time - 1
            if (money > 0) {
                clearInterval(timeInterval)
            }
            if(time==0){
                clearInterval(timeInterval)
                GameOver()
            }
            

        }, 1000);
        
    }
    setTimeout(() => {
        blueSpiderLilly.style.pointerEvents = 'auto'
        blueSpiderLilly.style.boxShadow = 'none'
       isBlueSpiderLilly=false
    }, 30000)
    money = money - 1300
    moneyTitle.innerHTML = 'money: ' + money + '$'
}




