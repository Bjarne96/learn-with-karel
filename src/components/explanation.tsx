import React from 'react'

interface explanation {
    explanation: string
}

const Explanation: React.FC<explanation> = ({ explanation }) => {
    return <div className={"p-8 text-white tracking-wide w-full max-w-lg"}>{explanation != "" ? explanation : "No Explanation."}</div>
}

export default Explanation