import React from 'react';
import MaterialIcon from 'material-icons-react';

export default class TodoResultsRow extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <span class="todoText">
                    {this.props.todoItem}
                    </span>
                    <button class="iconContainer">
                        <MaterialIcon icon="delete" />
                    </button>
                </td>
            </tr>
        )
    }
}