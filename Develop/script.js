var timeToday = document.querySelector('#currentDay')
var currentTime = moment();


//insert current day "<p> element" with moment.js
timeToday.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")

// creates a current time variable to use to compare with
var time = moment().hour()

//loop over each time block using each, using parseInt to make it into integer 
$(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr("class").split("hour")[1])

    //if statemnt to check and color code time that is passed due
    if(timeBlock < time){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    }
    //else if statement to check if it is present with the current time



    //else to check if the block time still has time
})