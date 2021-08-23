console.log(module)
var path = require('path')
var fileName = path.basename('/Users/TestPath/demo.js')
console.log(fileName)
var os = require('os')
console.log('Platform:', os.platform())
console.log('architecture:', os.arch())

var queryString = require('querystring')
var query = queryString.parse('search=oto&year=2018&model=Audi')
console.log(query)

var http = require('http')
http.createServer(function(request, response) {
    response.writeHead(200, {'content-Type': 'text/html'})
    response.end('hello world')
}).listen(8080)