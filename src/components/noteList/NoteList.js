import * as React from "react";
import {Note} from "../note/Note";
import PropTypes from "prop-types";
import './NoteList.css';
export class NoteList extends React.Component {

    render() {
        return (<div>

                {this.props.notes.map(function (item, index) {
                    return <table>
                        <Note key={index} note={{id: item.id,text: item.text}}/>
                    </table>;
                })}

        </div>);
    }
}

NoteList.propTypes = {
    notes: PropTypes.array
};
