const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];



function creatTask(task) {
  console.log(task);
 

  const liTask = document.createElement("li");
  const divTask = document.createElement("div");
  const spanTask = document.createElement("span");
  const paragraphTask = document.createElement("p");
  const buttonTask = document.createElement("button");   
  
  liTask.classList.add("task__item");
  divTask.classList.add("task-info__container");
  spanTask.classList.add("task-type");
  buttonTask.classList.add("task__button--remove-task");
  paragraphTask.innerText=task.title;
  
  if(task.type==="Urgente"){
    spanTask.classList.add("span-urgent");    
  }
  else if(task.type==="Importante"){
    spanTask.classList.add("span-important");
  }
  else if(task.type==="Normal"){
  spanTask.classList.add("span-normal");
  
  }

  liTask.append(divTask, buttonTask);
  divTask.append(spanTask, paragraphTask);
return liTask;
}

function addTasks(taskList) {
  const ulTask = document.querySelector(".tasks__list");
  ulTask.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
   const currentTask=taskList[i];
   const currentTaskCreated=creatTask(currentTask);
    ulTask.append(currentTaskCreated);
  }

}

addTasks(tasks);

