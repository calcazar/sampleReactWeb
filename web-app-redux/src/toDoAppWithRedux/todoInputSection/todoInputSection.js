import React from 'react';
import ToDoInput from "./todoInput/todoInput";
import ToDoHeader from "./todoHeader/todoHeader";
import {todoInputSection} from './todoInputSection.module.scss';

export default function search () {
       return (
            <section className={todoInputSection}>
                <ToDoHeader />
                <ToDoInput />
            </section>
        )
}