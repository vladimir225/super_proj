import { CHANGE_VALUE } from "./constants"

export const changeValue = function (value: string) {
    return {type: CHANGE_VALUE,value }
}

