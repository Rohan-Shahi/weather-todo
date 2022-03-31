import { ADD_NOTE, DELETE_NOTE } from "../constant";

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

    case DELETE_NOTE:
      const notesList = [];
      state.notesList.forEach((note, i) => {
        if(action.payload !== i){
          notesList.push(note);
        }
      })
      return{
        ...state,
        notesList
      }  

    default:
      return state;
  }
};
