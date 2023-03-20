import React from 'react';
import SelectLevel from './select_level';
//Styles
import type { ITopbar } from "./../interfaces/interfaces"

export default class Topbar extends React.Component<ITopbar> {
    constructor(props: ITopbar) {
        super(props);
    }
    render() {
        return <div className="flex flex-row gap-8 justify-center">
            {this.props.runningCode != true ?
                <button
                    className="w-48 dark:text-white dark:bg-gray-700 bg-gray-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center"
                    onClick={() => this.props.handleRunningCode()}
                >Run Code
                </button>
                :
                <button
                    className="w-48 dark:text-white dark:bg-gray-700 bg-gray-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center"
                    onClick={() => this.props.handleResetCode()}
                >Reset Karel
                </button>
            }
            <SelectLevel
                handleLevelChange={this.props.handleLevelChange.bind(this)}
                currentLevel={this.props.currentLevel}
            />
        </div>;
    }
}