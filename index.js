let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrease() {
    if (count >= 1){
        count -= 1
        countEl.textContent = count
    }else {
        console.log("Number cannot negative")
    }
    }

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
