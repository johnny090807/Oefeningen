let todo = document.getElementById("todo_description");
let notification = document.getElementById("todo_notification");
let notificationArray = [];
let todayDate = Date.now();
let main_div = document.getElementById("main");
let i;
getNotificationArray();
makeNotes();
function makeNotes(){
    if(notificationArray != null){
        for(i = 0; i < notificationArray.length; i++){
            var date = new Date(notificationArray[i].date)
            var day = date.getDay();
            var month = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            if (hours < 10){
                hours = "0" + hours
            }
            var minutes = date.getMinutes();
            if (minutes < 10){
                minutes = "0" + minutes
            }
            let formattedDate = year + "/" + month + "/" + day + " " + hours + ":" + minutes;
            let template = `
                <div class="main__holder">
                <h2 class="main__todo">${notificationArray[i].todo}</h2>
                <h6 class="main__made">${formattedDate}</h6>
                <p style="margin-left: 10px;">Notification:</p>
                <p class="main__notification">${notificationArray[i].notification}</p>
            </div>
            `
            main_div.insertAdjacentHTML('beforeend', template);
        }
    }else{

    }
}

function refreshPage(){
    location.reload();
}

function openNav() {
    document.getElementById("sideNav").style.width = "100%";
    todo.required = "required";
    notification = "required";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    todo.required = "";
    notification = "";
}

// Dropdown functions

function activateDropDown(){
    let dropdown = document.getElementById("header__dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
        else{
            dropdown.style.display = "block";
        }
}

// End of dropdown functions

function darkModeToggle(){
    let select = document.getElementsByClassName("header__select")[0];
    let header = document.getElementsByClassName("header")[0];
    let body = document.getElementsByTagName("body")[0];
    let dropdown = document.getElementById("header__dropdown");
    let checkbox = document.getElementsByClassName("header__dropdown--checkbox")[0];
    if(checkbox.checked == true){
        header.style.backgroundColor = "#111416";
        header.style.boxShadow = "0px 10px 10px #303030";
        body.style.backgroundColor = "#111416";
        select.style.backgroundColor = "#111416";
        dropdown.style.backgroundColor = "#111416";
        dropdown.style.color = "#454D52";
        dropdown.style.boxShadow = "0px 10px 10px #303030";
    }else{
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "0px 10px 10px #bcbcbc";
        body.style.backgroundColor = "transparent";
        select.style.backgroundColor = "transparent";
        dropdown.style.backgroundColor = "white";
        dropdown.style.color = "black";
        dropdown.style.boxShadow = "0px 10px 10px #bcbcbc";
    }

}


           
function addNotification(){
    let notification = document.getElementById("todo_notification");
    let notificationTime = document.getElementById("todo_notificationTime");
    let checkbox = document.getElementById("todo_notificationbtn");
    if(checkbox.checked == true){
        notification.style.display= "";
        notification.required= true;
        notificationTime.style.display= "";
    }
    else
    {
        notification.style.display= "none";
        notification.required= false;
        notificationTime.style.display= "none";
    }
}

function addNote(){
let notification = document.getElementById("todo_notification");
let notificationTime = document.getElementById("todo_notificationTime").value;
    getNotificationArray();

    let note = {
        todo: todo.value,
        date: 1537777777777,
        notification: notification.value + " " + notificationTime
    }
    if (note.notification == ' '){
        note.notification = "No notification added."
    }
    if(notification.required == false && notification.value == "" && todo != null){
        notificationArray.push(note);
        console.log(notificationArray);
        localStorage.setItem("notificationArray", JSON.stringify(notificationArray));
        return;
    }
    if(notification.required == true && notification.value != "" && todo != null){
        notificationArray.push(note);
        console.log(notificationArray);
        localStorage.setItem("notificationArray", JSON.stringify(notificationArray));
        return;
    }
}
function getNotificationArray(){
    if(JSON.parse(localStorage.getItem("notificationArray")) == null){
        return;   
    }
    else{
        notificationArray = JSON.parse(localStorage.getItem("notificationArray"));
    }
}

function sortOn(){
    let sortElement = document.getElementById("header__select");
    console.log(sortElement.selectedIndex);
    if(sortElement.selectedIndex == 2){
        sortByCreation();
    }
    else if(sortElement.selectedIndex == 3){
        sortByName();
    }
    else if(sortElement.selectedIndex == 0){
        allNotes();
    }
}

function allNotes(){
    getNotificationArray();
    main_div.innerHTML = "";
    makeNotes();
}

function sortByCreation(){
    notificationArray.sort(function(a,b){
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    });
    main_div.innerHTML = "";
    makeNotes();
}
function sortByName(){
    notificationArray.sort(function(a,b){
        var textA = a.todo.toUpperCase();
        var textB = b.todo.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    main_div.innerHTML = "";
    makeNotes();
}