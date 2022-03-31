import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";
import "./Note.scss"
import EditNote from "../modals/EditNote";
import { Link } from "react-router-dom";

export default function NoteCard({title,description,ind}) {

  const [editTitle,setEditTitle] = useState(null);
  const [editDesc,setEditDesc] = useState(null);
  const [editInd,setEditInd] = useState(null);
  const [modal,setModal] = useState(false);


  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  }

  const handleEdit = (title,description,ind) => {
    setEditTitle(title);
    setEditDesc(description);
    setEditInd(ind);
    setModal(true);
  }

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div
        className="card-header"
        style={{ backgroundColor: "rgb(105,92,254)", color: "white" }}
      >
        {`note ${ind + 1} ` }
        <div style={{display:'inline-block'}}>
        <i className="bx bx-edit" onClick={() => {handleEdit(title,description,ind)}}></i>
        <i className="bx bx-trash" onClick={()=>{ handleDelete(ind)}}></i>
        <Link to={`/note/${ind}`}> <i className="bx bx-show"></i></Link>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title.length > 17 ? title.slice(0,20) + '...' : title}</h5>
        <p className="card-text">
         {description.length > 89? description.slice(0,89) + '...' : description}
        </p>
      </div>
    </div>
    
    <EditNote modal={modal} toggle={toggle} editTitle={editTitle} editDesc={editDesc} editInd={editInd}/>
    </>
  );
}
