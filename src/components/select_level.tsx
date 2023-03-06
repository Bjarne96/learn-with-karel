import React from "react";
import type { ISelectLevelProps, ILevel } from "../interfaces/interfaces";
import styles from "../styles/select_level.module.css";
//Data
import levels from "../data/levels"

export default class SelectLevel extends React.Component<ISelectLevelProps> {

    render() {
        return <div className={styles.btnContainer}>
            <span>Level:</span>
            <select
                value={this.props.currentLevel}
                className={styles.btn}
                onChange={(e) => this.props.handleLevelChange(Number(e.target.value))}
            >
                {levels.map((level: ILevel, i: number) => {
                    return <option value={i} key={i}>{level.name}</option>;
                })}
            </select>
        </div>
    }
}