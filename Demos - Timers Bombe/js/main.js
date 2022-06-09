/* SETINTERVAL */

//va nous permettre de répéter une action sur une interval de temps donnée

let chiffre = 0
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let timer;

// Bombe decounte
let declangeurDecompte = document.querySelector("#declangeurDecompte")
let desamorcer = document.querySelector("#desamorcer")
let ecouteurData = document.querySelector("div strong")
let timer2;
let boom;

start.addEventListener("click", function(){
    
    timer = window.setInterval(()=>{
        chiffre++
        document.querySelector(".chrono").innerHTML = chiffre
    }, 1000)
})

stop.addEventListener("click", function(){
    window.clearInterval(timer)
})

reset.addEventListener("click", function(){
    document.querySelector(".chrono").innerHTML = 0
})

/* SETTIMEOUT  --->>> DECOMPTE Timer bombe <<<---*/
//va nous permettre d'éxecuter une action au bout d'un temps donnée

declangeurDecompte.addEventListener("click",function(){
    let myTime = parseInt(ecouteurData.innerHTML)
    //déclenche un compteur pour changer le compte à rebours de la bombe
    timer2 = window.setInterval(()=>{
        //décrémentation du temps
        myTime--
        //affichage du nouveau temps
        ecouteurData.innerHTML = myTime
    }, 1000)
    
    /*dans 5 secondes ma bombe va déclencher ma fonction qui fera exploser celle-ci
     A 5 seconde on arret le decompteur*/
    boom = window.setTimeout(()=>{
        //je stop l'interval du chrono
        window.clearInterval(timer2)
        //affichage de l'explosion
        ecouteurData.innerHTML = "BOOOOOM!"
    }, 5000)
})

desamorcer.addEventListener("click", function(){
    window.clearInterval(timer2)
    window.clearTimeout(boom)
    ecouteurData.innerHTML = "COUNTER TERRORIST WIN!"
})

/*
setInterval = va éxecuter une action sur un interval exemple: répètes moi un console.log("coucou") toutes les 1 secondes

clearInterval = va stopper notre répétition immédiatement (fin du setInterval)

setTimeOut = va éxecuter une action au bout d'un certain temps donné exemple: écris moi un console.log("coucou") dans 5s
il va attendre 5secondes avant d'exécuter l'action

clearTimeOut = va stopper l'exécution de notre setTimeout avant qu'il est eu le temps de finir, du coup l'action de se fera pas
*/