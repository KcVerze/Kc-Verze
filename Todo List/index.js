function addTask(){
    const inputTask = document.getElementById("input");
    const taskText = inputTask.value.trim();
    const taskList = document.getElementById("tasks");

    if (taskText === ""){
        alert("Please enter a task!");
    }else{
        const newTask = document.createElement('li');
        newTask.setAttribute("id", "task-item");
        
        newTask.innerHTML = `<span id ="task" onclick="done(this)" >${taskText}</span> <button onclick="this.parentElement.remove()" >Delete</button>`
        taskList.appendChild(newTask);

    }
    inputTask.value="";
}

// task done

  function done(element) {
    element.classList.toggle('done');
  }
// the toggle is for that on and off property , add or remove the class property

