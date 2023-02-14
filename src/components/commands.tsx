import React from "react";
import Karel from "./karel";

interface ICommandProps {
    // world: any,
    karel: Karel
}

export default class Commands extends React.Component<ICommandProps> {

    render() {
        var commands = this.props.karel.commands();
        return <div className="info row-item">
            <div className="commands">
                <p> Available Commands: </p>
                <ul className="help-commands">
                    {commands.map((command) => {
                        return <li key={command}>{command}</li>;
                    })}
                </ul>
            </div>
            <div className="beepers">
                <p>Initial Beeper Count: <span className="beeper-count"></span></p>
            </div>
        </div>;
    }
}