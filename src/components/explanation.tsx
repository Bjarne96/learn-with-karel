import React from 'react'

interface explanation {
    explanation: string
}

const Explanation: React.FC<explanation> = ({ explanation }) => {
    return <div className={"p-8 text-white tracking-wide w-full max-w-lg"}>
        <p className="break-word pb-4 font-semibold whitespace-pre-wrap text-white">Task Explanation</p>
        {explanation != "" ?
            <div dangerouslySetInnerHTML={{ __html: explanation }}></div>
            :
            "No Explanation."
        }

    </div>
}

export default Explanation