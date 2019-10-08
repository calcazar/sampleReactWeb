const initialState = {
    resultsList: []
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_RESULTS":
          return {...state, resultsList: action.results}
        default:
          return state
      }


}