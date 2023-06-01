import React from "react"
import type { ILogProps } from "../types/karel"

const Log: React.FC<ILogProps> = ({ log }) => {

    return <div className="m-0 py-4 px-4 min-w-[250px] max-w-[250px] overflow-y-auto rounded max-h-[calc(33vw+2rem)]">
        {log.map((str, i) => {
            if (str === "") return null
            let color = "text-sky-500"
            if (/Error/.test(str)) color = "text-red-600"
            if ((/=/.test(str) && /true/.test(str)) || !/not/.test(str) && /solved/.test(str)) color = "text-green-600"
            if (/=/.test(str) && /false/.test(str)) color = "text-yellow-600"
            return <p className={"break-word font-semibold whitespace-pre-wrap " + color} key={i}>{str}</p>
        })}
        {log.length == 0 && <p className={"break-word font-semibold whitespace-pre-wrap text-white"}>The log is empty at the moment.</p>}
    </div>
}

export default Log