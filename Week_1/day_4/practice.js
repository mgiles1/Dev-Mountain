const greetingMachine = (greeting, name) => {
    return greeting(name)
}

const yo = (name) => {
    return `yo ${name}`
}

const sup = (name) => {
    return `'Sup ${name}`
}

const hello = (name) => {
    return `Hello, ${name}`
}


let greetings = [yo, sup, hello]
let names = [`Michael`, `London`, `Jacob`, `Truett`]

// console.log(greetingMachine(greetings[0], names[3]))
// console.log(Math.floor(Math.random() * greetings.length))
// console.log(parselFloat(2.000000.toFixed(2)))

const getRanVal = (arr) => {
    let ranInt = Math.floor(Math.random() * arr.length)
    return arr[ranInt]
}
// console.log(getRanVal(names))
// console.log(greetingMachine(getRanVal(greetings), getRanVal(names)))

// =================================================================================================================

const milleniumFalcon = {
    name: `Millenium Falcon`,
    hull: 100,
    sheilds: 50,
    power: 30,
    attack: (target) => {
        if(target.sheilds > 0){
            target.sheilds -= milleniumFalcon.power
            console.log(`${target.name}'s took a heavy hit!`)
        } else if(target.sheilds <= 0){
            target.hull -= milleniumFalcon.power
            target.hull > 50 ? console.log(`${target.name} tool a direct hit`) : console.log(`${target.name}'s hull is in critical condition`)
            }
        }
    }

const starshipEnterprise = {
    name: `Starship Enterprise`,
    hull: 100,
    sheilds: 100,
    power: 5,
    attack: (target) => {
        if(target.sheilds > 0){
            for(let i = 0; i < 3; i++){
                target.sheilds -= starshipEnterprise.power
            }
            console.log(`${target.name} recieved a laser barrage!`)
        } else if(target.sheilds <= 0){
            target.hull -= starshipEnterprise.power
        }
        target.hull > 50 ? console.log(`${target.name} hull has been damaged`) : console.log(`${target.name}'s hull is in critical condition`)
    }
}

// milleniumFalcon.attack(starshipEnterprise)
// console.log(starshipEnterprise.sheilds)
// starshipEnterprise.attack(milleniumFalcon)
// console.log(milleniumFalcon.sheilds)
let rounds = 0
while(starshipEnterprise.hull > 0 || milleniumFalcon.hull > 0) {
    milleniumFalcon.attack(starshipEnterprise)
    starshipEnterprise.attack(milleniumFalcon)
    rounds++
}

starshipEnterprise.hull <= 0 ? console.log(`The Starship Enterprise has fallen`) : console.log(`The Millenium Falcon has fallen`)
console.log(rounds)