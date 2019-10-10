import React, {useContext} from 'react';
import MaterialIcon from 'material-icons-react';
import {connect} from 'react-redux'
import {TodoResultsContext} from "../../todoResultsContext"

function TodoResultsRowComponent(props) {

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

const mapStateToProps = state => {
    return {
      results: state.resultsList.resultsList
    }
  }

const TodoResultsRow = connect(
    mapStateToProps
)(TodoResultsRowComponent)

export default TodoResultsRow