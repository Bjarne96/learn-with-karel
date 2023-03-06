import React from 'react';
import SelectLevel from './select_level';
//Styles
import styles from "../styles/learnwithkarel.module.css";
import type { ITopbar } from "./../interfaces/interfaces"

export default class Topbar extends React.Component<ITopbar> {
    constructor(props: ITopbar) {
        super(props);
    }
    render() {
        return <div><div className={styles.btnContainer}>
            {this.props.runningCode != true ?
                <button className={styles.btn} onClick={() => this.props.handleRunningCode()}>Run Code</button>
                :
                <button className={styles.btn} onClick={() => this.props.handleResetCode()}>Reset Karel</button>
            }
        </div>
            <SelectLevel
                handleLevelChange={this.props.handleLevelChange.bind(this)}
                currentLevel={this.props.currentLevel}
            />
        </div>;
    }
}