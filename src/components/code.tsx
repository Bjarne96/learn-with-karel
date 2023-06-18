import React, { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICodeProps } from '../types/karel'

const Code: React.FC<ICodeProps> = ({ code, onCodeChange, runningCode, activeLine }) => {

    const editorContainer = useRef<HTMLDivElement>(null);

    const { setContainer } = useCodeMirror({
        container: editorContainer.current,
        value: code,
        height: "100vh",
        width: "100%",
        onChange: (value: string) => onCodeChange(value),
        theme: "dark",
        extensions: [javascript({ jsx: true })],
    });

    //Highlight active line
    useEffect(() => {
        try {
            if (runningCode && activeLine != 0) {
                setTimeout(() => {
                    try {
                        document.getElementsByClassName("cm-content")[0]
                            .children[(activeLine - 1)]
                            .classList.add("highlighted-line")
                    } catch (e) { /* Prevent breaking when lines are removed. */ }
                }, 16)

            }
            // TODO: Check if highlighted lines stay in some edge cases
            // else if (activeLine == 0) {
            //     const highlightedLine = document.getElementsByClassName("highlighted-line")[0]
            //     if (highlightedLine != undefined) {
            //         highlightedLine.classList.remove("highlighted-line")
            //     }
            // }
        } catch (e) { console.log('highlighted line error', e); }

    }, [runningCode, code, activeLine])

    //Using the editorContainer
    useEffect(() => { if (editorContainer.current) setContainer(editorContainer.current) }, [setContainer]);

    return <div className="border-code-grey"><div ref={editorContainer}></div></div>
}

export default Code