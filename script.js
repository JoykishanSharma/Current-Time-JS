//element reference
var currentTime_element = document.querySelector(".countdownText");
var todayDate_element = document.querySelector(".dateText");

//today date
var todayDate;
var todayDay;
var todayFullYear;
var currentHour;
var currentMins;
var currentSec;
//showing live time
setInterval(() =>
{

    //today date
    todayDate = new Date();
    todayDay = todayDate.getDate();
    todayFullYear = todayDate.getFullYear();
    currentHour = todayDate.getHours();
    currentMins = todayDate.getMinutes();
    currentSec = todayDate.getSeconds();

    //today weekly day
    const daysNameArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = daysNameArray[todayDate.getDay()];

    //month name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var todayMonth = todayDate.getMonth();
    var monthName = monthNames[todayMonth];



    //adding 0 in front of single digit time
    if (currentHour < 10) currentHour = 0 + currentHour.toString();
    else if (currentMins < 10) currentMins = 0 + currentMins.toString();
    else if (currentSec < 10) currentSec = 0 + currentSec.toString();

    //current time 
    var currentTime = currentHour + " : " + currentMins + " : " + currentSec;

    //setting current time to element
    currentTime_element.innerHTML = currentTime;

    //setting today date to element
    todayDate_element.innerHTML = dayName + ", " + todayDay + " " + monthName + " " + todayFullYear;

    //increase one second
    todayDate = todayDate.getSeconds() + 1;
}, 1000);