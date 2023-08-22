import setupCounter from './src/counter.js'
import './styles.css'
console.log(`hello from main.js`)

document.querySelector(`#app`).innerHTML = `
    <h1>Counter App</h1>

    <p>Click the button to increse the counter.</p>
    
    <div id="counter" class="counter"></div>
    <div id="another-one" class="counter"></div>
`

setupCounter(document.querySelector(`#counter`), 'plus')
setupCounter(document.querySelector(`#another-one`), 'minus')