import axios from 'axios'

let getPokemon = async () => {
    const numPokemon = document.querySelector('#num-pokemon').value
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + numPokemon

    let res = await axios.get(url)

    let pokeList = ``
    console.log(res.data.results)
    for (let pokemon of res.data.results) {
        pokeList += `<li>${pokemon.name}</li>`
    }
    console.log(pokeList)
    document.querySelector('#pokemon-list').innerHTML = pokeList

    console.log(url)
}
const button = document.querySelector('#get-pokemon')
button.addEventListener('click', getPokemon)