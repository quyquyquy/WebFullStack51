const express = require('express')
const app = express()
const mongoose = require('mongoose')
const CarModel = require('./model/carModel')

const db = 'mongodb://localhost/car-exsample';
const port = 3009

mongoose.connect(db)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send('api working')
})

app.get('/car', (req,res) => {
    console.log(req.query.name)

    CarModel.find({name: req.query.name}).exec((err, car)=>{
        if(err){
            res.send('Khong the lay thong tin')
        }
        else{
            console.log('lay thong tin thanh cong')
            res.json(car)
        }
    })
})
app.put('/car/:id', (req, res) => {
    CarModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, car) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                // 1. find lai
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})

app.post('/car',(req, res) =>{
    var car = new CarModel()
    car.name = req.body.name
    car.manufacturer = req.body.manufacturer
    car.price = req.body.price

    car.save((err, car) => {
        if(err){
            res.send('error luu thong tin')
        }
        else{
            console.log('Da luu thong tin car', car)
            res.send(car)
        }
    })
})
app.listen(port, () => {
    console.log('app listening to port: ', port)
})