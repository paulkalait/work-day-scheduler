var currentDay = document.querySelector('#currentDay')
var currentTime = moment();


//insert current day "<p> element" with moment.js
currentDay.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")