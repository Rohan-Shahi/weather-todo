import React, { useContext, useState } from "react";
import { ColorContext } from "../context/customColor.js/colorContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Settings() {

  const { dispatch } = useContext(ColorContext);
  const [currentColor,setCurrentColor] = useState('#ffffff');

  const notify = () => toast.info("Note Color Changed",{
    autoClose: 2000
  });

  const handleChange = (e) => {
    setCurrentColor(e.target.value);
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_COLOR", payload: currentColor });
    notify();
  }



  return (
    <>
    <ToastContainer/>
      <div className="container pt-4">
        <h3 className="text-center">Settings</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="noteColor" className="mb-2">
          Change Your Note Color:
        </label>{" "}
        <br />
        <input type="color" value={currentColor} onChange={handleChange} /> <br />
        <button className="btn-sm btn-secondary mt-2">Confirm</button>
        </form>
      </div>
    </>
  );
}
