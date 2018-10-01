let userName  = document.getElementById("login__username");
let passWord  = document.getElementById("login__password");
function checkForm(){
    if(userName.value == ""){
    alert("Je moet wel je username invullen!");
    userName.focus();
    return false;
    }

    re = /^\w+$/;
    if(!re.test(userName.value)) {
    alert("Error: Username must contain only letters, numbers and underscores!");
    form.username.focus();
    return false;
    }

    if(passWord.value.length < 8){
    alert("Error: Password moet minstens 8 karakters hebben!");
    passWord.focus();
    return false;        
    }

    re = /[0-9]{2,}/;
    if(!re.test(passWord.value)) {
    alert("Error: Password moet minstens 2 nummers hebben!");
    passWord.focus();
    return false;
    }

    re = /[a-z]/;
    if(!re.test(passWord.value)) {
    alert("Error: Je wachtwoord moet minstens 1 lowercase letter hebben!");
    passWord.focus();
    return false;
    }

    re = /[A-Z]/;
    if(!re.test(passWord.value)) {
    alert("Error: Je wachtwoord moet minstens 1 uppercase letter hebben!");
    passWord.focus();
    return false;
    }

    re = /[!@#$%^&*]/;
    if(!re.test(passWord.value)) {
    alert("Error: Je wachtwoord moet minstens een speciale karakter hebben!");
    passWord.focus();
    return false;
    }

    alert("Je hebt een valide wachtwoord gegeven!");
    return true;
}