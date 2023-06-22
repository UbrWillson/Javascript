const doc = document;
const todos = [
    'Купити хліб',
    'Зробити дз',
    'Відпочити'
]

const todosObjArr = getTodosData(todos);

console.log(todos);
console.log(todosObjArr);

// function getTodosData(todosArr) {
// //     const todosObjArr = [];


// todosArr.map((item, index, arr) => {
//     console.log(item, index, arr)
   
        
//         const todoObj = {id: i + 1,
//         body: todo,
//         completed: false,
//         }
    
    
//         console.log(todoObj);
//         todosObjArr.push(todoObj)
//     }
    
    
//         return todosObjArr;
// });



// function getTodosData(todosArr) {
//     const todosObjArr = todosArr.map((todo,index) => {
//         return {
//             id: index + 1,
//             body: todo,
//             completed: false, 
//         };
//     });


function getTodosData(todosArr) {
    return todosArr.map((todo, index) => ( 
    {id: index + 1, body: todo, completed: false}
    ));
}
//     return todosObjArr;
// }