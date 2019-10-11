import React, {useContext, useEffect} from 'react'
import TodoResultsRow from './todoResultsRow/todoResultsRow'
import {todoResults} from './todoResults.module.scss'
import {TodoResultsContext} from "../todoResultsContext"

export default function TodoResultsComponent() {

    const context = useContext(TodoResultsContext)

    useEffect(()=>{
        context.initResults();
    },[])

    if (context.results.length === 0) {
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
                            context.results.map((arr, idx)=>{
                                return(<TodoResultsRow idx={idx} key={`result${idx}`} todoItem={arr.text} read={arr.read}/>)
                            })
                        }           

                    </tbody>
                </table>
            </section>
    )
}
