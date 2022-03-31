import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Weather from "./weather";
import Navbar from "./components/navbar/Navbar";
import Notes from "./notes";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`App ${darkMode? 'dark' : null}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/notes" element={<Notes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
