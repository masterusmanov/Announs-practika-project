// const bcrypt = require ('bcryptjs');

let login = document.querySelector('#login');
let password = document.querySelector('#password');
let password1 = document.querySelector('#password1');
let elon = document.querySelector('#elon');
let elon1 = document.querySelector('#elon1');
let elon2 = document.querySelector('#elon2');

function showPsw(){
    if(password.type === "password"){
        password.type = 'text';
        password1.type = 'text';
    }else{
        password.type = 'password';
        password1.type = 'password';
    }
};



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let len = login.value.length
    let len1 = password.value.length;
    let len2 = password1.value.length;
    
    if(login.value == '' || len < 8){
        return elon.innerHTML = '*Loginda xatolik!'
    }else if(password.value == '' || len1 < 8){
        return elon1.innerHTML = '*Kalitda xatolik!'
    }else if(password1.value == '' || len2 < 8){
        return elon2.innerHTML = '*Takror kalitda xatolik!'
    }
    if(password.value == password1.value){
        let hashLogin = btoa(login.value);
        let hashPsw = btoa(password.value);
        let user = {
            login: hashLogin,
            password: hashPsw,
        }
        let users = JSON.stringify(user)
        localStorage.setItem('user', users)
        location.href = '../html/login.html'
    }

    
    
});