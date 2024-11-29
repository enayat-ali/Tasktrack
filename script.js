const searchTask = document.querySelector(".searchTask");
const addBtn = document.querySelector(".addBtn");


function addItem() {
    const taskText = searchTask.value.trim();
    if (taskText !== ""){
        const addTask = document.querySelector(".addTask")
        const listItem = document.createElement("li");
        listItem.innerHTML =` <p> ${taskText} </p> 
        <button type="submit" class="done btn"><img src="check.png" alt=""/></button>
        <button type="submit" class="done btn"><img src="bin.png" alt="" /></button>
        <button type="submit" class="done btn"><img src="pen.png" alt="" /></button>`;

        addTask.appendChild(listItem);
        searchTask.value = '';
    }
}




addBtn.addEventListener("click", addItem);
