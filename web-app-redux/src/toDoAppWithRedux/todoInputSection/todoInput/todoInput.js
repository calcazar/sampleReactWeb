import React from "react"
import { connect } from "react-redux"
import { addTodoItem } from '../../../actions/resultsListAction'
import {todoInput} from './todoInput.module.scss'

export class TodoInputComponent extends React.Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this)
        this.setInputValue = this.setInputValue.bind(this)
        this.state = {
            inputValue: ""
        }
    }
    setInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }
    addItem() {
        if (this.state.inputValue === "") {
            alert("Stop being shameful and add something")
        } else {
            this.props.dispatch(addTodoItem(this.state.inputValue))
            this.setState({
                inputValue: ""
            })
        }
    }
    render() {
        return (
            <div className={todoInput}>
                <input onChange={this.setInputValue} value={this.state.inputValue} type="text" placeholder="Add your Todo!" />
                <button onClick={this.addItem}>Add</button>
            </div>
        )
    }

}

const TodoInput = connect()(TodoInputComponent)

export default TodoInput 