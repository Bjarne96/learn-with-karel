import React, { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import type { ICodeProps } from '../types/karel'

const Code: React.FC<ICodeProps> = ({ code, onCodeChange, runningCode, activeLineProp, executionCompleted }) => {

    const editorContainer = useRef<HTMLDivElement>(null);

    const activeLine = useRef(0);

    const { setContainer } = useCodeMirror({
        container: editorContainer.current,
        value: code,
        height: "75vh",
        width: "100%",
        onChange: (value: string) => onCodeChange(value),
        theme: "dark",
        extensions: [javascript({ jsx: true })],
    });

    function changeHighlighting(remove = false) {
        setTimeout(() => {
            try {
                const lines = document.getElementsByClassName("cm-content")[0].children
                if (lines.length - 1 < activeLine.current) return
                const line = lines[activeLine.current].classList
                if (remove) line.remove("highlighted-line")
                if (!remove) line.add("highlighted-line")
            } catch (e) { console.warn('e', e) }
        }, 16)
    }

    //Line highlighting
    useEffect(() => {
        if (runningCode && activeLineProp >= 1 && editorContainer.current) {
            activeLine.current = activeLineProp - 1
            // Add highlighting -> change line to active
            changeHighlighting()
        } else if (executionCompleted && activeLineProp == 0) {
            // Remove highlighting -> cange active line to inactive
            changeHighlighting(true)
        }

    }, [runningCode, code, activeLineProp, executionCompleted])

    //Using the editorContainer
    useEffect(() => { if (editorContainer.current) setContainer(editorContainer.current) }, [setContainer]);

    return <div className="border-code-grey z-0"><div ref={editorContainer}></div></div>
}

export default Code