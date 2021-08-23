const express = require('express')
const app = express

var checkRequest = (req,res,next) => {
    if (req.url === '/admin') {
        res.send('bạn không có quyền truy cập')
    }
    else{
        next()
    }
}

app.use(checkRequest)

app.get('/',function(req,res) {
    res.send('truy cập homepage thành công')
})
app.get('/shopping-cart',function(req,res) {
    res.send('truy cập homepage thành công')
})

app.get('/admin', function(req,res){
    res.send('truy cập admin thành công')
})
app.listen(3000)