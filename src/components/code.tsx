import React, { useEffect, useRef, useState } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICodeProps } from '../types/karel'

const Code: React.FC<ICodeProps> = ({ code, onCodeChange, runningCode, executionCompleted, activeLine }) => {

    const editor = useRef<HTMLDivElement>(null);

    const { setContainer } = useCodeMirror({
        container: editor.current,
        value: code,
        height: "33vw",
        width: "33vw",
        onChange: (value: string) => onCodeChange(value),
        theme: "dark",
        extensions: [javascript({ jsx: true })],
    });

    //Highlight active line
    useEffect(() => {
        if (runningCode && !executionCompleted && activeLine != 0) {
            try {
                setTimeout(() => {
                    document.getElementsByClassName("cm-content")[0].children[(activeLine - 1)].classList.add("highlighted-line")
                }, 16)
            } catch (e) {
                console.log('e', e);
            }
        }
    }, [runningCode, executionCompleted, code, activeLine])

    //Using the editor
    useEffect(() => {
        if (editor.current) setContainer(editor.current);
    }, [setContainer]);

    return (
        <div className="border-code-grey bg-code-grey border-[1rem] rounded">
            {/* {worldCounter === 2 && (
                <select
                    className="mb-4 font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={log}
                    onChange={(e) => changeLog(e.target.value)}
                >
                    {['firstLog', 'secondLog'].map((logOption: string, i: number) => (
                        <option value={logOption} key={i + 1}>Code Highlighting for World {i + 1}</option>
                    ))}
                </select>
            )} */}
            <div ref={editor}></div>
        </div>
    )
}

export default Code