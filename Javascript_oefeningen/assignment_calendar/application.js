var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthDays=[
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
    30,
];


const month = document.getElementById("month");
const year = document.getElementById("year");
let date = new Date(); 
let thisDay = date.getDate();
let thisYear = date.getFullYear();
let thisMonth = parseInt(date.getMonth());
let currentMonth = monthNames[thisMonth];
let newMonth = thisMonth;
let setMonth = date.getMonth();
let setYear = date.getFullYear();
month.innerHTML = currentMonth;
year.innerHTML = setYear;
let i;
let dayClass = document.getElementsByClassName("days");

function prevMonth(){
    dayClass[0].innerHTML = "";
    setMonth--;
        if(setMonth < 0){
            setMonth = 11;
            setYear --;
            year.innerHTML = setYear;
        }
    newMonth = monthNames[setMonth];
    month.innerHTML = newMonth;
        if(setMonth === thisMonth && thisYear === setYear){
            setDaysOfThisMonth();
        }
        else{ 
            setDays();
        }
}
function nextMonth(){
    dayClass[0].innerHTML = "";
    setMonth++;
        if(setMonth > 11){
            setMonth = 0;
            setYear ++;
            year.innerHTML = setYear;
        }
    newMonth = monthNames[setMonth];
    month.innerHTML = newMonth;
        if(setMonth === thisMonth && thisYear === setYear){
            setDaysOfThisMonth();
        }
        else{
            setDays();
        }
}
    if(setMonth === thisMonth){
        setDaysOfThisMonth();
    }
    else{
        setDays();
    }

function setDays(){
    for(i = 1; i <= monthDays[setMonth]; i++){
        let element = document.createElement("li");
        element.innerHTML = i;
        dayClass[0].appendChild(element);
    }
}

function setDaysOfThisMonth(){
    for(i = 1; i <= monthDays[setMonth]; i++){
        let element = document.createElement("li");
        element.innerHTML = i;
        dayClass[0].appendChild(element);
        if(i == thisDay){
            element.classList.add("active");
        }
    }
}
