import React from "react";
import { ICommandProps } from "../interfaces/Ilearnwithkarel";
import styles from "../styles/commands.module.css";

export default class Commands extends React.Component<ICommandProps> {

    render() {
        var commands = this.props.karel.commands();
        return <div>
            <div>
                <p> Available Commands: </p>
                <ul className={styles.helperCommands}>
                    {commands.map((command) => {
                        return <li onClick={() => this.props.onCodeChange(this.props.code + "\n" + command + "();")} key={command}>{command}</li>;
                    })}
                </ul>
            </div>
        </div>;
    }
}