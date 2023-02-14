import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ICode } from '../interfaces/Ilearnwithkarel';

export default class Code extends React.Component<ICode> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CodeMirror
                value={this.props.code}
                height="33vw"
                minWidth="33vw"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => this.props.onCodeChange(value)}
                theme={"dark"}
            />
        );
    }
}