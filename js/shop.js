
//auto load all things that should be loaded
window.addEventListener("DOMContentLoaded", () => {
    let carrot =localStorage.getItem('carrot')|| 0
    let apple = localStorage.getItem('apple')|| 0
    let orange = localStorage.getItem('orange')|| 0
    let blueberry = localStorage.getItem('blueberry')|| 0
    let steak = localStorage.getItem('steak')|| 0
    let inventory = document.getElementById('inventory')
    let inv  = document.getElementById('inv')
    for(let i=1; i<=carrot; i++){
        inv.innerHTML += `<div class="item" id='carrot${i}' onclick='carro(${i})'>
    <h3>Carrot</h3> <br>
    <hr> <img src='images/carrots.jpg' width='50px'> 
    <p>-1 hunger</p>
    </div>`
    }
    for(let i=1; i<=apple; i++){
        inv.innerHTML += `<div class="item" id='apple${i}' onclick='appl(${i})'>
    <h3>Apple</h3> <br>
    <hr> <img src='images/apple.jfif' width='50px'> 
    <p>-1 hunger</p>
    </div>`
    }
    for(let i =1; i<=orange;i++){
        inv.innerHTML += `<div class="item" id='orange${i}' onclick='orang(${i})'>
    <h3>Orange</h3> <br>
    <hr> <img src='images/orange.webp' width='50px'> 
    <p>-2 hunger</p>
    </div>`
    }
    for(let i=1; i<=blueberry; i++){
        inv.innerHTML += `<div class="item" id='blueberry${i}' onclick='blueberr(${i})'>
    <h3>Blueberry</h3> <br>
    <hr> <img src='images/blueberry.jfif' width='50px'> 
    <p>-4 hunger</p>
    </div>`
    }
    for(let i=1; i<=steak; i++){
        inv.innerHTML += `<div class="item" id='steak${i}' onclick='stea(${i})'>
        <h3>Steak</h3> <br>
        <hr> <img src='images/steak.jfif' width='50px'> 
        <p>-100 hunger</p>
         </div>`
    }
})
//cart that holds all basic values for cart
let cart = [
    {"item":"Carrot",  "price":"10", "hunger":"10", "img":'images/carrots.jpg'},
    {"item":"Apple", "price":"15", "hunger":"20", "img":'images/apple.jfif'},
    {"item":"Orange", "price":"20", "hunger":"30","img":'images/orange.webp'},
    {"item":"Blue berries", "price":"50", "hunger":"50", "img":'images/blueberry.jfif'},
    {"item":"Steak", "price":"150", "hunger":"100", "img":'images/steak.jfif'}
]
let item = document.getElementById('ShopF')
// let parsed = JSON.parse(cart)
console.log(cart.x)

//for each thing in the cart it'll create a div with corulating values
Object.keys(cart).forEach(key => {
const value = cart[key];
console.log(`Key: ${key}, Value: ${value}`)
console.log(value.img)
   item.innerHTML += `<div class="item" id='i${key}'>
   <h3>${value.item}</h3><br>
   <hr> <img src='${value.img}' width='50px'> 
   <p>-${value.hunger} hunger</p>
   <p> $${value.price}
   <p> </div>`
});

let item1 = document.getElementById('i0')
let item2 = document.getElementById('i1')
let item3 = document.getElementById('i2')
let item4 = document.getElementById('i3')
let item5 = document.getElementById('i4')

let inventory = document.getElementById('inventory')
let inv  = document.getElementById('inv')
let carrot =localStorage.getItem('carrot')|| 0
let apple = localStorage.getItem('apple')|| 0
let orange = localStorage.getItem('orange')|| 0
let blueberry = localStorage.getItem('blueberry')|| 0
let steak = localStorage.getItem('steak')|| 0

