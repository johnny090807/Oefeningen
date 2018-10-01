let userName  = document.getElementById("login__username");
let passWord  = document.getElementById("login__password");
    
      
    function checkForm(){
        let passwordArray = passWord.value.split('');
        let specialeKarakters = ["!","@","#","$","%","^","&"];
        let passwordNumbers = 0;
        let passwordSpecialCharacter = 0;
        let passwordLowerCase = 0;
        let passwordUpperCase = 0;
        var lowerCaseArray =[]; 
        let x;
        let y;

        for (var index='a'.charCodeAt(0),end='z'.charCodeAt(0); 
            index <=end; ++index)
            {lowerCaseArray.push(String.fromCharCode(index));} lowerCaseArray.join();


        for (x = 0; x < passwordArray.length; x++){
            for(y = 0; y < 10; y++){
                if (y == passwordArray[x]){
                    passwordNumbers++;
                }   
                
            }
        }
        for (x = 0; x < passwordArray.length; x++){
            for(y = 0; y < lowerCaseArray.length; y++){
                if (lowerCaseArray[y] == passwordArray[x]){
                    passwordLowerCase++;
                }   
                
            }
        }
        for (x = 0; x < passwordArray.length; x++){
            for(y = 0; y < lowerCaseArray.length; y++){
                if (lowerCaseArray[y].toUpperCase() == passwordArray[x]){
                    passwordUpperCase++;
                }   
                
            }
        }
        for (x = 0; x < passwordArray.length; x++){
            for(y = 0; y < specialeKarakters.length; y++){
                if (specialeKarakters[y] == passwordArray[x]){
                    passwordSpecialCharacter++;
                }   
                
            }
        }

        if(userName.value == ""){
            showError("Je moet wel je username invullen!");
            userName.focus();
            return false;
        }
        if(passWord.value == ""){
            showError("Je moet wel je wachtwoord invullen!");
            passWord.focus();
            return false;
        }        
        if(passWord.value.length < 8){
            showError("Wachtwoord moet minstens 8 karakters hebben!");
            passWord.focus();
            return false;        
        }
        if(passwordLowerCase < 1){
            showError("Het wachtwoord moet 1 lowercase karakter hebben!");
            passWord.focus();
            return false;
        }
        if(passwordUpperCase < 1){
            showError("Het wachtwoord moet 1 uppercase karakter hebben!");
            passWord.focus();
            return false;
        }
        if(passwordNumbers < 2){
            showError("Het wachtwoord moet meer dan 2 nummers bevatten!");
            passWord.focus();
            return false;
        }
        if(passwordSpecialCharacter < 1){
            showError("Het wachtwoord moet 1 speciaal karakter hebben!");
            passWord.focus();
            return false;
        }
        showSuccess("Je hebt een valide wachtwoord gegeven!");
       
    }

// SHOW ERROR OR SUCCESS //
function showError(string){
    let errorDiv = document.getElementById("login__error");
    errorDiv.innerHTML = "";
    let template = `
            <div class="login__errormsg">
                <p>${string}</p>
            </div>
            `;
    errorDiv.insertAdjacentHTML('beforeend', template);
}
function showSuccess(string){
    let errorDiv = document.getElementById("login__error");
    errorDiv.innerHTML = "";
    let template = `
            <div class="login__successmsg">
                <p>${string}</p>
            </div>
            `;
    errorDiv.insertAdjacentHTML('beforeend', template);
}

// ON ENTER START CHECKER //
userName.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("login__button").click();
  }
});
passWord.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("login__button").click();
  }
});