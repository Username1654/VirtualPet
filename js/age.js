//age moves up a every minute simulating a year for your pet
        let ageText = document.getElementById('age')
        let age = parseFloat(localStorage.getItem('age'))||0
        ageText.innerHTML = age
        setInterval(() => {
        
            if(localStorage.getItem('hatched') =="true"){
                 console.log("Hatched");
            age+=1
            console.log(age)
            ageText.innerHTML = age
            localStorage.setItem("age", age)
            if(age == 1){
                window.alert("Congrats on a year old pet (or one minute in the game)")
            }
            if(age == 5){
                window.alert("your pet has lived for 5 years!")
            }
        }
},60000)
let time = document.getElementById('Timer')


function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
  }

  

if (startDate) {
  console.log("Cookie value:", startDate);
} else {
  console.log("Cookie not found");
}

function clearCookies(){
    let cookie = document.cookie
    for(let i=0; i<=cookie.length; i++){
        document.cookie = cookie[i] + "=;expires="
                    + new Date(0).toUTCString();
    }
}
function startDate(){
  let fullTime = new Date()
    let day = fullTime.getDate()
    let month = fullTime.getMonth()
    let year = fullTime.getFullYear()
    console.log("Current", `${month+1}/${day}/${year}`)
    document.cookie = `current=${month+1}/${day}/${year}; expires= ${month}/${day+5}/${year}`
    let current = getCookie("current")
    console.log("cookie time",current)
    let startDate = getCookie("current") || `${month}/${day}/${year}`
    document.getElementById('startDate').innerText = startDate
}