import React from "react";
import type { ICommandProps } from "../types/karel";

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

    changeLog(log: string) {
        this.setState({
            log: log
        })
    }

    render() {
        let content = <>
            <ul className="list-none">
                {this.props.commands.map((command, i) => {
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
                        className="mb-4 font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        //Colors Basic Function Calls BLUE
                        let color = "text-sky-500"
                        //Colors Error Messages RED
                        if (/Error/.test(str)) color = "text-red-600"
                        //Colors Functions Calls that return true GREEN
                        if (/=/.test(str) && /true/.test(str)) color = "text-green-600"
                        //Colors Functions Calls that return false YELLOW
                        if (/=/.test(str) && /false/.test(str)) color = "text-yellow-600"
                        return <p className={"break-word font-semibold whitespace-pre-wrap " + color} key={i}>{str}</p>
                    })
                }</>
        }
        return <div className="m-0 bg-code-grey py-4 px-4 min-w-[250px] max-w-[250px] overflow-y-auto rounded max-h-[calc(33vw+2rem)]">
            {content}
        </div>;
    }

}