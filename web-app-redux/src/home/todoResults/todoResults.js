import React from 'react'
import TodoResultsRow from './todoResultsRow/todoResultsRow'
import './todoResults.scss'


export default class TodoResults extends React.Component {
    render() {
        return (
            <section class="todoResults">
                <table>
                    <tr>
                        <th>List</th>
                    </tr>
                    <tbody>
                        <TodoResultsRow todoItem="test" />
                        <TodoResultsRow todoItem="test" />
                    </tbody>
                </table>
            </section>
        )
    }
}