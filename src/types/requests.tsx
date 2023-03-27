//Needs code, done is optional
export const updateUserBody = {
    id: "642161d67a4a6ac23c5b0fe5",
    level: {
        stage: 1,
        code: "long line of code",
        done: true
    }
}
//Needs code and done
export const insertUserBody = {
    id: "642161d67a4a6ac23c5b0fe5",
    level: {
        stage: 1,
        code: "long line of code",
        done: true
    }
}
//Needs level and id
export const getUserBody = {
    id: "642161d67a4a6ac23c5b0fe5",
    level: 1
}

export default updateUserBody

// export interface level {
//     stage: number
//     code: string
//     done?: true
// }
// export interface updateUserBody {
//     id: string
//     level: level
// }
// export interface insertUserBody {
//     id: string
//     level: level
// }
// export interface getUserBody {
//     id: string
//     level: number
// }
// export default updateUserBody

// export const userInDB = {
//     "id": "642161d67a4a6ac23c5b0fe5",
//     "levels": [
//         {
//             stage: 1,
//             code: "long line of code",
//             done: true
//         },
//         {
//             stage: 2,
//             code: "longer line of code",
//             done: false
//         }
//     ]
// }