import React from "react"
import { Router } from "@reach/router"
import ToDoAppClassic from "./toDoAppClassic"
import ToDoAppWithHooks from "./toDoAppWithHooks"
import ToDoAppWithRedux from "./toDoAppWithRedux"

let ToDoAppClassicRoute = () => <ToDoAppClassic/>
let ToDoAppWithHooksRoute = () => <ToDoAppWithHooks/>
let ToDoAppWithReduxRoute = () => <ToDoAppWithRedux/>

export default function routes() {
    return(
        <Router>
            <ToDoAppWithHooksRoute path="/" />
            <ToDoAppWithReduxRoute path="withRedux" />
            <ToDoAppClassicRoute path="classic" />
        </Router>
    )
}
