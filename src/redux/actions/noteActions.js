import { ADD_NOTE, DELETE_NOTE } from "../constant"

export const createNote = (notes) => {
    return {
        type: ADD_NOTE,
        payload: notes
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}