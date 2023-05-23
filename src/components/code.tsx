import React, { useEffect, useState, useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICode } from '../types/karel'

const Code: React.FC<ICode> = ({ worldCounter, code, onCodeChange, firstLog, secondLog, runningCode }) => {

    const [log, setLog] = useState<string>('firstLog')

    const changeLog = (newLog: string) => setLog(newLog)

    const highlightLine = useCallback(() => {
        const lines = log === 'firstLog' ? firstLog.split('\n') : secondLog.split('\n')
        for (let i = lines.length - 1; i >= 0; i--) {
            try {
                const line = lines[i]
                if (line === '') continue
                const commandRegex = /L(\d+):/
                const errorRegex = /Line (\d+)./
                let matches = line.match(commandRegex)
                if (matches === null) matches = line.match(errorRegex)
                if (matches && matches.length > 1) {
                    const number = Number(matches[1])
                    setTimeout(() => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const activeLine: any = document.getElementsByClassName("cm-content")[0].childNodes[(number - 1)]
                        if (activeLine !== undefined) {
                            activeLine.style.backgroundColor = 'white'
                            activeLine.style.borderRadius = '3px'
                        }
                    }, 64)
                    break
                }
            } catch (e) { }
        }
    }, [log, firstLog, secondLog])

    useEffect(() => {
        if (worldCounter === 1 && log === 'secondLog') setLog('firstLog')
        if (runningCode) highlightLine()
    }, [worldCounter, log, runningCode, firstLog, secondLog, highlightLine])

    return (
        <div className="border-code-grey bg-code-grey border-[1rem] rounded">
            {worldCounter === 2 && (
                <select
                    className="mb-4 font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={log}
                    onChange={(e) => changeLog(e.target.value)}
                >
                    {['firstLog', 'secondLog'].map((logOption: string, i: number) => (
                        <option value={logOption} key={i + 1}>Code Highlighting for World {i + 1}</option>
                    ))}
                </select>
            )}
            <CodeMirror
                value={code}
                height="33vw"
                width="33vw"
                onChange={(value: string) => onCodeChange(value)}
                theme="dark"
                extensions={[javascript({ jsx: true })]}
            />
        </div>
    )
}

export default Code