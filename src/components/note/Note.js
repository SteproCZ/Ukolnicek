import * as React from "react";
import PropTypes from 'prop-types';
import './Note.css';

export class Note extends React.Component {
    // inicializace komponenty se stavy
    constructor(props) {
        super();
        this.state = {id: props.note.id, text: props.note.text};
    }

    render() {
        return (
            <div id={this.state.id}>
                <tr>
                    <th>{this.state.id}</th>
                    <th>{this.state.text}</th>
                    <th>
                        <button onClick={
                            event => document.getElementById(this.state.id).remove()}>
                            Splněno
                        </button>
                    </th>
                </tr>
            </div>
        )
    }
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    })
};