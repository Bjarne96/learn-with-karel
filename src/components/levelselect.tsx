import React from "react";
import type { ISelectLevelProps, ILevel } from "../types/karel";
import levels from "../data/levels";

const SelectLevel: React.FC<ISelectLevelProps> = ({ currentLevel, handleLevelChange }) => {

    const returnButton = (name: string) => {
        const svgPaths = [{
            "name": "arrow-right",
            "color": "fill-gray-200",
            "text": "",
            "onClick": () => handleLevelChange(currentLevel + 1),
            "path": "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
            "viewBox": "0 0 448 512"
        }, {
            "name": "arrow-left",
            "color": "fill-gray-200",
            "text": "",
            "onClick": () => handleLevelChange(currentLevel - 1),
            "path": "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
            "viewBox": "0 0 448 512"
        }]
        const btn = svgPaths.filter((e) => { if (e.name == name) return true })[0]
        return <div className="w-10 has-tooltip h-10 my-auto">
            {btn.text != "" &&
                <span className="tooltip rounded shadow-lg p-1 bg-code-grey text-white -mt-8">
                    {btn.text}
                </span>
            }
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
                className="font-semibold text-base max-w-min bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={currentLevel}
                onChange={(e) => handleLevelChange(Number(e.target.value))}
            >
                {levels.map((level: ILevel, i: number) => (
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