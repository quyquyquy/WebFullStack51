const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.set('views','./views')
app.set('view engine', 'pug')
app.get('/', (req,res) => {
    res.render('form')
})
app.post('/user-infor', (req,res) => {
    const {body} = req
    res.render('user', {body} )
})

app.listen(3002)