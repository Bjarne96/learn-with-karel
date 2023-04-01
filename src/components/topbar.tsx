import React from 'react';
import SelectLevel from './select';
//Styles
import type { ITopbar } from "../types/karel"

export default class Topbar extends React.Component<ITopbar> {
    constructor(props: ITopbar) {
        super(props);
    }
    render() {
        const btnClassName = "w-32 text-white bg-sky-700 hover:bg-gray-400 font-semibold text-base py-2 px-4 rounded items-center"
        return <div className="flex flex-row gap-4 mt-4 items-center justify-start bg-code-grey rounded py-4">
            <div className="m-0 bg-code-grey pl-8 min-w-[250px] rounded overflow-auto">
                <p className="text-white text-lg h-8 font-semibold leading-8" >
                    {this.props.runningCode ? "Command Log" : "Available Commands"}
                </p>
            </div>
            <div className="mr-4 bg-code-grey min-w-[33vw] rounded overflow-auto">
                {this.props.runningCode != true ?
                    <button
                        className={btnClassName}
                        onClick={this.props.handleRunningCode.bind(this)}
                    >Run Code
                    </button>
                    :
                    <button
                        className={btnClassName}
                        onClick={this.props.handleResetCode.bind(this)}
                    >Reset Karel
                    </button>
                }
            </div>
            <div className="m-0 bg-code-grey px-4 min-w-[33vw] rounded overflow-auto flex flex-row items-center">
                <p className="text-white text-lg h-8 font-semibold leading-8 pr-4" >Current Level:</p>
                <SelectLevel
                    handleLevelChange={this.props.handleLevelChange.bind(this)}
                    currentLevel={this.props.currentLevel}
                />
            </div>
        </div>;
    }
}