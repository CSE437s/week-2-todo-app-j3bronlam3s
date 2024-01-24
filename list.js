function createTask(){
    console.log("task")
    taskText = document.querySelector("#taskString").value
    document.querySelector("#taskString").value = ""
    console.log(taskText)
    newTask = document.createElement("h1")
    newTask.append(taskText)
    randId = Math.random() + "listedTask"
    newTask.id = randId
    newTask.addEventListener('click',
            deleteTask.bind(newTask)) 
    newTask.addEventListener('dblclick', editTask.bind(newTask))    
    document.querySelector("#tasks").append(newTask)
}

function editTask(){
    let newTask = prompt("Please rename task", "Wash Clothes");
    if (newTask != null && newTask != "") {
        this.innerHTML = newTask;
    }
}

function deleteTask(e){
    if(e.shiftKey){
        console.log("delete" + this.id)
        this.remove()
    }

}
