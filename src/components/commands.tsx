import React from "react"
import type { ICommandProps } from "../types/karel"

const Commands: React.FC<ICommandProps> = ({ runningCode, log, commands }) => {

    const path = "M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V243.9c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
    let time;

    const copyCommand = (e, command) => {
        if (time != null) clearTimeout(time)
        navigator.clipboard.writeText(command + "();")
        const tooltipSpan = document.getElementById('command-tooltip');
        tooltipSpan.style.display = "block"
        const x = e.clientX,
            y = e.clientY;
        tooltipSpan.style.top = (y - 20) + 'px';
        tooltipSpan.style.left = (x + 20) + 'px';
        time = setTimeout(() => tooltipSpan.style.display = "none", 1200)
    }

    return <div className="m-0 bg-code-grey py-4 px-4 min-w-[250px] max-w-[250px] overflow-y-auto rounded max-h-[calc(33vw+2rem)]">
        {runningCode && <>
            {log.map((str, i) => {
                if (str === "") return null
                let color = "text-sky-500"
                if (/Error/.test(str)) color = "text-red-600"
                if ((/=/.test(str) && /true/.test(str)) || !/not/.test(str) && /solved/.test(str)) color = "text-green-600"
                if (/=/.test(str) && /false/.test(str)) color = "text-yellow-600"
                return <p className={"break-word font-semibold whitespace-pre-wrap " + color} key={i}>{str}</p>
            })}</>
        }
        {runningCode == false &&
            <ul className="list-none">
                {commands.map((command, i) => (
                    <li
                        className="my-2 pb-2 cursor-pointer fill-code-blue text-code-blue hover:fill-gray-200 hover:text-gray-200"
                        key={i}
                        onClick={(e) => copyCommand(e, command)}
                    >
                        {command}<span className="pl-1 text-code-lightgrey">&nbsp;</span>
                        <svg

                            className={"cursor-pointer max-h-4 inline  "}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        ><path d={path} /></svg>
                    </li>
                ))}
            </ul>

        }
        <div id="command-tooltip" className="opacity-100 hidden fixed overflow-hidden rounded shadow-lg p-1 bg-code-grey text-white" >Copied!</div>
    </div>
}

export default Commands