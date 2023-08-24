import axios from 'axios'

const epNum = Math.floor(Math.random() * 6)

console.log(epNum)

axios.get('https://swapi.dev/api/films/')
    .then(res => {
    let movieTitle =  res.data.results[epNum].title
    document.querySelector('#star-wars-movie').innerText = movieTitle
})
