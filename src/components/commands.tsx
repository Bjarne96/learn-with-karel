import React from "react";
import type { ICommandProps } from "../types/karel";
import { ErrorString, regexPatternNoCommand } from "~/types/enums";

interface state {
    log: string
}

export default class Commands extends React.Component<ICommandProps, state> {

    constructor(props) {
        super(props)
        this.state = {
            log: "firstLog"
        }
    }

    componentDidUpdate(): void {
        if (this.props.worldCounter == 1 && this.state.log == "secondLog") {
            this.setState({
                log: "firstLog"
            })
        }
    }

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

    changeLog(log: string) {
        this.setState({
            log: log
        })
    }

    render() {
        const commands = this.commands();
        let content = <>
            <ul className="list-none">
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
                this.props.worldCounter == 2 ?
                    <select
                        className="font-semibold  text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={this.state.log}
                        onChange={(e) => { this.changeLog(e.target.value) }}
                    >
                        {["firstLog", "secondLog"].map((log: string, i: number) => {
                            return <option value={log} key={i + 1}>World {i + 1}</option>;
                        })}
                    </select>
                    : ""
            }
                {
                    this.props[this.state.log].split('\n').map((str, i) => {
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