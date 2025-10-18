
const inputBox= document.getElementById("inputBox");
const listOfTasks= document.getElementById("listOfTasks");

function addTask(){
    if(inputBox.value === ''){
        alert("The input field cannot be empty!! Please enter the task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listOfTasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}