import React from 'react';
import MaterialIcon from 'material-icons-react';
import {TodoResultRow, strikeThrough} from "./todoResultsRow.module.scss"

export default class TodoResultsRowComponent extends React.Component {
    constructor() {
        super();
        this.removeRow = this.removeRow.bind(this)
        this.toggleCheckBox = this.toggleCheckBox.bind(this)
    }

    toggleCheckBox() {
       this.props.readItemToggle(this.props.idx, !this.props.read)
    }

    removeRow() {
      this.props.removeResults(this.props.idx)
    }

    render() {
        return (
            <tr className={TodoResultRow}>
                <td>
                    <button onClick={this.toggleCheckBox}>      
                        {this.props.read && <MaterialIcon size="38" icon="check_box" />}
                        {!this.props.read && <MaterialIcon size="38" icon="check_box_outline_blank" />}
                    </button>
                    <span className={`todoText ${this.props.read ? strikeThrough : "" }`}>
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