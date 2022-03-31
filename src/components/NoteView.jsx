import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";

export default function NoteView() {
  const {darkMode} = useContext(DarkModeContext);
  const { id } = useParams();

  const notesList = useSelector((state) => {
    return state.note.notesList;
  });
  const note = notesList.filter((note, ind) => {
    if (ind === Number(id)) {
      return note;
    }
  });

  return (
    <>
      <h3 className={`text-center mb-5 pt-4 ${darkMode? 'text-light': null}`}>Note View</h3>
      <div className="container">
        <div className="card">
          <div className="card-header">{`Note ${Number(id) + 1}`}</div>
          <div className="card-body">
            <h5>Note Title :</h5>
            <p className="card-title"> {note[0].title}</p>
            <h5 className="mt-3">Note Description: </h5>
            <p className="card-text ">{note[0].description}</p>
          </div>
          <div className="card-footer text-muted">
            Last Modified:{" "}
            {new Date(note[0].lastModified).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})}
          </div>
        </div>
      </div>
    </>
  );
}
