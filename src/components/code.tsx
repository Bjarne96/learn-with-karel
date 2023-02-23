import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import type { ICode } from '../interfaces/interfaces';
import styles from "../styles/learnwithkarel.module.css";

export default class Code extends React.Component<ICode> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.codeContainer}>
                <CodeMirror
                    value={this.props.code}
                    height="33vw"
                    minWidth="33vw"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => {
                        this.props.onCodeChange(value)
                    }}
                    onClick={
                        (e) => console.log(e.target)
                    }
                    theme={"dark"}
                />
            </div>
        );
    }
}