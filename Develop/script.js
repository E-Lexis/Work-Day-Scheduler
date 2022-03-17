//Displays current day + date
$("#currentDay").html(moment().format("dddd MMM Do"));

//Logs current hour
var currentHour = moment().format("HH");
console.log(currentHour);

//Color-codes time-blocks based on difference to current time
$(".time-block").each(function () {
    blockHour = parseInt($(this).attr("id"));

    if (blockHour == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})

//Saves task description and hour to local storage when the saved button is clicked
$(".saveBtn").on("click", function () {
    var desc = $(this).siblings(".description").val();
    var hour = parseInt($(this).parent(".time-block").attr("id"));
    localStorage.setItem(hour, desc);
})

//loads saved tasks on page refresh
function loadTasks() {
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));
        $(this).children(".description").val(localStorage.getItem(hour));
    })
}

loadTasks();