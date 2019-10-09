import React, {useState} from "react"
import { connect } from "react-redux"
import { addTodoItem } from '../../../actions/resultsListAction'
import './todoInput.scss'

function TodoInputComponent (props) {

    const {inputValue, setInputValue} = useState("");

    function setInputValue(evt) {
        setInputValue(evt.target.value)
    }

    function addItem() {
        if (inputValue === "") {
            alert("Stop being shameful and add something")
        } else {
            props.dispatch(addTodoItem(this.state.inputValue))
            setInputValue("")
        }
    }

        return (
            <div className="todoInput">
                <input onChange={setInputValue} value={inputValue} type="text" placeholder="Add your Todo!" />
                <button onClick={addItem}>Add</button>
            </div>
        )
}

const TodoInput = connect()(TodoInputComponent)

export default TodoInput 