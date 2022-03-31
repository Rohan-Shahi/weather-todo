import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../constant"

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

export const editNote = (updatedNote) => {
    return {
        type : EDIT_NOTE,
        payload : updatedNote
    }
}