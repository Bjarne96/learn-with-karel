import React from "react";
import type { ILogProps } from "../interfaces/interfaces";

export default class Log extends React.Component<ILogProps> {

    render() {
        return <div className="m-0 bg-code-grey p-8 min-w-[250px] rounded">
            <p className="text-white font-semibold border-b-2 pb-2 mb-1"> Command Log </p>
            {this.props.log.split('\n').map((str, i) => {
                if (str == "An error occurred.") {
                    return <p className="text-red-600 font-semibold" key={i}>{str}</p>
                }
                return <p className="text-sky-500 font-semibold" key={i}>{str}</p>
            })}
        </div>;
    }

}