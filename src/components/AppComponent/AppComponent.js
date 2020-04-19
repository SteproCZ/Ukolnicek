import React from 'react';
import {Note} from "../note/Note";

export class AppComponent extends React.Component {
    state = {
        numChildren: 0, text: ""
    }

    render () {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<Note key={i} note={{id:i, text: this.state.text}} />);
        };

        return (
            <table>
            <ParentComponent addChild={this.onAddChild}>
                {children}
            </ParentComponent>
            </table>
        );
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1,
            text: document.getElementById("input").value
        });
    }

}

const ParentComponent = props => (
    <div className="card calculator">
        <input id="input"/>
        <button onClick={props.addChild}>Přidej</button>
        <div id="children-pane">
            {props.children}
        </div>
    </div>
);