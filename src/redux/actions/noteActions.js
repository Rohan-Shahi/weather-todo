import { ADD_NOTE } from "../constant"

export const createNote = (notes) => {
    return {
        type: ADD_NOTE,
        payload: notes
    }
}