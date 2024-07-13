let userinput = document.getElementById("lol");
let list = document.getElementById("iop");

function addTask() {
    if (userinput.value === '') {
        alert("Write something please");
    } else {
        let li = document.createElement("li");
        li.innerHTML = userinput.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    userinput.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("op");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function showtask() {
    list.innerHTML = localStorage.getItem("data");
}

showtask();
