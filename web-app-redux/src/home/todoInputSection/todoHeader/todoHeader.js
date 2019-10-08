import React from "react"
import './todoHeader.scss'


export default class TodoHeader extends React.Component {
    render() {
        return (
        <div className="todoHeader">
            <header>
                <h1>To Do</h1>
            </header>
        </div>
        )
    }
}