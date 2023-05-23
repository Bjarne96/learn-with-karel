import React, { useState, useEffect } from "react"
import type { ICommandProps } from "../types/karel"

interface State {
    log: string
}

const Commands: React.FC<ICommandProps> = (props) => {
    const [state, setState] = useState<State>({
        log: "firstLog",
    })

    useEffect(() => {
        if (props.worldCounter === 1 && state.log === "secondLog") setState({ log: "firstLog", })
    }, [props.worldCounter, state.log])

    const changeLog = (log: string) => setState({ log: log, })


    return <div className="m-0 bg-code-grey py-4 px-4 min-w-[250px] max-w-[250px] overflow-y-auto rounded max-h-[calc(33vw+2rem)]">
        {props.runningCode && <>
            {props.worldCounter === 2 &&
                <select
                    className="mb-4 font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={state.log}
                    onChange={(e) => changeLog(e.target.value)}
                >
                    {["firstLog", "secondLog"].map((log: string, i: number) => (
                        <option value={log} key={i + 1}>World {i + 1}</option>
                    ))}
                </select>
            }
            {props[state.log].split("\n").map((str, i) => {
                if (str === "") return null
                let color = "text-sky-500"
                if (/Error/.test(str)) color = "text-red-600"
                if (/=/.test(str) && /true/.test(str)) color = "text-green-600"
                if (/=/.test(str) && /false/.test(str)) color = "text-yellow-600"
                return <p className={"break-word font-semibold whitespace-pre-wrap " + color} key={i}>{str}</p>
            })}</>
        }
        {props.runningCode == false &&
            <ul className="list-none">
                {props.commands.map((command, i) => (
                    <li
                        className="pb-2 cursor-pointer text-code-blue"
                        onClick={() => props.onCodeChange(props.code + "\n" + command + "();")}
                        key={i}
                    >
                        {command}<span className="pl-1 text-code-lightgrey">()</span>
                    </li>
                ))}
            </ul>
        }
    </div>
}

export default Commands