const inpTask = document.getElementById('task');
const inpDate = document.getElementById('date');
const outTask = document.getElementById('taskOutput');
const btnTask = document.getElementById('btnTask');
const btnSort = document.getElementById('sort');
const btnDel = document.getElementById('delete');

btnTask.onclick = function() {
    const task = inpTask.value;
    const date = inpDate.value;
    if(task){
        localStorage.setItem(task, date);
        location.reload();
    };
};

for(let i=0; i<localStorage.length; i++){
    const task = localStorage.key(i);
    const date = localStorage.getItem(task);
    if(task && date){
        outTask.innerHTML += `${task} and the dead line is ${date}<br/>`;
    }
    else{
        outTask.innerHTML += `${task} and no deadline <br/>`;
    };
    btnDel.onclick = function() {
        localStorage.removeItem(task);
        location.reload();
        alert('Removed task');
    };
    btnSort.onclick = function (){
            if(localStorage.length > 0){
               var storageArray = new Array();
               for (i=0;i<localStorage.length;i++){
                   storageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
                   console.log(localStorage.key(i))
                   console.log(localStorage.getItem(localStorage.key(i)))   
               };
            };
            
            var sortedArray = storageArray.sort();
            outTask.innerHTML = sortedArray;
         
    };
};


