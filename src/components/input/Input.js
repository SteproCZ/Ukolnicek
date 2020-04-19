import * as React from "react";
import {Note} from "../note/Note";
import {render} from "react-dom";
import {NoteList} from "../noteList/NoteList";

export class Input extends React.Component {


    constructor() {
        super();
        this.state = {text: ""};
    }

    /*handleChange(event) {
        this.setState({text2: event.target.value});
    }*/

    render() {
        return (
            <>
                <input
                    onChange={(event => this.setState({text: event.target.value}))}/>
                <button
                    onClick={event => <Note note={{id: 0}}/>}>
                    Přidat poznámku
                </button>

            </>
        )
    }


}

