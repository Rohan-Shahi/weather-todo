import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";
import "./Note.scss";
import EditNote from "../modals/EditNote";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NoteCard({ title, description, ind, lastModified }) {
  const [editTitle, setEditTitle] = useState(null);
  const [editDesc, setEditDesc] = useState(null);
  const [editInd, setEditInd] = useState(null);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    notifyDelete();
  };

  const handleEdit = (title, description, ind) => {
    setEditTitle(title);
    setEditDesc(description);
    setEditInd(ind);
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const notify = () => toast.success("Note Updated");
  const notifyDelete = ()=> toast.error("Note Deleted!");

  return (
    <>
    <ToastContainer autoClose={3000}/>
      <div
        className="card text-dark bg-light mb-3"
        style={{ maxWidth: "18rem", minHeight: "18rem" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(105,92,254)", color: "white" }}
        >
          {`note ${ind + 1} `}
          <div style={{ display: "inline-block" }}>
            <i
              className="bx bx-edit"
              onClick={() => {
                handleEdit(title, description, ind);
              }}
            ></i>
            <i
              className="bx bx-trash"
              onClick={() => {
                handleDelete(ind);
              }}
            ></i>
            <Link to={`/note/${ind}`}>
              {" "}
              <i className="bx bx-show"></i>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 17 ? title.slice(0, 20) + "..." : title}
          </h5>
          <p className="card-text">
            {description.length > 89
              ? description.slice(0, 89) + "..."
              : description}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            Last Modified:{" "}
            {new Date(lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
      </div>

      <EditNote
        modal={modal}
        toggle={toggle}
        editTitle={editTitle}
        editDesc={editDesc}
        editInd={editInd}
        notify={notify}
      />
    </>
  );
}
