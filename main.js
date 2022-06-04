
let btn = document.querySelector('.push');
let inputTask = document.querySelector('.task input'); 
let listTask = document.querySelector('#list');







btn.onclick = function(){

    if(inputTask.value.length == 0){
        alert("Please enter a task")
    }
    else{
        listTask.innerHTML +=`
        <div class="newTask"> 
        <span> 
        ${inputTask.value}</span>
        <button class="delete"> <i class="fas fa-trash-alt "></i></button>
        
        </div> `;

        let currentTask = document.querySelectorAll('.delete');
        for(let i = 0; i < currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let lists = document.querySelectorAll('.newTask');
        for(let i = 0; i < lists.length; i++){
            lists[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }

        inputTask.value = ""

    }
}
