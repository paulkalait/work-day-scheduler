var timeToday = document.querySelector('#currentDay')
var currentTime = moment();
var nine = "9"


//insert current day "<p> element" with moment.js
timeToday.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")

// creates a current time variable to use to compare with
var time = moment().hour()

//loop over each time block using each, using parseInt to make it into integer 
$("#hour-").each(function(){
    var timeBlock = parseInt($(this).attr("id"))

    //if statemnt to check and color code time that is passed due
    if(timeBlock < time){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    }
    //else if statement to check if it is present with the current time


    console.log(timeBlock)
    //else to check if the block time still has time
})

// var nine = $("#hour-9")

// var Convert = function(){
//     moment(nine).set('hour', 9)
//     console.log(nine)
// }
// Convert();