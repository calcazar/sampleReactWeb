import React from 'react'
import {connect} from 'react-redux'
import TodoResultsRow from './todoResultsRow/todoResultsRow'
import {todoResults} from './todoResults.module.scss'


function TodoResultsComponent(props) {
    if (props.resultsList.length === 0) {
        return null;
    }
     
        return (
            <section className={todoResults}>
                <table>
                    <thead>
                    <tr>
                        <th>List</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.resultsList.map((arr, idx)=>{
                                return(<TodoResultsRow idx={idx} key={`result${idx}`} todoItem={arr}/>)
                            })
                        }           

                    </tbody>
                </table>
            </section>
        )
    }

function mapToStateProps(state) {
    return {
        resultsList: state.resultsList.resultsList
    }
}

const TodoResults = connect(mapToStateProps)(TodoResultsComponent)

export default TodoResults