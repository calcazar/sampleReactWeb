import React from 'react';
import MaterialIcon from 'material-icons-react';
import { connect }  from 'react-redux'

export class TodoResultsRowComponent extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <span className="todoText">
                    {this.props.todoItem}
                    <div>
                    </div>
                    </span>
                    <button className="iconContainer">
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