import React from "react"
import type { ILogProps } from "../types/karel"

const Log: React.FC<ILogProps> = ({ log }) => {
    return <div className="m-0 py-4 px-4 min-w-[250px] max-w-[250px] overflow-y-auto rounded h-[100vh]">
        {log.map((logEntry, i) => {
            if (logEntry.message === "") return null
            let color = ""
            // Adds the correct color style
            if (logEntry.type == "normal") color = "text-sky-400"
            else if (logEntry.type == "success") color = "text-green-600"
            else if (logEntry.type == "error") color = "text-rose-600"
            else if (logEntry.type == "info") color = "text-white"
            else if (logEntry.type == "returnedTrue") color = "text-yellow-400"
            else if (logEntry.type == "returnedFalse") color = "text-yellow-400"
            return <p className={"break-word font-semibold whitespace-pre-wrap " + color} key={i}>
                {/* Adds line information for usual commands*/}
                {logEntry.type != "info" && logEntry.type != "success" && logEntry.type != "error" && <>
                    <span className="w-2 inline-block text-left">L&nbsp;</span>
                    <span className="w-6 inline-block text-right pr-1">{logEntry.line}</span>
                </>}
                <span>{logEntry.message}</span>
            </p>
        })}
        {log.length == 0 && <p className={"break-word font-semibold whitespace-pre-wrap text-white"}>Empty log</p>}
    </div>
}

export default Log