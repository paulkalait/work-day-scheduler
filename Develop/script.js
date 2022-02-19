var timeToday = document.querySelector('#currentDay')
var currentTime = moment();
var textarea = $(textarea);
var saveTask = $(".saveBtn");
var localStorageWasSaved = $(".localStorage")




//insert current day "<p> element" with moment.js
// timeToday.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")

    setInterval(function(){
        console.log(currentTime.format("MMM DD, YYYY - hh:mm:ss a"))
        timeToday.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a")
        console.log("test")
    },1000)

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
         //else if statement to check if it is present with the current time
    } else if(timeBlock === time){
        $(this).addClass("present")
        $(this).removeClass("future")
        $(this).removeClass("past")
    }
     //else to check if the block time still has time
    else{
        $(this).removeClass("present")
        $(this).addClass("future")
        $(this).removeClass("past")
    }
    console.log(timeBlock)
})

saveTask.on("click", function(){
    var saveText = $(this).siblings(".textbox").val()
    var timeBlock = $(this).siblings(".hour").attr("id")

    localStorage.setItem(timeBlock, saveText);
    localStorageWasSaved.css("display", "block")
    
    setTimeout(function(){
        localStorageWasSaved.css("display", "none")
    },2000)
})

 var displayText = function(){
      $(".textbox").each(function(){
          $(this).val(localStorage.getItem($(this).siblings(".hour").attr("id")))
    
 })}
displayText()



// var saveNine = $("#9")
// var saveNine = $("#10")
// var saveTen = $("#11")
// var saveEleven = $("#12")
// var saveTwelve = $("#13")
// var saveTwo = $("#14")
// var saveThree = $("#15")
// var saveFour = $("#16")
// var saveFive = $("#17")