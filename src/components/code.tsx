import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import type { ICode } from '../types/karel';

export default class Code extends React.Component<ICode> {

    constructor(props: ICode) {
        super(props);
    }

    render() {
        return (
            <div className="border-code-grey border-[1rem] rounded">
                <CodeMirror
                    value={this.props.code}
                    height="33vw"
                    width="33vw"
                    onChange={(value: string) => {
                        this.props.onCodeChange(value)
                    }}
                    theme={"dark"}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    extensions={[javascript({ jsx: true })]}
                />
            </div>
        );
    }
}