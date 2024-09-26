const createACC = document.getElementById('createAcc');
createACC.addEventListener('click', function(){
    document.getElementById('register-form').style.display = "flex";
    document.getElementById('login-form').style.display = "none";
});

const alrAcc = document.getElementById('alrAcc');
alrAcc.addEventListener('click', function(){
    document.getElementById('register-form').style.display = "none";
    document.getElementById('login-form').style.display = "flex";
});