const circle = document.querySelector(`#circle`)
const btn = document.querySelectorAll(`.color-btn`)
const form = document.querySelector(`form`)
const input = document.querySelector(`input`)
const list = document.querySelector(`ul`)
console.log(btn)

// ============================================= //

const circleClick = (evt) => {
    console.log(evt.target.id)
    evt.target.style.backgroundColor = `purple`
}

const changeColor = (evt) => {
    console.log(evt.target)
    circle.style.backgroundColor = evt.target.id
}

/* when working wih submit events always do prevent default
 to make sure the data isn't lost */
const addName = (evt) => {
    evt.preventDefault()
    console.log(input.value)
    let listItem = document.createElement(`li`)
    listItem.textContent = input.value
    list.appendChild(listItem)
    listItem.addEventListener(`click`, deleteName)
    input.value = ``
}

const deleteName = (evt) => {
    evt.target.remove()
}


// ============================================= //

circle.addEventListener(`click`, circleClick)

btn.forEach(button => {
    button.addEventListener(`click`, changeColor)
})

form.addEventListener(`submit`, addName)