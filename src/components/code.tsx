import React, { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICodeProps } from '../types/karel'

const Code: React.FC<ICodeProps> = ({ code, onCodeChange, runningCode, executionCompleted, activeLine }) => {

    const editorContainer = useRef<HTMLDivElement>(null);

    const { setContainer } = useCodeMirror({
        container: editorContainer.current,
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
                    document.getElementsByClassName("cm-content")[0]
                        .children[(activeLine - 1)]
                        .classList.add("highlighted-line")
                }, 16)
            } catch (e) {
                console.log('e', e);
            }
        }
    }, [runningCode, executionCompleted, code, activeLine])

    //Using the editorContainer
    useEffect(() => {
        if (editorContainer.current) setContainer(editorContainer.current);
    }, [setContainer]);

    return (
        <div className="border-code-grey bg-code-grey border-[1rem] rounded">
            <div ref={editorContainer}></div>
        </div>
    )
}

export default Code