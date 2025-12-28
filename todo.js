function addTask(){
    let input=document.getElementById("taskInput");
    let taskText=input.value;
    if(taskText === ""){
        alert("please enter a task");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML='${taskText}<button class="delet"onclick="removeTask(this)">🗑️</button>';
    document.getElementById("taskList").appendChild(li);
    input.value="";
}
function removeTask(button){
    button.parentElement.remove();
}
