import React from "react";
import type { ISelectLevelProps, INewLevel } from "../types/karel";
import levels from "../data/levels";

// DEV Variable (has to be always false when doing a commit)
const cheater = true

const SelectLevel: React.FC<ISelectLevelProps> = ({ currentLevel, handleLevelChange, doneLevels }) => {

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "arrow-right",
            "color": "fill-gray-200",
            "disabledColor": "fill-gray-600",
            "text": "Go to the next level.",
            "onClick": () => handleLevelChange(currentLevel + 1),
            "path": "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "arrow-left",
            "color": "fill-gray-200",
            "disabledColor": "fill-gray-600",
            "text": "Go to the last level.",
            "onClick": () => handleLevelChange(currentLevel - 1),
            "path": "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
            "viewBox": "0 0 448 512"
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        let checkPath
        let disabled = false
        if (name == "arrow-right") checkPath = currentLevel
        if (name == "arrow-left") checkPath = currentLevel - 1

        let className = "max-h-10 "
        if ((doneLevels.length - 1 > checkPath && doneLevels[checkPath]) || cheater) className += " cursor-pointer " + btn.color
        else {
            disabled = true
            className += " cursor-not-allowed " + btn.disabledColor
        }

        return <div className={"w-10 h-10 my-auto"} title={btn.text}>
            <svg
                onClick={(() => { if (!disabled) btn.onClick() })}
                className={className}
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
                onChange={(e) => {
                    if ((Number(e.target.value) != 0 && doneLevels[Number(e.target.value) - 1]) || Number(e.target.value) == 0 || cheater) handleLevelChange(Number(e.target.value))
                }}
                title="Select a level."
            >
                {levels.map((level: INewLevel, i: number) => (
                    <option className={((i != 0 && doneLevels[i - 1]) || i == 0 || cheater) ? "" : "text-gray-600"} value={i} key={i}>
                        {i + 1}. {level.name} {level.playmode == true ? "(playmode enabled)" : ""}
                    </option>
                ))}
            </select>
            {returnButton("arrow-right")}
        </div>
    );
};

export default SelectLevel;