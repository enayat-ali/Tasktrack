const searchTask = document.querySelector(".searchTask");
const addBtn = document.querySelector(".addBtn");


function addItem() {
    const taskText = searchTask.value.trim();
    if (taskText !== ""){
        const addTask = document.querySelector(".addTask");
        const listItem = document.createElement("li");
        listItem.innerHTML =` <p> ${taskText} </p> 
        <button type="submit" class="done btn"><img src="check.png" alt=""/></button>
        <button type="submit" class="dlt btn"><img src="bin.png" alt="" /></button>
        <button type="submit" class="edit btn"><img src="pen.png" alt="" /></button>`;

        addTask.appendChild(listItem);
        searchTask.value = '';
        const remove = listItem.querySelector(".dlt");
         remove.addEventListener("click", function() {
          addTask.removeChild(listItem)
        })
        const done = listItem.querySelector(".done");
        done.addEventListener("click", function() {
          listItem.style.textDecoration = "line-through"
        })
    }
}




addBtn.addEventListener("click", addItem);
