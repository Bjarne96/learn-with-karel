import React from "react";
import { ICommandProps } from "../interfaces/Ilearnwithkarel";
import styles from "../styles/commands.module.css";

export default class Commands extends React.Component<ICommandProps> {

    render() {
        var commands = this.props.karel.commands();
        return <div className={styles.commandContainer}>
            <p> Available Commands </p>
            <ul className={styles.helperCommands}>
                {commands.map((command, i) => {
                    return <li onClick={() => this.props.onCodeChange(this.props.code + "\n" + command + "();")} key={i}>{command}<span>()</span></li>;
                })}
            </ul>
        </div>;
    }
}