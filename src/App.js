import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './Components/Home/Home.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='*' element={<Navigate to={`/home`} />} />
      </Routes>
    </div>
  );
}

export default App;
