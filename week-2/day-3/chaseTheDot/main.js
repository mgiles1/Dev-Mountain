const dot = document.querySelector(`#dot`)

let colors = [`red`, `blue`, `green`, `yellow`, `pink`]

const getRanCoord = () => {
    return Math.random() * 90
}

const getRandArrVal = (arr) => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

const moveDot = (evt) => {
    console.log(`dot has been touched`)

    evt.target.style.left = `${getRanCoord()}vw`
    evt.target.style.top = `${getRanCoord()}vh`
    evt.target.style.backgroundColor = getRandArrVal(colors)
}

dot.addEventListener(`mouseover`, moveDot)