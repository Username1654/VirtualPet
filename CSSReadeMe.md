## CSS
 1. **Global Reset**
 ```
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
 ```
2. **CSS Variables**
```
:root{
    --light:rgb(255, 236, 170);
    --dark:rgb(36, 17, 124);
}
```
3. **Responsive Design**
```
@media screen and (max-width: 768px) 
```
4. **Typography styling**
Kept it default, figured it would be easiest to read.
5. **Color Scheme**
```
#inventory, #shop{
    text-align: center;
    color: white; 
    display: block;
    grid-row: 2;
    grid-column: 2/4;
    background-color: #2c2c2c; 
    z-index: 999;
    }
```
Black background and white text, stuff with a darker background get white text
6. **Reusablity**
```
.item{
    grid-row: 2;
    text-align: center;
    background-color: white;
    width: 10%;
    min-width: 100px;
    height: fit-content;
    margin: 10px;
    color: black;
}
```
.item applies to all items

7. **CSS Transitions**
```
#hap, #hun, #ene {
    width: 30px;
    background-color: green;
    transition: height 0.3s;
}
```
Makes the height of all these move smoothly

8. **Hover effects**
```
.item:hover{
        padding: 10px;
        background-color: #d9d7d7;
    }
```
9. **Layout Containers**
```
#con{
     width: 100%;
    height: 100vh; 
    display: grid;
    background-color: #f0f8ff;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 1fr;
    z-index: 5;
}
```

10. **Z-index & Posistioning**
```
#head {
    grid-column: 1/4;
    grid-row: 1;
    display: flex;
    justify-content:flex-start;
    align-items: center;     
    overflow: hidden;
    padding: 20px;  
    z-index: 999; <--
}

  pet.style.position = 'relative'
```
11. **Theme Customization**
```
.lightMode{
    background-color: var(--light);
    color: #333333;
}

.darkMode{
    background-color: var(--dark);
    color: #f0f0f0;
}
```
12. **Button Styling** 
```
button{
        font-size: 2em;
        margin: 10px;
    }
```
13. 