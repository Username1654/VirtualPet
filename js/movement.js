//movemet for fun
if(navigator.platform.startsWith("Win") || navigator.platform.startsWith("Mac") ){ //checks to see if its on computer !Not checked to see if it works! 
    console.log("This is a computer");
    let buttons = document.getElementById('buttons')
    let ee = document.createElement('button')
    ee.innerHTML = "Movement"
    ee.setAttribute("title", "WASD to move your animal")
    ee.id='bb'
    buttons.appendChild(ee)
}

let button = document.getElementById('bb')
let l = 0
let t = 1
let p = document.getElementById('pet')
p.style.top =`${t}%`
p.style.left =`${l}%`
//since the animal starts at 0 we'll have to use negative values to move up or left
button.addEventListener('click', function(){
    pet.style.position = 'relative'
})
document.addEventListener('keypress', function(e){
    if(pet.style.position === 'relative'){
    if(e.key ==="w"){
        if(t >= -35){
        t--
        p.style.top =`${t}%`
        console.log(t)
        }
   }
   if(e.key ==="s"){
    if(t<=35){
    t++
    p.style.top =`${t}%`
    console.log(t)
    }
}
if(e.key ==="a"){
    if(l >= -35){
     console.log(l)
    l--
    p.style.left =`${l}%`
    }
}
if(e.key ==="d"){
    if(l <= 35){
    l++
    p.style.left =`${l}%`
    console.log(t)
    }
}
}
})

