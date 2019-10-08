export function addTodoItem(todoItem) {
    return {
        type: "ADD_TODO_ITEM", todoItem
    }
}
export function removeTodoItem(idx) {
    return {
        type: "REMOVE_TODO_ITEM", idx
    }
}
