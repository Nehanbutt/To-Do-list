let userInput = document.getElementById("task-input");

let taskList = document.getElementById("task-list");

function addTask() {
    if (userInput.value.trim() === '') {
        alert("Please write something.");
    } 
else {
        let li = document.createElement("li");
        li.textContent = userInput.value;
        li.addEventListener('click', toggleTask);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        span.addEventListener('click', removeTask);
        li.appendChild(span);
        taskList.appendChild(li);
        saveData();
    }
    userInput.value = "";
}

function toggleTask(event) {
    event.target.classList.toggle("completed");
    saveData();
}

function removeTask(event) {
    event.stopPropagation();
    event.target.parentElement.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    let data = localStorage.getItem("tasks");
    if (data) {
        taskList.innerHTML = data;

        Array.from(taskList.children).forEach(task => {
            task.querySelector('span').addEventListener('click', removeTask);
            task.addEventListener('click', toggleTask);
        });
    }
}


loadTasks();
