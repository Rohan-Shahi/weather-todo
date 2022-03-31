import React from "react";
import "./Note.scss"

export default function NoteCard({title,description,ind}) {
  return (
    <div className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div
        className="card-header"
        style={{ backgroundColor: "rgb(105,92,254)", color: "white" }}
      >
        {`note ${ind + 1} ` }
        <div style={{display:'inline-block'}}>
        <i className="bx bx-edit"></i>
        <i className="bx bx-trash" ></i>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {description}
        </p>
      </div>
    </div>
  );
}
