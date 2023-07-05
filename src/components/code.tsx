import React, { useEffect, useRef, useState } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICodeProps } from '../types/karel'

const Code: React.FC<ICodeProps> = ({ code, onCodeChange, runningCode, activeLineProp }) => {

    const editorContainer = useRef<HTMLDivElement>(null);

    const [activeLine, setLine] = useState(0);

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
            if (runningCode && activeLineProp != 0) {
                // Change active line state
                setLine(activeLineProp - 1)
                // Add highlighting
                setTimeout(() => {
                    document.getElementsByClassName("cm-content")[0]
                        .children[activeLine]
                        .classList.add("highlighted-line")
                }, 16)

            } else if (runningCode && activeLineProp == 0) {
                // Remove highlighting 
                setTimeout(() => {
                    document.getElementsByClassName("cm-content")[0]
                        .children[activeLine]
                        .classList.remove("highlighted-line")
                }, 16)
            }
        } catch (e) { console.log('highlighted line error', e); }

    }, [runningCode, code, activeLineProp, activeLine, setLine])

    //Using the editorContainer
    useEffect(() => { if (editorContainer.current) setContainer(editorContainer.current) }, [setContainer]);

    return <div className="border-code-grey z-0">
        <div ref={editorContainer}></div>
    </div>
}

export default Code