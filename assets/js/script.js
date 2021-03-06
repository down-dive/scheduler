var currentDate = document.querySelector("#currentDay")
var input9 = $("#input0")
var input10 = $("#input1")
var input11 = $("#input2")
var input12 = $("#input3")
var input1 = $("#input4")
var input2 = $("#input5")
var input3 = $("#input6")
var input4 = $("#input7")
var input5 = $("#input8")


var currentTime = moment();
currentDate.textContent = currentTime.format("ddd, MMMM Do");


console.log(currentTime.format("h"))

switch (parseInt(currentTime.format("h"))) {
    case 9:
        for (let i = 0; i < 9; i++) {
            if (i <= 0) {
                $("#input0").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 10:
        for (let i = 0; i < 9; i++) {
            if (i <= 1) {
                $(`#input${i}`).addClass("past")
                $("#input1").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 11:
        for (let i = 0; i < 9; i++) {
            if (i <= 2) {
                $(`#input${i}`).addClass("past")
                $("#input2").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 12:
        for (let i = 0; i < 9; i++) {
            if (i <= 3) {
                $(`#input${i}`).addClass("past")
                $("#input3").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 1:
        for (let i = 0; i < 9; i++) {
            if (i <= 4) {
                $(`#input${i}`).addClass("past")
                $("#input4").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 2:
        for (let i = 0; i < 9; i++) {
            if (i <= 5) {
                $(`#input${i}`).addClass("past")
                $("#input5").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 3:
        for (let i = 0; i < 9; i++) {
            if (i <= 6) {
                $(`#input${i}`).addClass("past")
                $("#input6").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 4:
        for (let i = 0; i < 9; i++) {
            if (i <= 6) {
                $(`#input${i}`).addClass("past")
                $("#input6").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;
    case 5:
        for (let i = 0; i < 9; i++) {
            if (i <= 7) {
                $(`#input${i}`).addClass("past")
                $("#input7").addClass("present")
            } else {
                $(`#input${i}`).addClass(`future`)
            }
        }
        break;

}

$("#btn0").on("click", () => {
    localStorage.setItem("9am", input9.val())
})
$("#btn1").on("click", () => {
    localStorage.setItem("10am", input10.val())
})
$("#btn2").on("click", () => {
    localStorage.setItem("11am", input11.val())
})
$("#btn3").on("click", () => {
    localStorage.setItem("12pm", input12.val())
})
$("#btn4").on("click", () => {
    localStorage.setItem("1pm", input1.val())
})
$("#btn5").on("click", () => {
    localStorage.setItem("2pm", input2.val())
})
$("#btn6").on("click", () => {
    localStorage.setItem("3pm", input3.val())
})
$("#btn7").on("click", () => {
    localStorage.setItem("4pm", input4.val())
})
$("#btn8").on("click", () => {
    localStorage.setItem("5pm", input5.val())
})
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
    //Create a rows using bootstrap that will correspond to each hour of working day
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // check if the time das passed 
    // if the time has passes we want to change backgrounds
// WHEN I click into a time block
// THEN I can enter an event    
    // add inputs to html so user can enter information
// WHEN I click the save button for that time block
    // add buttons to save work
// THEN the text for that event is saved in local storage
    // save indicidual lines to local storage
// WHEN I refresh the page
// THEN the saved events persist
    //have a way to get information from local storage