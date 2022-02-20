var timeToday = document.querySelector('#currentDay')
var currentTime = moment();
var textarea = $(textarea);
var saveTask = $(".saveBtn");
var localStorageWasSaved = $(".localStorage")

//function used to display the updated .current time 
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


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

