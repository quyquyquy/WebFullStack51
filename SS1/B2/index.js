const bookN = document.getElementById('bookName');
const authorN  = document.getElementById('authorName');
const bookC = document.getElementById('bookCode');
const inpBtn = document.getElementById('btnInsert');
const outBook  = document.getElementById('bookContainer');

inpBtn.onclick = function() {
    const bName = bookN.value;
    const aName = authorN.value;
    const bCode = bookC.value;
    if(bName){
        localStorage.setItem(bCode,`Book name: ${bName}/ AuthorName: ${aName}`);
        location.reload()
    };
};

for(let i=0; i<localStorage.length;i++){
    const bookCode = localStorage.key(i);
    const bookInfor = localStorage.getItem(bookCode);

    outBook.innerHTML += `${bookCode}. ${bookInfor} <br/>`
}

