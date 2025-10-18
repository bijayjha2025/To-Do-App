
const inputBox= document.getElementById("inputBox");
const listOfTasks= document.getElementById("listOfTasks");

function addTask(){
    if(inputBox.value === ''){
        alert("The input field cannot be empty!! Please enter the task.");
    }
   