//shop and inventory area (feed opens inventory)
inventory.style.display = 'none'
function feed(){
  if(inventory.style.display == 'none'){
    inventory.style.display = 'block'
        inventory.style.opacity = '1'
    }else{
        inventory.style.display = 'none'
        inventory.style.opacity = '0'
    }
}
document.getElementById('shop').style.display = 'none' 
document.getElementById('shopping').addEventListener('click', function(){
 
if(document.getElementById('shop').style.display == 'none'){
document.getElementById('shop').style.display = 'block'

    document.getElementById('shop').style.opacity = '1'
}else{
    document.getElementById('shop').style.display = 'none'

    document.getElementById('shop').style.opacity = '0'
}
})
console.log(coins)
//event listeners to buy food, each one is named off the json "cart"
item1.addEventListener('click', function(){
    if(coins >=10 ){
        console.log(coins)
        coins -=10
       
    carrot++
    localStorage.setItem('carrot', carrot)
    console.log(carrot, "carrots")
    inv.innerHTML += `<div class="item" id='carrot${carrot}' onclick='carro(${carrot})'>
    <h3>Carrot</h3> <br>
    <hr> <img src='images/carrots.jpg' width='50px'> 
    <p>-1 hunger</p>
    </div>`
    }
})
item2.addEventListener('click', function(){
    if(coins >=15){
        coins -=15
    apple++
    localStorage.setItem('apple', apple)
    console.log(apple, "apple")
    //sends what ever you clicked from the store to the inventory
    inv.innerHTML += `<div class="item" id='apple${apple}' onclick='appl(${apple})'>
    <h3>Apple</h3> <br>
    <hr> <img src='images/apple.jfif' width='50px'> 
    <p>-1 hunger</p>
    </div>`
    }
})
item3.addEventListener('click', function(){
    if(coins >=20){
        coins -=20
    orange++
    localStorage.setItem('orange', orange)
    console.log(orange, "orange")
    inv.innerHTML += `<div class="item" id='orange${orange}' onclick='orang(${orange})'>
    <h3>Orange</h3> <br>
    <hr> <img src='images/orange.webp' width='50px'> 
    <p>-2 hunger</p>
    </div>`
    }
    
})
item4.addEventListener('click', function(){
    if(coins >=50){
        coins-=50
    blueberry++
    localStorage.setItem('blueberry', blueberry)
    console.log(blueberry, "blueberry")
    inv.innerHTML += `<div class="item" id='blueberry${blueberry}' onclick='blueberr(${blueberry})'>
    <h3>Blueberry</h3> <br>
    <hr> <img src='images/blueberry.jfif' width='50px'> 
    <p>-4 hunger</p>
    </div>`
    }
    
})
item5.addEventListener('click', function(){
    if(coins >=100){
        coins -=100
    
    steak++
    localStorage.setItem('steak', steak)
    console.log(steak, "steak")
    inv.innerHTML += `<div class="item" id='steak${steak}' onclick='stea(${steak})'>
    <h3>Steak</h3> <br>
    <hr> <img src='images/steak.jfif' width='50px'> 
    <p>-100 hunger</p>
     </div>`
    }
})
//section for eating, each function named after food minus the last letter

//e is a variable passed from two different variables working simultaneously
// for carro(e) e is made of i from a for loop and the variable carrot
function carro(e){
    //this is what happens when you click on the carrot from the inventory
    console.log('worked')
    console.log(hu, "before")
    hu -=10
    console.log(hu, "after")
    carrot--
    let a = document.getElementById(`carrot${e}`)
    a.remove()
    localStorage.setItem('carrot', carrot)
}
function appl(e){
    hu -=20
    apple --
    let a = document.getElementById(`apple${e}`)
    a.remove()
    localStorage.setItem('apple', apple)
}
function orang(e){
    hu -=30
    orange --
    let a = document.getElementById(`orange${e}`)
    a.remove()
    localStorage.setItem('orange', orange)
}
function blueberr(e){
    hu -= 50
    blueberry--
    let a = document.getElementById(`blueberry${e}`)
    a.remove()
    localStorage.setItem('blueberry',blueberry)
}
function stea(e){
    hu -=100
    steak --
    let a = document.getElementById(`steak${e}`)
    a.remove()
     localStorage.setItem('steak', steak)
}
