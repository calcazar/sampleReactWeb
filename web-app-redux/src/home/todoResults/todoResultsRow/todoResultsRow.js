import React from 'react';
import MaterialIcon from 'material-icons-react';
import { removeTodoItem } from '../../../actions/resultsListAction'
import {connect} from 'react-redux'

class TodoResultsRowComponent extends React.Component {
    constructor() {
        super();
        this.removeRow = this.removeRow.bind(this)
    }
    removeRow() {
        this.props.dispatch(removeTodoItem(this.props.idx))
    }

    render() {
        return (
            <tr>
                <td>
                    <span className="todoText">
                    {this.props.todoItem}
                    <div>
                    </div>
                    </span>
                    <button onClick={this.removeRow} className="iconContainer">
                        <MaterialIcon icon="delete" />
                    </button>
                </td>
            </tr>
        )
    }
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