import React from "react";
import type { ICommandProps } from "../types/karel";
import { ErrorString, regexPatternNoCommand } from "~/types/enums";

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
        let content = <>
            <ul className="list-none ">
                {commands.map((command, i) => {
                    return <li
                        className="pb-2 cursor-pointer text-code-blue"
                        onClick={() => this.props.onCodeChange(this.props.code + "\n" + command + "();")}
                        key={i}
                    >
                        {command}<span className="pl-1 text-code-lightgrey">()</span>
                    </li>;
                })}
            </ul>
        </>
        if (this.props.runningCode) {
            content = <>{
                this.props.log.split('\n').map((str, i) => {
                    if (str == "") return
                    if (str == ErrorString) {
                        return <p className="text-yellow-600 font-semibold" key={i}>{str}</p>
                    }
                    if (!regexPatternNoCommand.test(str)) {
                        return <p className="text-red-600 font-semibold" key={i}>{str}</p>
                    }
                    return <p className="text-sky-500 font-semibold" key={i}>{str}</p>
                })
            }</>
        }
        return <div className="m-0 bg-code-grey py-4 px-8 min-w-[250px] rounded overflow-auto max-h-[calc(33vw+2rem)]">
            {content}
        </div>;
    }

}