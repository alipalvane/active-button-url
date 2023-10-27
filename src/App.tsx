import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
