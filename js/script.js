//loads all stuff when document loads
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("petName");
    const savedPet = localStorage.getItem("petType");
    const mode = localStorage.getItem("isLight");
    if (savedName && savedPet) {
        pet.src = savedPet;
        pet.style.opacity = '1';
        pet.style.width = '30%';
        pet.style.display = 'block';
        egg.style.display = 'none';
        nam.innerHTML = `${savedName}`;

        let ageText = document.getElementById('age')
        let age = parseFloat(localStorage.getItem('age'))||0
        ageText.innerHTML = age
        start()
    }
    if (mode === "true") {
        // Light mode
        document.getElementById('pet-status').classList.add('lightMode');
        document.getElementById('pet-actions').classList.add('lightMode');
        document.getElementById('head').classList.add('lightMode');
        document.getElementById('pet-image').classList.add('lMid');
    } else {
        // Dark mode
        document.getElementById('pet-status').classList.toggle('lightMode');
    document.getElementById('pet-actions').classList.toggle('lightMode');
    document.getElementById('head').classList.toggle('lightMode');
    document.getElementById('pet-image').classList.toggle('lMid');

        document.getElementById('pet-status').classList.add('darkMode');
        document.getElementById('pet-actions').classList.add('darkMode');
        document.getElementById('head').classList.add('darkMode');
        document.getElementById('pet-image').classList.add('dMid');
    }
    if(hatched){
        
        let startDate = getCookie("current")
        console.log(startDate, "working")
        document.getElementById('startDate').innerText = startDate
    }
});


let egg = document.getElementById("egg");
let pet = document.getElementById("pet");
let i = 0;
let goal = Math.floor(Math.random() * 10) + 1;
let hatched = localStorage.getItem("hatched")||false;
let nam = document.getElementById("name");
let pets = [
    "images/Porcupine-fish-Diodon-hystox.webp",
    "images/bat.jfif",
    "images/beetle.jfif",
    "images/cat.jfif",
    "images/crab.jpg",
    "images/man.jpg",
    "images/racoon.jfif",
    "images/walrus.jfif"
];
//randomly chooses a pet then saves the pet to local storage
let chosenPet = pets[Math.floor(Math.random() * pets.length)];
console.log(chosenPet);
console.log(pets[0]);
console.log(goal);

egg.addEventListener("click", function () {
    egg.classList.toggle("shake");
    setTimeout(() => {
        egg.classList.toggle("shake");
        return;
    }, 500);

    i++;
    console.log(i);

    if (i === goal) {
        egg.width = "0px";
        egg.style.display = "none";
        hatched = true;
        localStorage.setItem("hatched", hatched);
    }

    if (hatched) {
        pet.src = chosenPet;
        pet.style.display = "block";
        pet.style.opacity = '1';
        pet.style.width = '30%';
        console.log("egg is gone");
        console.log(pet.src, pet.width);
        names();
        startDate()
        
    }
});

    let Letterpattern =/[a-zA-Z]+/
function names() { //saves name after it gets hatched
    let e = window.prompt("What do you want to name your pet?");
    if (!Letterpattern.test(e)) {
        alert("Name must contain atleast one letter");
        names();
    } else {
        alert("Your pet's name is " + e + "!");
        console.log(e);
        localStorage.setItem("petName", e);
        localStorage.setItem("petType", chosenPet); // Save the image filename
        nam.innerHTML = `${e}`;
        start()
    }
}

let ld = document.getElementById('ld');
let isLight = localStorage.getItem("isLight") === "true"; // get as boolean

ld.addEventListener('click', function () { //function for light/dark mode
    isLight = !isLight; // Flip the mode
    localStorage.setItem('isLight', isLight);
    document.getElementById('pet-status').classList.toggle('lightMode');
    document.getElementById('pet-status').classList.toggle('darkMode');

    document.getElementById('pet-actions').classList.toggle('lightMode');
    document.getElementById('pet-actions').classList.toggle('darkMode');

    document.getElementById('head').classList.toggle('lightMode');
    document.getElementById('head').classList.toggle('darkMode');

    document.getElementById('pet-image').classList.toggle('lMid');
    document.getElementById('pet-image').classList.toggle('dMid');
});

