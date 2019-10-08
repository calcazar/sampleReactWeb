import React from "react"
import './todoInput.scss'

export default class TodoInput extends React.Component {

    render() {
        return (
            <div className="todoInput">
                <input type="text" placeholder="test"/>
                <button>Add</button>
            </div>
        )
    }
    
    
}