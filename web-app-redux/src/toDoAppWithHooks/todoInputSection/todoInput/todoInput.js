import React, {useState, useContext} from "react"
import {todoInput} from './todoInput.module.scss'
import {TodoResultsContext} from "../../todoResultsContext"

export default function TodoInputComponent (props) {

    const [inputValue, setInputValue] = useState("");
    const context = useContext(TodoResultsContext)
    function setInput(evt) {
        setInputValue(evt.target.value)
    }

    function addItem() {
        if (inputValue === "") {
            alert("Stop being shameful and add something")
        } else {
            context.addToResults(inputValue)
            setInputValue("")
        }
    }

        return (
                    <div className={todoInput}>
                        <input onChange={setInput} value={inputValue} type="text" placeholder="Add your Todo!" />
                        <button onClick={addItem}>Add</button>
                    </div>
                )
        
}

