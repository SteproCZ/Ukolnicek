import * as React from "react";
import json from './test';
import {NoteList} from "../noteList/NoteList";

export class NoteListLoader extends React.Component {

    // inicializace komponenty se stavy
    constructor() {
        super();
        this.state = {notes: []}
    }



    componentDidMount() {
        fetch("http://localhost:3001/test.json")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                return res;
            })
            .then(res => this.setState({notes: res.notes}))
            .catch((e) => console.log("error: " + e));

    }

    render() {
        return ("this.state.notes");
    }
}