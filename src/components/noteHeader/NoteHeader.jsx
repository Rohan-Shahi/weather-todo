import React, { useContext, useState } from "react";
import AddNote from "../modals/AddNote";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContext } from "../../context/darkModeContext";

export default function NoteHeader() {

    const {darkMode} = useContext(DarkModeContext);
    const [modal,setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const notify = () => toast.success("Note Added",{
      autoClose: 2000
    });
  return (
    <>
      <ToastContainer />
      <div className="note-header text-center">
        <h2 className={`pt-3 ${darkMode ? 'text-light' : null}`}>MANAGE YOUR NOTES</h2>

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
