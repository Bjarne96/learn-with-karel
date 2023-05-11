import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import type { ICode } from '../types/karel';

interface state {
    log: string
}

export default class Code extends React.Component<ICode, state> {


    constructor(props: ICode) {
        super(props)
        this.state = {
            log: "firstLog"
        }
    }

    componentDidUpdate(): void {
        if (this.props.worldCounter == 1 && this.state.log == "secondLog") {
            this.setState({
                log: "firstLog"
            })
        }
        if (this.props.runningCode) this.highlightLine();

    }

    highlightLine() {
        const lines = this.props[this.state.log].split('\n')
        for (let i = (lines.length - 1); i >= 0; i--) {
            const x = lines[i];
            if (x == "") continue
            const regex = /L(\d+):/;
            const matches = x.match(regex);
            if (matches && matches.length > 1) {
                const number = matches[1];
                setTimeout(() => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const activeLine: any = document.getElementsByClassName("cm-content")[0].childNodes[(number - 1)]
                    activeLine.style.backgroundColor = "white"
                    activeLine.style.borderRadius = "3px"
                }, 64);
                break;
            }
        }
    }

    changeLog(log: string) {
        this.setState({
            log: log
        })
    }

    render() {
        return (
            <div className="border-code-grey bg-code-grey border-[1rem] rounded">
                {this.props.worldCounter == 2 ?
                    <select
                        className="mb-4 font-semibold text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={this.state.log}
                        onChange={(e) => { this.changeLog(e.target.value) }}
                    >
                        {["firstLog", "secondLog"].map((log: string, i: number) => {
                            return <option value={log} key={i + 1}>Code Highlighting for World {i + 1}</option>;
                        })}
                    </select>
                    : ""
                }
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