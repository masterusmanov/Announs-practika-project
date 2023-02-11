let login = document.querySelector('#login');
let password = document.querySelector('#password');
let error = document.querySelector('#error');

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
        alert("You did not enter a login!");
    }else if(password.value == ''){
        alert("You did not enter a password!")
    }

    if(login.value == 'adminProject' && password.value == 'projectAdmin'){
        location.href = '../html/update_admin.html'
    }else{
        error.innerHTML = 'Maxsus kalit xato'
    }
});