import React, { useEffect, useRef } from "react"
import type { ILogProps } from "../types/karel"

const Log: React.FC<ILogProps> = ({ log, worldCounter, logNumber }) => {
    const bottomRef = useRef(null)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [log])     // Scroll to the bottom

    return <div className={worldCounter == 2 && logNumber == 2
        // rightside
        ? "flex flex-col m-0 w-full border-t-2 border-l-0 border-gray-400"
        // lefside
        : "flex flex-col m-0 w-full border-gray-400 border-t-2 "}>
        <p className="break-word p-4 font-semibold whitespace-pre-wrap text-white">
            {worldCounter == 1 && "Command log"}
            {worldCounter == 2 && logNumber == 1 && "First world command log"}
            {worldCounter == 2 && logNumber == 2 && "Second world command log"}
        </p>
        <div className=" px-4 mb-4 overflow-y-auto h-full w-full" >
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
                        <span className="w-6 inline-block text-right pr-4">{logEntry.line}</span>
                    </>}
                    <span>{logEntry.message}</span>
                </p>
            })}
            <div ref={bottomRef} ></div>
        </div>
    </div>
}

export default Log