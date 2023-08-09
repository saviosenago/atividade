const taskList = document.getElementById("taskList");
const editartask = document.createElement('button')
const abrirModalBtn = document.getElementById("abrirModal");
const modal = document.getElementById("meuModal");
const fecharModalBtn = document.getElementById("fecharModal");
const novonome = document.getElementById('novonome')

  
fecharModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }});



function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;
        editartask.textContent  = "editar"
        taskList.appendChild(newTaskItem);
        taskList.appendChild(editartask)
        taskInput.value = "";
    }

}

editartask.addEventListener("click", function() {



    modal.style.display = "block";


    
   
    novonome.value = taskList.querySelector("li").textContent;
});

function salvarEdicao() {

    const novoNomeTarefa = novonome.value.trim();

    if (novoNomeTarefa !== "") {
        const primeiraTarefa = taskList.querySelector("li");
        primeiraTarefa.textContent = novoNomeTarefa;
        modal.style.display = "none";
    }
}


document.getElementById("salvarEdicao").addEventListener("click", salvarEdicao);