import React from 'react';
import MaterialIcon from 'material-icons-react';
import { removeTodoItem, readItemToggle } from '../../../actions/resultsListAction'
import {connect} from 'react-redux'
import {TodoResultRow, strikeThrough} from "./todoResultsRow.module.scss"


function TodoResultsRowComponent(props) {

    function removeRow() {
        props.dispatch(removeTodoItem(props.idx))
    }

    function toggleCheckBox() {
        props.dispatch(readItemToggle(props.idx, !props.read))
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

const mapStateToProps = state => {
    return {
      results: state.resultsList.resultsList
    }
  }

const TodoResultsRow = connect(
    mapStateToProps
)(TodoResultsRowComponent)

export default TodoResultsRow