import React from 'react';
import SelectLevel from './select';
//Styles
import type { ITopbar } from "../types/karel"

interface State {
    interval: number
}

export default class Topbar extends React.Component<ITopbar, State> {

    intervalSet = false
    constructor(props: ITopbar) {
        super(props);
        this.state = {
            interval: 250
        }
    }

    handleIntervalSpeed(e) {
        if (!this.intervalSet) {
            this.intervalSet = true
            setTimeout(() => {
                this.intervalSet = false
                this.props.handleIntervalChange(this.state.interval)
            }, 200);
        }
        this.setState({ interval: e.target.value })
    }


    render() {
        const tooltipContainer = "has-tooltip h-10 w-10 my-auto"
        const tooltipContainer2 = "has-tooltip h-10 w-8 my-auto"
        const tooltipText = "tooltip rounded shadow-lg p-1 bg-code-grey text-white -mt-8"
        const btnClassName = "w-32 text-white bg-sky-700 hover:bg-gray-400 font-semibold text-base py-2 px-4 rounded items-center"
        const completedClassName = "my-auto h-10 w-32 text-white bg-green-700 font-semibold text-base py-2 px-4 rounded items-center"
        const uncompletedClassName = "my-auto h-10 w-32 text-white bg-red-600 font-semibold text-base py-2 px-4 rounded items-center"
        const resetClassName = "w-32 text-white bg-yellow-600 hover:bg-gray-400 font-semibold text-base py-2 px-4 rounded items-center"
        return <div className="flex flex-row gap-4 mt-4 items-center justify-start bg-code-grey rounded py-4">
            <div className="m-0 bg-code-grey pl-8 min-w-[250px] rounded overflow-auto">
                <p className="text-white text-lg h-8 font-semibold leading-8" >
                    {this.props.runningCode ? "Command Log" : "Available Commands"}
                </p>
            </div>
            <div className="flex flex-row gap-4 mr-4 bg-code-grey min-w-[33vw] rounded">
                <div className={tooltipContainer2}>
                    <span className={tooltipText} >Execute your code.</span>
                    <svg
                        onClick={this.props.handleRunningCode.bind(this)}
                        className="cursor-pointer max-h-10 fill-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                </div>

                <div className={tooltipContainer2}>
                    <span className={tooltipText}>Pause the execution.</span>
                    <svg
                        onClick={() => this.props.handleIntervalPause(true)}
                        className="cursor-pointer max-h-10 fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                    </svg>
                </div>
                <div className={tooltipContainer}>
                    <span className={tooltipText}>Reset the execution.</span>
                    <svg
                        onClick={this.props.handleResetCode.bind(this)}
                        className="cursor-pointer max-h-10 fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
                    </svg>
                </div>
                {
                    this.props.isLoggedIn ?
                        <div className={tooltipContainer}>
                            <span className={tooltipText}>Save your code.</span>
                            <svg
                                onClick={this.props.handleSaveCode.bind(this)}
                                className="cursor-pointer max-h-10 fill-green-200"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </div> : ""
                }
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <p className="mx-auto text-center text-white text-lg h-8 font-semibold leading-8" >Run Speed {this.state.interval / 1000}s</p>
                    </label>
                    <input
                        type="range"
                        value={this.state.interval}
                        step="100"
                        min="100"
                        max="2000"
                        onChange={(e) => this.handleIntervalSpeed(e)}
                        className="w-32 h-1 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                    />
                </div>
                {this.props.done == "" ?
                    <div className={tooltipContainer}>
                        <span className={tooltipText}>The level has not been completed.</span>
                        <button
                            className={uncompletedClassName}
                            disabled
                        >Uncompleted
                        </button>
                    </div> :
                    <div className={tooltipContainer}>
                        <span className={tooltipText}>The level has been completed.</span>
                        <button
                            className={completedClassName}
                            disabled
                        >Completed
                        </button>
                    </div>
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
        {/* // Reset the level code 
        <div className={tooltipContainer2}>
                    <span className={tooltipText}>Reset to inital code.</span>
                    <svg
                        className="cursor-pointer max-h-10 fill-gray-200"
                        onClick={this.props.handleResetToDefaulftCode.bind(this)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z" />
                    </svg>
                </div> */}
        {/* <div className={tooltipContainer}>
                        <span className={tooltipText}>Set the speed in which the code is executed.</span></div> */}
    }
}