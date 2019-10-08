import React from 'react'
import './todoResults.scss'
import MaterialIcon from 'material-icons-react';

export default class TodoResults extends React.Component {
    render() {
        return (
            <section class="todoResults">
                <table>
                    <tr>
                        <th>List</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <span class="todoText">
                                hi
                                </span>
                                <button class="iconContainer">
                                    <MaterialIcon icon="delete" />
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </section>
        )
    }
}