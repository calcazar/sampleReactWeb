import React from "react"
import { Router } from "@reach/router"
import ToDoAppWithHooks from "./toDoAppWithHooks"
import ToDoAppWithRedux from "./toDoAppWithRedux"

let toDoAppWithHooks = () => <ToDoAppWithHooks/>
let toDoAppWithRedux = () => <ToDoAppWithRedux/>

function routes() {
    return(
        <Router>
            <toDoAppWithHooks path="/" />
            <toDoAppWithRedux path="withRedux" />
        </Router>
    )
}
