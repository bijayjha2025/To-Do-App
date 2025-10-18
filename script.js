
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

listOfTasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);