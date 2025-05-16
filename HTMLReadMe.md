## HTML

1. **Meta Tags**
```
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
2. **Semantic Elements**
```
 <header id="head" class="lightMode">
            
            <h1 id="headText">Virtual Pet:</h1>
            <p id="name"></p>
          
            
        </header>
```
3. **Heading Hierarchy**
```
  <h1 id="headText">Virtual Pet:</h1>
  <h2>Shop!</h2>
  ```
4. **Proper Button/Input Elements**
```
    <button id="feed" onclick="feed()">Feed</button>        
    <button id="play" onclick="play()">Play</button>         
    <button id="sleep" onclick="sleep()">Sleep</button>
```
5. **Anchor Tags ( href with valid values)**
```
 <link rel="icon" href="download.jfif">
```

6. External CSS/JS link and script
```
 <script src="js/script.js"></script>
 <script src="js/age.js"></script>
 <script src="js/stats.js"></script>
 <script src="js/shop.js"></script>
 <script src="js/search.js"></script>
 <script src="js/movement.js"></script>
```

7. **Responsive Containers in Layout**
```
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
and 
```
 <div id="pet-status" class="lightMode">
            <br>
            <p>Coin: $<span id="coin"></span></p>
            <hr>
            <!--stats about the pet-->
            <div id="tex">
                <p id="pet-happiness">Happiness:</p>
                <p id="pet-hunger">Hunger: </p>
                <p id="pet-energy">Energy:</p>
            </div>
            <div id="stats">
            <div id="hap"></div>
            <div id="hun"></div>
            <div id="ene"></div>
            </div>
            <hr>
            <p>Age: <span id="age"></span></p>
            <hr>
            <br>
            <!--buttons for pet-->
            <div id="buttons">
            <button id="feed" onclick="feed()">Feed</button>
           
            <button id="play" onclick="play()">Play</button>
           
            <button id="sleep" onclick="sleep()">Sleep</button>
            </div>
        </div>
```

8. **HTML Comments**

```
<!--stats about the pet--> //line 26
<!--Middle div, holds the egg and the pet image, pet image src is populated through js--> //line 51
 ```
 9. **Responsive media**
 ```
#pet-image img{
    width: 50%; 
    min-width: 150px;
    aspect-ratio: 1/1;
    border-radius: 15px;
}
 ```
 10. **Passes the w3c HTML validation**
