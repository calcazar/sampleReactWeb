const initialState = {
    resultsList: []
}

export default function todoApp(state = initialState, action) {
    let newResultsList = state.resultsList.slice(0)
    switch (action.type) {
        case "ADD_TODO_ITEM":
            let result = {
                text: action.todoItem,
                read: false
            }
            newResultsList.push(result)
          return {...state, resultsList: newResultsList}
        case "REMOVE_TODO_ITEM":
            newResultsList.splice(action.idx, 1)
            return {...state, resultsList: newResultsList}
        case "READ_TOGGLE_TODO_ITEM":
            newResultsList[action.idx].read = action.read
            return {...state, resultsList: newResultsList}
        default:
          return state
      }


}