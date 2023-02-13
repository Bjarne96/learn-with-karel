import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Code() {
    const onChange = React.useCallback((value: any, viewUpdate: any) => {
        console.log('value:', value);
    }, []);
    return (
        <CodeMirror
            value="console.log('hello world!');"
            height="33vw"
            minWidth="33vw"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            theme={"dark"}
        />
    );
}
export default Code;