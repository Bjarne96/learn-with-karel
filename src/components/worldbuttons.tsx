import React, { useState, useRef } from 'react'
// Styles
import type { IWorldButtons } from "../types/karel"

const WorldButtons: React.FC<IWorldButtons> = (props) => {

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "play",
            "color": "fill-green-600",
            "text": "Execute your code.",
            "onClick": () => props.setRunningCode(true, 1000),
            "className": "w-8 has-tooltip h-10 my-auto",
            "path": "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
            "viewBox": "0 0 384 512"
        }, {
            "name": "forward",
            "color": "fill-gray-200",
            "text": "Execute your code faster.",
            "onClick": () => props.setRunningCode(true, 500),
            "className": "w-10 has-tooltip h-10 my-auto",
            "path": "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z",
            "viewBox": "0 0 512 512"
        }, {
            "name": "fastforward",
            "color": "fill-gray-200",
            "text": "Execute your code very fast.",
            "onClick": () => props.setRunningCode(true, 100),
            "className": "w-10 has-tooltip h-10 my-auto",
            "path": "M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z",
            "viewBox": "0 0 512 512"
        }, {
            "name": "step",
            "color": "fill-gray-200",
            "text": "Next step of execution.",
            "onClick": () => console.log("coming soon"),
            "className": "w-8 has-tooltip h-10 my-auto",
            "path": "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z",
            "viewBox": "0 0 320 512"
        }, {
            "name": "pause",
            "color": "fill-gray-200",
            "text": "Pause the execution.",
            "onClick": () => props.handleIntervalPause(true),
            "className": "w-8 has-tooltip h-10 my-auto",
            "path": "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z",
            "viewBox": "0 0 320 512"
        }, {
            "name": "reset",
            "color": "fill-gray-200",
            "text": "Reset the execution.",
            "onClick": props.handleResetCode,
            "className": "w-9 has-tooltip h-9 my-auto",
            "path": "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z",
            "viewBox": "0 0 512 512"
        }, {
            "name": "save",
            "color": "fill-green-200",
            "text": "Save your code.",
            "onClick": props.handleSaveCode,
            "className": "w-10 has-tooltip h-10 my-auto",
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "completed",
            "color": "fill-green-700",
            "text": "This level has been completed.",
            "onClick": null,
            "className": "w-10 has-tooltip h-10 my-auto",
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "uncompleted",
            "color": "fill-red-700",
            "text": "This level has not been completed.",
            "onClick": null,
            "className": "w-10 has-tooltip h-10 my-auto",
            "path": "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z",
            "viewBox": "0 0 448 512"
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        return <div className={btn.className}>
            {typeof btn.text == "string" &&
                <span className="tooltip rounded shadow-lg p-1 bg-code-grey text-white -mt-8">
                    {btn.text}
                </span>}
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
        <div className="flex flex-row gap-4 mt-4 items-center justify-center py-4">
            <div className="flex flex-row gap-4 mr-4">
                {returnButton("play")}
                {returnButton("forward")}
                {returnButton("fastforward")}
                {/* {returnButton("step")} */}
                {returnButton("pause")}
                {returnButton("reset")}
                {/* {props.isLoggedIn && (returnButton("save"))} */}
                {props.isLoggedIn && props.done === "" ? (returnButton("uncompleted")) : (returnButton("completed"))}
            </div>
        </div>
    )
}
export default WorldButtons