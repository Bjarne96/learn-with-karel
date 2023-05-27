import React, { useState, useRef } from 'react'
import SelectLevel from './select'
// Styles
import type { ITopbar } from "../types/karel"

const Topbar: React.FC<ITopbar> = (props) => {
    const [interval, setIntervalSpeed] = useState(250)
    const timer = useRef<NodeJS.Timeout | null>(null); // Create a mutable reference
    const tooltipContainer = "w-10 has-tooltip h-10 my-auto"
    const tooltipContainer2 = "w-8 has-tooltip h-10 my-auto"
    const tooltipText = "tooltip rounded shadow-lg p-1 bg-code-grey text-white -mt-8"

    const handleIntervalSpeed = (value: number) => {
        // Clear any previous setTimeout
        clearTimeout(timer.current);
        // Set the new interval speed
        setIntervalSpeed(value);
        // Call props.handleIntervalChange after a delay of 100ms
        timer.current = setTimeout(() => props.handleIntervalChange(value), 100);
    }

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "play",
            "color": "fill-green-600",
            "text": "Execute your code.",
            "onClick": props.handleRunningCode,
            "className": tooltipContainer2,
            "path": "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
            "viewBox": "0 0 384 512"
        }, {
            "name": "pause",
            "color": "fill-gray-200",
            "text": "Pause the execution.",
            "onClick": () => props.handleIntervalPause(true),
            "className": tooltipContainer2,
            "path": "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z",
            "viewBox": "0 0 320 512"
        }, {
            "name": "reset",
            "color": "fill-gray-200",
            "text": "Reset the execution.",
            "onClick": props.handleResetCode,
            "className": tooltipContainer,
            "path": "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z",
            "viewBox": "0 0 512 512"
        }, {
            "name": "save",
            "color": "fill-green-200",
            "text": "Save your code.",
            "onClick": props.handleSaveCode,
            "className": tooltipContainer,
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "completed",
            "color": "fill-green-700",
            "text": "This level has been completed.",
            "onClick": null,
            "className": tooltipContainer,
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "uncompleted",
            "color": "fill-red-700",
            "text": "This level has not been completed.",
            "onClick": null,
            "className": tooltipContainer,
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "arrow-right",
            "color": "fill-gray-200",
            "text": null,
            "onClick": () => props.handleLevelChange(props.currentLevel + 1),
            "className": tooltipContainer,
            "path": "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "arrow-left",
            "color": "fill-gray-200",
            "text": null,
            "onClick": () => props.handleLevelChange(props.currentLevel - 1),
            "className": tooltipContainer,
            "path": "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
            "viewBox": "0 0 448 512"
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        return <div className={btn.className}>
            {typeof btn.text == "string" && <span className={tooltipText}>{btn.text}</span>}
            <svg
                onClick={btn.onClick}
                className={"cursor-pointer max-h-10 " + btn.color}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={btn.viewBox}
            >
                <path d={btn.path} />
            </svg>
        </div>
    }

    return (
        <div className="flex flex-row gap-4 mt-4 items-center justify-start bg-code-grey rounded py-4">
            <div className="m-0 bg-code-grey pl-8 min-w-[250px] rounded overflow-auto">
                {props.worldCounter === 2 && (
                    <select
                        className="font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={props.activeLog}
                        onChange={(e) => props.setActiveLog(Number(e.target.value))}
                    >
                        {[1, 2].map((logNumber: number) => (
                            <option value={logNumber} key={logNumber}>Debug world {logNumber}</option>
                        ))}
                    </select>
                )}
                {/* <p className="text-white text-lg h-8 font-semibold leading-8">
                    {props.runningCode ? "Command Log" : "Available Commands"}
                </p> */}
            </div>
            <div className="flex flex-row gap-4 mr-4 bg-code-grey min-w-[33vw] rounded">
                {returnButton("play")}
                {returnButton("pause")}
                {returnButton("reset")}
                {props.isLoggedIn && (returnButton("save"))}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <p className="mx-auto text-center text-white text-lg h-8 font-semibold leading-8">
                            Run Speed {interval / 1000}s
                        </p>
                    </label>
                    <input
                        type="range"
                        value={interval}
                        step="100"
                        min="100"
                        max="2000"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIntervalSpeed(Number(e.target.value))}
                        className="w-32 h-1 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                    />
                </div>
                {props.isLoggedIn && props.done === "" ? (returnButton("uncompleted")) : (returnButton("completed"))}
            </div>
            <div className="m-0 bg-code-grey px-4 min-w-[33vw] rounded overflow-auto flex flex-row items-center gap-4">
                {returnButton("arrow-left")}
                <SelectLevel
                    handleLevelChange={props.handleLevelChange}
                    currentLevel={props.currentLevel}
                />
                {returnButton("arrow-right")}
            </div>
        </div>
    )
}

export default Topbar