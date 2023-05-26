import React, { useRef, useEffect, useState } from 'react'

import { EditorView, keymap } from '@codemirror/view'
import { EditorSelection, EditorState } from '@codemirror/state'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

export const Editor = ({ setEditorState }) => {
    const editor = useRef()
    const [code, setCode] = useState('')

    const onUpdate = EditorView.updateListener.of((v) => {
        console.log('v', v);
        setCode(v.state.doc.toString())
    })

    useEffect(() => {
        const state = EditorState.create({
            doc: 'Hello WorldHello WorldHello WorldHello World\nHello World\nHello World\nHello World\n',
            extensions: [
                // keymap.of([defaultKeymap, indentWithTab]),
                keymap.of(defaultKeymap),
                oneDark,
                javascript(),
                onUpdate,
            ],
        })

        const view = new EditorView({ state, parent: editor.current })
        view.dispatch({
            changes: { from: 20, insert: "*" },
            selection: { anchor: 11 }
        })


        return () => {
            view.destroy()
        }
    }, [])

    return <div ref={editor}></div>
}