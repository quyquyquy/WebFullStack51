const inpBtn = document.getElementById('inpBtn')
const uName = document.getElementById('userName')
const uEmail = document.getElementById('email')
const uCo = document.getElementById('Co')
const uFollow = document.getElementById('follower')
const uAva = document.getElementById('avatar')

inpBtn.onclick = async () => {
    const uInp = document.getElementById('inp').value
    if(uInp.trim() === ""){
        alert('Please, Enter user name')
        return
    }

    let data = await fetch(`https://api.github.com/users/${uInp}`)
    uData = await data.json();
    if(uData.name == null){
        uName.innerHTML = `User Name does not exist`
    }
    else{
        uName.innerHTML = `Name: ${uData.name}`
    }
    if(uData.email == null){
        uEmail.innerHTML = `Email does not exist`
    }
    else{
        uEmail.innerHTML = `Email: ${uData.email}`
    
    }
    if(uData.company == null){
        uCo.innerHTML = `No company`
    }
    else{
        uCo.innerHTML = `Company: ${uData.company}`
    
    }
    if(uData.followers == null){
        uFollow.innerHTML = `No follower`
    }
    else{
        uFollow.innerHTML = `followers: ${uData.followers}`
    
    }
    if(uData.avatar_url === null){
        uAva.innerHTML = `No avatar`
    }
    else{
        uAva.innerHTML = `Avatar:<br> <img src="${uData.avatar_url}" alt="" style="width:200px " >`
    }
}
