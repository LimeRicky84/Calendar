// add current time in header
var timeDisplayEl = $("#rightNow")
var savedTask = document.querySelector("#timeBlock9", "#timeBlock10", "#timeBlock11", "#timeBlock12", "#timeBlock1", "#timeBlock2", "#timeBlock3", "#timeBlock4", "#timeBlock5")
var taskList = document.querySelector("#timeBlock")
var saveButton = document.querySelector("#save-button9", "#save-button10", "#save-button11", "#save-button12", "#save-button1", "#save-button2", "#save-button3", "#save-button4", "#save-button5")
var clearButton = document.querySelector("#clear-button")

var tasks = [];

function timeDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


// renders items on page as <p> elements
function renderTasks() {
    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        var p = document.createElement('p')
        p.textContent = task;
        p.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Finished"

        p.appendChild(button)
        taskList.appendChild(p)
    }
}

function storeTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault()

    var taskText = savedTask.value.trim();
    if (taskText === "") {
        return;
    }

    tasks.push(taskText)
    // savedTask.value = ""

    storeTasks()
    renderTasks()
});

//   function to keep inputs saved after page reload
function init() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"))

    if (storedTasks !== null) {
        tasks = storedTasks
    }
    renderTasks()
}

setInterval(timeDate, 1000);
init()
//   function to color code the past, present and future