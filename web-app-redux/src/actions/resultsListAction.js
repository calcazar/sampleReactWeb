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

export function readItemToggle(idx, read) {
    return {
        type: "READ_TOGGLE_TODO_ITEM", read, idx
    }
}
