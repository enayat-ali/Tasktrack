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
          if (listItem.style.textDecoration === "line-through") {
            listItem.style.textDecoration = "none"
          } else {
            listItem.style.textDecoration = "line-through"
          }
          // listItem.style.textDecoration = "line-through"
        })
    }
}



searchTask.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    addItem();
  }
})
addBtn.addEventListener("click", addItem);
