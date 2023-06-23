import React, { useEffect, useState } from 'react'

export interface ISaveCodeProps {
    savedCode: number
}

const Savecode: React.FC<ISaveCodeProps> = ({ savedCode }) => {

    const [count, setCount] = useState(savedCode)
    const [showTooltip, setTooltipVisibility] = useState("opacity-0")

    useEffect(() => {
        if (count != savedCode) {
            setCount(savedCode)
            setTooltipVisibility("opacity-100")
            setTimeout(() => { setTooltipVisibility("opacity-0") }, 1500);
        }
    }, [savedCode, count])

    return <span className={"px-4 pb-[3px] border rounded tracking-wider text-xs top-3 right-4 absolute z-10 bg-code-grey text-white duration-500 " + showTooltip}>&nbsp;Code saved.</span>
}

export default Savecode