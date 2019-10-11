import React, {useContext} from 'react';
import MaterialIcon from 'material-icons-react';
import {TodoResultsContext} from "../../todoResultsContext"
import {TodoResultRow, strikeThrough} from "./todoResultsRow.module.scss"

export default function TodoResultsRowComponent(props) {

    const context = useContext(TodoResultsContext)
    
    function removeRow() {
        context.removeResults(props.idx)
    }


    function toggleCheckBox() {
       context.readItemToggle(props.idx, !props.read)
    }

        return (
            <tr className={TodoResultRow}>
                <td>
                    <button onClick={toggleCheckBox}>      
                        {props.read && <MaterialIcon size="38" icon="check_box" />}
                        {!props.read && <MaterialIcon size="38" icon="check_box_outline_blank" />}
                    </button>
                    <span className={`todoText ${props.read ? strikeThrough : "" }`}>
                        {props.todoItem}
                    </span>
                    <button onClick={removeRow} className="iconContainer">
                        <MaterialIcon icon="delete" />
                    </button>
                </td>
            </tr>
        )
    }