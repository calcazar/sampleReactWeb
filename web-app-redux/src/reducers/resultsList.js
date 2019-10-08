const initialState = {
    resultsList: []
}

export default function todoApp(state = initialState, action) {
    let newResultsList = state.resultsList.slice(0)
    switch (action.type) {
        case "ADD_TODO_ITEM":
            newResultsList.push(action.todoItem)
          return {...state, resultsList: newResultsList}
        case "REMOVE_TODO_ITEM":
            newResultsList.splice(action.idx, 1)
            return {...state, resultsList: newResultsList}
        default:
          return state
      }


}