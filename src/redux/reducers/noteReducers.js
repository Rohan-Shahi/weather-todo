import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../constant";

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

    case EDIT_NOTE:
      const updatedList = [];  
      state.notesList.forEach((note, i) => {
        if(action.payload.editInd !== i){
          updatedList.push(note);
        }else{
          const title = action.payload.title;
          const description = action.payload.description;
          const obj = {title,description};
          updatedList.push(obj)
        }
      })
      return{
        ...state,
        notesList : updatedList
      }
    default:
      return state;
  }
};
