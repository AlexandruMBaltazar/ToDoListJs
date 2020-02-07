const form = document.querySelector('.add');
const listToDo = document.querySelector('.todos');
const thrash = document.querySelector('.delete');
const search = document.querySelector('.search input');

const generateTemplate = (todo) =>{
    
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
    
    listToDo.innerHTML += html;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let userInput = form.querySelector('input');

    todo = userInput.value.trim();

    if(todo.length){
        generateTemplate(todo);
    }

    userInput.value = " ";

});

listToDo.addEventListener('click', (e)=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (inputValue) =>{
    Array.from(listToDo.children).filter((item)=> !item.textContent.includes(inputValue))
    .forEach((element)=>{
        element.classList.add('filtred');
    });

    Array.from(listToDo.children).filter((item)=> item.textContent.includes(inputValue))
    .forEach((element)=>{
        element.classList.remove('filtred');
    });
};


search.addEventListener('keyup', (e)=>{
    const inputValue = search.value.trim();
    filterTodos(inputValue);
})

