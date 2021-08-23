var authorModule = require('./example')

console.log('using person class of module: ')

var person = new authorModule.person('Ngo Duc Quy', 20)
person.inforAuthor()

var total = authorModule.sum(10, 20)
console.log(total)

var authorName = authorModule.authorCopyRight
console.log(authorName)