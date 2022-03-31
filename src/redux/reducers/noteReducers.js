import { ADD_NOTE } from "../constant";

const initialState = {
  notesList: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
          ...state,
          notesList : [...state.notesList, action.payload],
      };

    default:
      return state;
  }
};
