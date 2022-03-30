import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Weather from "./weather";
import Navbar from "./components/navbar/Navbar";
import Todo from "./todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
