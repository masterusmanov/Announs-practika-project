let login = document.querySelector('#login');
let password = document.querySelector('#password');
let err = document.querySelector('#err');
let xato = document.querySelector('#xato');
let xato1 = document.querySelector('#xato1');

function showPsw(){
    if(password.type === "password"){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(login.value == ''){
        xato.innerHTML = "* Maydonni kiritmadingiz!";
    }else if(password.value == ''){
        xato1.innerHTML = "* Maydonni kiritmadingiz!";
    }

    let users = JSON.parse(localStorage.getItem('user'));
    let lgn = atob(users.login)
    let psw = atob(users.password)

    if(login.value == 'adminProject' && password.value == 'projectAdmin'){
        location.href = '../html/admin_access.html'
    }else if(login.value == lgn && password.value == psw){
        location.href = '../html/admin_access.html'
    }else{
        err.innerHTML = 'Maxsus kalit so\'zlarda xatolik'
    }
});