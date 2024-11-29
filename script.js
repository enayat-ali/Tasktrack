const searchTask = document.querySelector(".searchTask");
const addBtn = document.querySelector(".addBtn");
let editTodo = null;

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
        const edit = listItem.querySelector(".edit");
        const p = listItem.querySelector("p");
        edit.addEventListener("click", function(){
          searchTask.value = p.innerHTML;
          searchTask.focus();
          //replace the current add button functionality temp
          addBtn.removeEventListener("click", addItem);
          addBtn.addEventListener("click", function saveEdit() {
            const updatedText = searchTask.value.trim();
            if (updatedText) {
              p.innerHTML = updatedText;
            }
            searchTask.value = "";
            searchTask.focus();
            
            //restore add function
            addBtn.removeEventListener("click", saveEdit);
            addBtn.addEventListener("click", addItem);
            
          })
          
         
        })
    }
}



searchTask.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    addItem();
  }
})
addBtn.addEventListener("click", addItem);
