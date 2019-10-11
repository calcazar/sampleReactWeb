import React from 'react';
import ToDoInput from "./todoInput/todoInput";
import ToDoHeader from "./todoHeader/todoHeader";
import {todoInputSection} from './todoInputSection.module.scss';

export default class search extends React.Component {
    render() {
        return (
            <section className={todoInputSection}>
                <ToDoHeader />
                <ToDoInput addToResults={this.props.addToResults}/>
            </section>
        )
    }
}