import React from 'react'
import { type IExplanation } from '~/types/karel'

interface explanation {
    explanations: Array<IExplanation>
    activeTask: number
    setActiveTask(task: number): void
}

const Explanation: React.FC<explanation> = ({ explanations, activeTask, setActiveTask }) => {
    return <div className={"h-[100vh] p-8 text-white tracking-wide w-full max-w-lg"}>
        {/* <p className="break-word pb-4 font-semibold whitespace-pre-wrap text-white">Task Explanation</p> */}
        {explanations.map((explanationObject, i) => {
            if ((i + 1) == activeTask) return <div key={i} className={"m-auto h-12 cursor-default "} dangerouslySetInnerHTML={{ __html: explanationObject.title }}></div>
            else return <div className={"m-auto h-12 cursor-pointer"} onClick={() => setActiveTask(i + 1)} key={i} dangerouslySetInnerHTML={{ __html: explanationObject.title }}></div>
        })}
        {explanations.map((explanationObject, i) => {
            if ((i + 1) == activeTask) return <div key={i} >
                <div
                    dangerouslySetInnerHTML={{ __html: explanationObject.explanation }}
                    // 4 = 1 rem
                    // 3 x headlins + outer padding
                    className="overflow-y-auto max-h-[calc(100vh-13rem)]">
                </div>
            </div>
        })}
    </div>
}

export default Explanation