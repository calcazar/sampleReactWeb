import React from "react"
import { Router } from "@reach/router"
import ToDoAppWithHooks from "./toDoAppWithHooks"
import ToDoAppWithRedux from "./toDoAppWithRedux"

let ToDoAppWithHooksRoute = () => <ToDoAppWithHooks/>
let ToDoAppWithReduxRoute = () => <ToDoAppWithRedux/>

export default function routes() {
    return(
        <Router>
            <ToDoAppWithHooksRoute path="/" />
            <ToDoAppWithReduxRoute path="withRedux" />
        </Router>
    )
}
