import React from 'react';
import SelectLevel from './select_level';
//Styles
import type { ITopbar } from "../types/karel"

export default class Topbar extends React.Component<ITopbar> {
    constructor(props: ITopbar) {
        super(props);
    }
    render() {
        return <div className="flex flex-row gap-8 justify-center bg-code-grey rounded p-4 content-center">
            <p className="text-white h-8 leading-8 font-bold px-4" >Current Level: {this.props.currentLevel + 1}</p>
            {this.props.runningCode != true ?
                <button
                    className="w-32 text-white bg-sky-600 hover:bg-gray-400 font-bold py-2 px-4 rounded items-center"
                    onClick={() => this.props.handleRunningCode()}
                >Run Code
                </button>
                :
                <button
                    className="w-32 text-white bg-sky-600 hover:bg-gray-400 font-bold py-2 px-4 rounded items-center"
                    onClick={() => this.props.handleResetCode()}
                >Reset Karel
                </button>
            }
            <SelectLevel
                runningCode={this.props.runningCode}
                handleLevelChange={this.props.handleLevelChange.bind(this)}
                currentLevel={this.props.currentLevel}
            />
        </div>;
    }
}