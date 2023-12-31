import express, { query } from 'express'
import nunjucks from 'nunjucks'

const app = express()
app.use(express.urlencoded({ extended: false }));
nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', (req, res) => {
    res.render('home.html.njk', {
        name: `Michael`,
        favoriteThings: [`gym`, `dogs`, `anime`]
    })
})

app.get('/form', (req, res) => {
    res.render('form.html')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send(`
    <h1>I know your password ${req.body.name}</h1>
    `)
})

app.listen(4000, () => console.log(`app running on 4000`))