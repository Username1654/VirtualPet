let hap = document.getElementById("hap");
let hun = document.getElementById("hun");
let ene = document.getElementById("ene");
let h = 100
let hu = 0
let e = 100
let coin = document.getElementById("coin");
 let coins = parseFloat(localStorage.getItem("coins")) || 0;
coin.innerHTML = coins.toFixed(0)
hap.style.height = `${h}%`;
hap.style.backgroundColor = "green";
hap.style.width = "10%";
hun.style.height = `${hu}%`;
hun.style.backgroundColor = "green";
hun.style.width = "10%";
ene.style.height = `${e}%`;
ene.style.backgroundColor = "green";
ene.style.width = "10%";
function start(){
if (localStorage.getItem("petName")) {

let interval = setInterval(() => {  //interval for hunger, energy, and happiness
    //each of the stats affect each other
    if (e > 50 && h < 100) {
        h += 0.2;
    }
    if (e <= 50) {
        h -= 0.2;
    }

    if (hu < 100) {
        hu += 0.2;
    }

    // Hunger affects energy and bar color
    if (hu >= 80) {
        hun.style.backgroundColor = "red";
        e -= 0.4;
    } else if (hu >= 50) {
        hun.style.backgroundColor = "yellow";
        e -= 0.2;
    } else {
        hun.style.backgroundColor = "green";
    }

    // Happiness bar color
    if (h >= 100) {
        h = 100;
        hap.style.backgroundColor = "green";
    } else if (h < 20) {
        hap.style.backgroundColor = "red";
    } else if (h < 50) {
        hap.style.backgroundColor = "yellow";
    }else {
        hap.style.backgroundColor = "green";
    }
    if(h <=0){
        clearInterval(interval);
        alert("your pet is sad and has run away!");
        localStorage.clear();
        location.reload();
        clearCookies()
    } 

    
    // Update bar widths
    hap.style.height = `${h}%`;
    hun.style.height = `${hu}%`;
    ene.style.height = `${e}%`;
    if(e <0){
        e =0
    }
    if(hu <0){
        hu = 0
    }
    if(h <0){
        h = 0
    }

    if(h >=80){
        
        coins += 0.1;
        
        localStorage.setItem("coins", coins);
        coin.innerHTML = coins.toFixed(0);
    }
}, 100);
}
}
//buttons that afftect stats
function feed() {
if(hu < 100 && hu > 0){
    hu -=5
    hun.style.width = `${hu}%`;
}
}
function play() {
    if(h< 100 && h > 0){
        h +=1
        hap.style.height = `${h}%`;
    }
    }
 function sleep() {
        if(e< 100 && e > 0){
            e+=2.5
            ene.style.height = `${e}%`;
        }
        }

        
