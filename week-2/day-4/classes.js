class Bootcamp {
    constructor(name, style = `Web Dev`) {
        this.name = name
        this.style = style

        this.difficutly = `Hard`
    }
}

let mountain = new Bootcamp(`Dev Mountain`)
let hackbrite = new Bootcamp(`Hackbrite`)
// console.log(mountain)

Bootcamp.prototype.onCampus = true
// console.log(mountain.onCampus)