import React from "react";
import type { ISelectLevelProps, ILevel } from "../types/karel";
import levels from "../data/levels";

const SelectLevel: React.FC<ISelectLevelProps> = ({ currentLevel, handleLevelChange }) => {
    return (
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
    );
};

export default SelectLevel;