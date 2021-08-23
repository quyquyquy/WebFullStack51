const authorCopyRight = 'Ngo Duc Quy'

var sum = function(a, b) {
    return a + b
} 

var person = class{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    inforAuthor(){
        console.log('name : ' + this.name + 'age : ' + this.age)

    }
}

var authorInfor = {
    person: person,
    sum: sum,
    authorCopyRight: authorCopyRight,
}
module.exports = authorInfor;