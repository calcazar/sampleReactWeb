import React from 'react'
import {connect} from 'react-redux'
import TodoResultsRow from './todoResultsRow/todoResultsRow'
import './todoResults.scss'


export class TodoResultsComponent extends React.Component {
    render() {
        return (
            <section className="todoResults">
                <table>
                    <thead>
                    <tr>
                        <th>List</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.resultsList.map((arr, idx)=>{
                                return(<TodoResultsRow key={`result${idx}`} todoItem={arr}/>)
                            })
                        }
                        

                    </tbody>
                </table>
            </section>
        )
    }
}

function mapToStateProps(state) {
    return {
        resultsList: state.resultsList.resultsList
    }
}

const TodoResults = connect(mapToStateProps)(TodoResultsComponent)

export default TodoResults