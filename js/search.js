const searchBar = document.getElementById('inpu') 
let histor = document.getElementById('history')
let search1 = []
let itemID=0

searchBar.addEventListener('input', searching)
function searching() {
    const searchTerm = searchBar.value.toLowerCase()
    const items = document.querySelectorAll('#ShopF .item')

    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase()
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }

        if (searchTerm === itemName && !search1.includes(itemName)) {
            itemID++
            search1.push(itemName)
            const key = `SearchName${itemID}`
            sessionStorage.setItem(key, itemName)
            histor.innerHTML += `<li id='${key}' onclick='searchByKey("${key}")'>${itemName}</li>`
        }
    })
}

// Handle clicking history items
function searchByKey(key) {
    const value = sessionStorage.getItem(key)
    searchBar.value = value
    searching()
}

