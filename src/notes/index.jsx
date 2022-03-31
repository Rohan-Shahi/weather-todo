import React from "react";
import NoteBody from "../components/noteBody/NoteBody";
import NoteHeader from "../components/noteHeader/NoteHeader";
import './style.scss'

export default function Notes() {
  return (
    <>
     <NoteHeader/>
     <NoteBody/>
    </>
  );
}
