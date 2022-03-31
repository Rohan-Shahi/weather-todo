import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NoteCard from "./NoteCard";

export default function NoteBody() {
  const notesList = useSelector((state) => {
    return state.note.notesList;
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  return (
    <div className="container mt-5">
      <div className="row">
        {notesList.length === 0 ? (
          <h3 className="text-center">Click add note to add some note...</h3>
        ) : (
          notesList.map((note, ind) => (
            <div className="col-md-3" key={ind}>
              <NoteCard
                title={note.title}
                description={note.description}
                ind={ind}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
