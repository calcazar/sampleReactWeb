import React, {useContext} from 'react';
import MaterialIcon from 'material-icons-react';
import {TodoResultsContext} from "../../todoResultsContext"

export default function TodoResultsRowComponent(props) {

    const context = useContext(TodoResultsContext)
    
    function removeRow() {
        context.removeResults(props.idx)
    }

        return (
            <tr>
                <td>
                    <span className="todoText">
                        {props.todoItem}
                    </span>
                    <button onClick={removeRow} className="iconContainer">
                        <MaterialIcon icon="delete" />
                    </button>
                </td>
            </tr>
        )
    }