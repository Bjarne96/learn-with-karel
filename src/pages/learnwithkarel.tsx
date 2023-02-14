import { type NextPage } from "next";
import LearnWithKarelComp from "../components/learnwithkarel";
import levels from "../data/levels"
import { ILevel } from "../interfaces/Ilearnwithkarel";

const LearnWithKarel: NextPage = () => {
    var lvls: Array<ILevel> = levels;
    return (
        <>
            <LearnWithKarelComp levels={lvls} />
        </>
    );
};

export default LearnWithKarel;