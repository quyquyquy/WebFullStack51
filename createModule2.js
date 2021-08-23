var http = require('http')
var createModule = require('./createModule')

console.log('module được import')
console.log(createModule)

console.log('module hiện tại')
console.log(module)

http.createServer(function(request, response){
    console.log('server đang lắng nghe trên cổng')
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('thoi gian hien tai:' + createModule.getMyDateTime()+'<br />')
    response.write('duong dan file con: '+ createModule.getDirName())
    response.end('hello world')
}).listen(8080)