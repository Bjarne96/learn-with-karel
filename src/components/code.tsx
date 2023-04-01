import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import type { ICode } from '../types/karel';
import styles from "../styles/learnwithkarel.module.css";

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
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value: string) => {
                        this.props.onCodeChange(value)
                    }}
                    // onClick={
                    //     (e) => console.log(e.target)
                    // }
                    theme={"dark"}
                />
            </div>
        );
    }
}