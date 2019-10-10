import React from 'react';
import MaterialIcon from 'material-icons-react';

export default class TodoResultsRowComponent extends React.Component {
    constructor() {
        super();
        this.removeRow = this.removeRow.bind(this)
    }

    removeRow() {
      this.props.removeResults(this.props.idx)
    }

    render() {
        return (
            <tr>
                <td>
                    <span className="todoText">
                        {this.props.todoItem}
                    </span>
                    <button onClick={this.removeRow} className="iconContainer">
                        <MaterialIcon icon="delete" />
                    </button>
                </td>
            </tr>
        )
    }
}