var timeToday = document.querySelector('#currentDay')
var currentTime = moment();
var nine = "9"
var textarea = $(textarea);


//insert current day "<p> element" with moment.js
timeToday.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")

// creates a current time variable to use to compare with
var time = moment().hour()
// console.log(time)
//loop over each time block using each, using parseInt to make it into integer 
$(".hour").each(function(){
    var timeBlock = parseInt($(this).attr("id"))

    //if statement to check and color code time that is passed due
    if(timeBlock < time){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    } else if(timeBlock === time){
        $(this).addClass("present")
        $(this).removeClass("future")
        $(this).removeClass("past")
    }
    else{
        $(this).removeClass("present")
        $(this).addClass("future")
        $(this).removeClass("past")
    }
  
    console.log(timeBlock)
    //else if statement to check if it is present with the current time


    // console.log(this)
    // console.log($(this).attr("id"))

    //else to check if the block time still has time
})
