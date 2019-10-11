import React from "react"
import {todoHeader} from './todoHeader.module.scss'


export default function TodoHeader () {
        return (
            <div className={todoHeader}>
                <header>
                    <h1>To Do (Classic)</h1>
                </header>
            </div>
        )
}