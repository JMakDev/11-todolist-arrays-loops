const todoList = [{
        name:'kill',
        dueDate: '2022-12-22',
        },{
        name:'run', 
        dueDate: '2022-12-22'
    }
        ];

renderTodoList();

function renderTodoList(){

        let todoListHTML = '';

        for(let i = 0; i < todoList.length; i += 1){
            const todoObject = todoList[i];

            // destructuring objects
            // const name = todoObject.name;
            // const dueDate = todoObject.dueDate;

            const {name, dueDate} = todoObject;

            const html = `

            <div>${name}</div>
            <div>${dueDate}</div>
             
            <button onclick="
                todoList.splice(${i}, 1)
                renderTodoList();
            " class="delete-todo-button">Delete</button>
            
            `;

            todoListHTML += html;
        }


        document.querySelector('.js-todo-list')
            .innerHTML = todoListHTML;

        }

function addTodo(){
    const inputElement = document.querySelector('.js-name-input')

    const name = inputElement.value;

    const dueInputElement = document.querySelector('.js-due-date-input')

    const dueDate = dueInputElement.value
    
    todoList.push({
        name: name,
        dueDate:  dueDate
    })

    inputElement.value = "";
    
    renderTodoList();
}