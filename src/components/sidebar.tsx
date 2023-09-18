import React from "react";
import type { ISidebar } from "~/types/karel";

const Topbar: React.FC<ISidebar> = (props) => {

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "task",
            "color": "fill-gray-400 text-gray-400",
            "text": "Level explanation",
            "onClick": () => props.setActiveTab(4),
            "className": "w-10 h-10 my-auto mr-3 mt-2",
            "path": "M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z",
            "viewBox": "0 0 640 512",
            "tabId": 4
        }, {
            "name": "commands",
            "color": "fill-gray-400 text-gray-400",
            "text": "Available commands",
            "onClick": () => props.setActiveTab(3),
            "className": "w-10 h-10 my-auto mr-3 mt-1",
            "path": "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z",
            "viewBox": "0 0 512 512",
            "tabId": 3
        }, {
            "name": "log1",
            "color": "fill-gray-400 text-gray-400",
            "text": "First world log",
            "onClick": () => props.setActiveTab(1),
            "className": "w-8 h-10 my-auto mt-3",
            "path": "M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
            "viewBox": "0 0 576 512",
            "addtionalText": "1",
            "tabId": 1
        }, {
            "name": "log2",
            "color": "fill-gray-400 text-gray-400",
            "text": "Second world log",
            "onClick": () => props.setActiveTab(2),
            "className": "w-8 h-10 my-auto mt-3",
            "path": "M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
            "viewBox": "0 0 576 512",
            "addtionalText": "2",
            "tabId": 2
        }, {
            "name": "code",
            "color": "fill-gray-400 text-gray-400",
            "text": "Custom code",
            "onClick": () => props.setActiveTab(5),
            "className": "w-11 h-10 my-auto mr-l mt-2 mb-1",
            "path": "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
            "viewBox": "0 0 640 512",
            "tabId": 5
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        let container = ""
        let btnClassName = btn.className
        // Apply the style to display the first log without number
        if (props.worldCounter == 1 && btn.name == "log1") btnClassName = "w-10 h-10 my-auto mr-3"
        // Display the active icon
        if (btn.tabId == props.activeTab && props.displayHelper) btn.color = "fill-white text-white"
        if (btn.tabId == props.activeTab && props.displayHelper) container = container + "cursor-pointer flex flex-row items-center justify-center w-full h-12 border-l-4"
        else container = "cursor-pointer flex flex-row items-center w-full h-12 justify-center border-custom-blue border-l-4"
        return <div onClick={btn.onClick} className={container} title={btn.text}>
            <div className={btnClassName}>
                <svg
                    className={"max-h-10 " + btn.color}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={btn.viewBox}
                >
                    <path d={btn.path} />
                </svg>
            </div>
            {/* Display additional numbers to logs when there are two of them */}
            {btn.addtionalText != null && props.worldCounter == 2 && <p className={btn.color + " font-bold text-2xl "}>&nbsp;{btn.addtionalText}</p>}
        </div>
    }

    return (
        <div className="flex flex-center flex-col items-center pt-6 gap-6">
            {returnButton("task")}
            {returnButton("commands")}
            {/* {returnButton("log1")} */}
            {/* {props.worldCounter == 2 && returnButton("log2")} */}
            {/* {returnButton("code")} */}
        </div>
    );
};
export default Topbar;
