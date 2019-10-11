import React, {useState} from 'react';
import MaterialIcon from 'material-icons-react';
import { removeTodoItem } from '../../../actions/resultsListAction'
import {connect} from 'react-redux'
import {TodoResultRow} from "./todoResultsRow.module.scss"


function TodoResultsRowComponent(props) {
    const [checkboxToggle, setCheckboxToggle] = useState(false);

    function removeRow() {
        props.dispatch(removeTodoItem(props.idx))
    }

    function toggleCheckBox() {
        setCheckboxToggle(!checkboxToggle)
    }

        return (
            <tr className={TodoResultRow}>
                <td>
                    <button onClick={toggleCheckBox}>      
                        {checkboxToggle && <MaterialIcon size="38" icon="check_box" />}
                        {!checkboxToggle && <MaterialIcon size="38" icon="check_box_outline_blank" />}
                    </button>
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

const mapStateToProps = state => {
    return {
      results: state.resultsList.resultsList
    }
  }

const TodoResultsRow = connect(
    mapStateToProps
)(TodoResultsRowComponent)

export default TodoResultsRow