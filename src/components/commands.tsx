import React from "react";
import type { ICommandProps } from "../interfaces/interfaces";
import styles from "../styles/commands.module.css";

export default class Commands extends React.Component<ICommandProps> {

    commands() {
        const commands = ["move", "turnLeft", "putBeeper", "pickBeeper"];
        const superCommands = [
            "turnRight",
            "turnAround",
            "frontIsClear",
            "frontIsBlocked",
            "leftIsClear",
            "leftIsBlocked",
            "rightIsClear",
            "rightIsBlocked",
            "beepersPresent",
            "noBeepersPresent",
            "beepersInBag",
            "noBeepersInBag",
            "facingNorth",
            "notFacingNorth",
            "facingEast",
            "notFacingEast",
            "facingSouth",
            "notFacingSouth",
            "facingWest",
            "notFacingWest",
        ];

        return (this.props.isKarelSuper) ?
            commands.concat(superCommands) :
            commands;
    }

    render() {
        const commands = this.commands();
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