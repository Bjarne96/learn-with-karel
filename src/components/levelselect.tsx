import React from "react";
import type { ISelectLevelProps, ILevel, INewLevel } from "../types/karel";
import levels from "../data/task-levels";

const SelectLevel: React.FC<ISelectLevelProps> = ({ currentLevel, handleLevelChange }) => {

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "arrow-right",
            "color": "fill-gray-200",
            "text": "Go to the next level.",
            "onClick": () => handleLevelChange(currentLevel + 1),
            "path": "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "arrow-left",
            "color": "fill-gray-200",
            "text": "Go to the last level.",
            "onClick": () => handleLevelChange(currentLevel - 1),
            "path": "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
            "viewBox": "0 0 448 512"
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        return <div className={"w-10 h-10 my-auto"} title={btn.text}>
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
        <div className="m-8 px-4 overflow-auto flex flex-row justify-center items-center gap-4">
            {returnButton("arrow-left")}
            <select
                className="peer h-full max-w-[480px] w-full font-semibold text-base bg-gray-50 text-gray-900 rounded-lg dark:focus:border-blue-500 border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:bg-sky-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200"
                value={currentLevel}
                onChange={(e) => handleLevelChange(Number(e.target.value))}
                title="Select a level."
            >
                {levels.map((level: INewLevel, i: number) => (
                    <option value={i} key={i}>
                        {i + 1}. {level.name}
                    </option>
                ))}
            </select>
            {returnButton("arrow-right")}
        </div>
    );
};

export default SelectLevel;