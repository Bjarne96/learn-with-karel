import React from 'react'
import { type taskData, type IExplanation } from '~/types/karel'

interface explanation {
    explanations: Array<IExplanation>
    tasks: Array<taskData>
    activeTask: number
    setActiveTask(task: number): void
    restrictedTasks: boolean
}

const Explanation: React.FC<explanation> = ({ tasks, explanations, activeTask, setActiveTask, restrictedTasks }) => {

    function returnTasks(task: taskData, index: number, disabled: boolean) {
        let classname = "m-auto h-12 flex flex-row w-full rounded-md mb-3  border-l-4 "
        const titleClassname = "p-0 font-semibold whitespace-pre-wrap text-white ml-3 mt-2"
        let checkmark = <svg
            className={"ml-auto fill-white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        if (task.done == "") checkmark = <></>
        if ((index + 1) == activeTask) {
            classname += " cursor-default "
            if (!disabled) classname += " bg-tasks-lightblue border-white "
        } else {
            if (disabled) classname += " bg-code-grey cursor-default  border-code-grey"
            else if (index != Number.MAX_SAFE_INTEGER) classname += " bg-tasks-blue cursor-pointer border-tasks-blue"
        }
        if (index == Number.MAX_SAFE_INTEGER) classname += " cursor-default bg-tasks-blue border-tasks-blue"

        return <div key={index} className={classname} onClick={() => { if (index != Number.MAX_SAFE_INTEGER && !disabled) setActiveTask(index + 1) }}>
            {
                index != Number.MAX_SAFE_INTEGER ?
                    <h1 className={titleClassname}>{explanations[index].title}</h1>
                    :
                    <h1 className={titleClassname}>All Tasks</h1>
            }
            <div className={"w-6 h-8 ml-auto mt-2 mr-3"} title={"This task has been completed."}>{checkmark}</div>
        </div>
    }
    // const allTasksTask: taskData = {
    //     done: tasks[tasks.length - 1].done,
    //     start: "",
    //     task: 0
    // }
    return <div className={"h-[100vh] p-8 text-white tracking-wide w-full max-w-lg"}>
        {/* {returnTasks(allTasksTask, Number.MAX_SAFE_INTEGER, false)} */}
        {tasks.map((task, index) => {
            let disabled = false
            if (index > 0 && tasks[index - 1].done == "") disabled = restrictedTasks
            return returnTasks(task, index, disabled)
        })}
        {explanations.map((explanationObject, i) => {
            let notice = ""
            if ((!restrictedTasks) && i + 1 != tasks.length) notice = "*You can always skip tasks, by doing a task higher up."
            if ((i + 1) == activeTask) return <div key={i}><p className="py-2" >{notice}&nbsp;</p><div
                dangerouslySetInnerHTML={{ __html: explanationObject.explanation }}
                // 4 = 1 rem so calculate = 3 x headlins + outer padding = 18 rem
                className="overflow-y-auto max-h-[calc(100vh-18rem)]">
            </div></div>
        })}
    </div>
}

export default Explanation