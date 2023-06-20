const doc = document


// const f1 = doc.querySelector('.add-todo');
// const f1Id = doc.getElementById('f1');

// const boxItem = doc.querySelectorAll('.box-item');
// const boxItem1 = doc.getElementsByClassName('box-item');

// console.dir(f1)
// console.dir(f1Id)


// const forms = doc.forms.addTodoForm;
// const formsElse = forms.elements;
// const addTodoInput = forms.addTodoInput;
// const addTodoBtn = forms.addTodoBtn;
// // console.dir(forms);
// console.log(addTodoBtn)
// console.log(addTodoInput.form)

//DATA
const todos = [
 {id: 1, body: 'todo 1', completed: false}
];



// DATA RECIEVER
const todoInputs = doc.querySelector('#todoinpt')
let arr_todos = []
doc.querySelector('.add-todo__btn').addEventListener('click', (e) => {
    e.preventDefault();
    //btn check
console.log('btn is working');
const Text = todoInputs.value;
const id = todos.length ? todos[todos.length - 1].id + 1 : 1

if (!text) {
    addTodoInput.value = '';
    return;

}

todos.push(createTodoObj(text, id));
console.log(todos);

addTodoInput.value = '';


function renderTodoList(todoList) {
    console.log(todoList);
    
}




function createTodoObj(text, id) {

    
        const todoObj = {
            id,
            text,
            completed: false
        }
    


}

return todoObj;

})





