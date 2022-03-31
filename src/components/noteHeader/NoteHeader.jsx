import React, { useState } from "react";
import AddNote from "../modals/AddNote";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NoteHeader() {

    const [modal,setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const notify = () => toast.success("Note Added");
  return (
    <>
      <ToastContainer autoClose={3000}/>
      <div className="note-header text-center">
        <h2 className="pt-3">MANAGE YOUR NOTES</h2>

        <button
          className="btn btn-primary"
          style={{ backgroundColor: "rgb(105,92,254)", border: 'none' }}
          onClick={toggle}
        >
          Add Note
        </button>

        <AddNote modal={modal} toggle={toggle} notify={notify}/>
      </div>
    </>
  );
}
