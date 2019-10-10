import React from 'react'
import TodoResultsRow from './todoResultsRow/todoResultsRow'
import './todoResults.scss'

export default class TodoResultsComponent extends React.Component {
    render() {
        if (this.props.results.length === 0) {
            return null;
        }

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
                            this.props.results.map((arr, idx)=>{
                                return(<TodoResultsRow idx={idx} key={`result${idx}`} removeResults={this.props.removeResults} todoItem={arr}/>)
                            })
                        }           

                    </tbody>
                </table>
                <hr/>
                <img src={require("../../assets/img/classic.jpg")} />
            </section>
        )
    }
}
