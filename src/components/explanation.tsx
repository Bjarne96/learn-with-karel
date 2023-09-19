import React from 'react'
import { type taskData, type IExplanation, type Commands } from '~/types/karel'
import CommandComp from './commands'

interface explanation {
    explanations: Array<IExplanation>
    tasks: Array<taskData>
    activeTask: number
    setActiveTask(task: number): void
    restrictedTasks: boolean
    commands: Commands
}

const Explanation: React.FC<explanation> = ({ tasks, explanations, activeTask, setActiveTask, restrictedTasks, commands }) => {

    function returnTasks(task: taskData, index: number, disabled: boolean) {
        let classname = "m-auto flex flex-row w-full rounded-md mb-1  border-l-4 "
        const titleClassname = "p-1 whitespace-pre-wrap text-white ml-3"
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
                    <p className={titleClassname}>{explanations[index].title}</p>
                    :
                    <p className={titleClassname}>All Tasks</p>
            }
            <div className={"w-6 ml-auto mt-2 mr-3"} title={"This task has been completed."}>{checkmark}</div>
        </div>
    }
    return <div className={"h-[100vh] p-8 text-white tracking-wide w-full max-w-lg"}>
        {tasks.map((task, index) => {
            let disabled = false
            if (index > 0 && tasks[index - 1].done == "") disabled = restrictedTasks
            return returnTasks(task, index, disabled)
        })}
        {explanations.map((explanationObject, i) => {
            let notice = ""
            if ((!restrictedTasks) && i + 1 != tasks.length) notice = "(Diese Aufgabe ist Optional. Immer nur die letzte Aufgabe in jedem Block ist eine Pflichtaufgabe.)"
            if ((!restrictedTasks) && i + 1 == tasks.length) notice = "(Diese Aufgabe ist eine Pflichtaufgabe. Löse sie, um zum nächsten Block weiterzukommen.)"
            if ((i + 1) == activeTask) return <div key={i} className="overflow-y-auto mt-8 max-h-[calc(100vh-17rem)]">
                <p className="py-2" >{notice}&nbsp;</p>
                <div dangerouslySetInnerHTML={{ __html: explanationObject.explanation }}></div>
                <CommandComp commands={commands} />
            </div>
        })}
    </div>
}

export default Explanation