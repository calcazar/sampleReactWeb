import React from 'react';
import MaterialIcon from 'material-icons-react';
import { removeTodoItem } from '../../../actions/resultsListAction'
import {connect} from 'react-redux'

function TodoResultsRowComponent(props) {

    function removeRow() {
        props.dispatch(removeTodoItem(props.idx))
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

const mapStateToProps = state => {
    return {
      results: state.resultsList.resultsList
    }
  }

const TodoResultsRow = connect(
    mapStateToProps
)(TodoResultsRowComponent)

export default TodoResultsRow