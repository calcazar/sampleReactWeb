import React from "react"
import './todoInput.scss'

export default class TodoInputComponent extends React.Component {

    constructor() {
        super();
        this.setInput = this.setInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.state = {
            inputValue: ""
        }
    }

    setInput(evt) {
        this.setState({inputValue: evt.target.value})
    }

    addItem() {
        if (this.state.inputValue === "") {
            alert("Stop being shameful and add something")
        } else {
            this.props.addToResults(this.state.inputValue)
            this.setState({inputValue: ""})
        }
    }

    render() {
        return (
                    <div className="todoInput">
                        <input onChange={this.setInput} value={this.state.inputValue} type="text" placeholder="Add your Todo!" />
                        <button onClick={this.addItem}>Add</button>
                    </div>
                )
        }
}

