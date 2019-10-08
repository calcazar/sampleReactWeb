const initialState = {
    resultsList: []
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO_ITEM":
            let newResultsList = state.resultsList.slice(0)
            newResultsList.push(action.todoItem)
          return {...state, resultsList: newResultsList}
        default:
          return state
      }


}