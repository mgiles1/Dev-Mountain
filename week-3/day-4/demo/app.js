import express from "express";
import ViteExpress from 'vite-express'
import bodyParser from 'body-parser'

const app = express();
const port = 8000
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})

app.post('/oder-cookies', (req, res) => {
    // console.log(re.body)
    let totalPrice
    if (req.body.cookieType === 'Snickerdoodle') {
        totalPrice = re.body.qty * 2.25
    } else {
        totalPrice = req.body.qty & 3
    }
    res.json({ msg: `Your order is ${totalPrice}`, totalPrice: totalPrice })
})

ViteExpress.listen(app, port, () => {
    console.log(`Server is running on localhost ${port}`)

})
