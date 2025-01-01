import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/main.tsx";
import { Login } from "./pages/login.tsx";
import { CreatePost } from "./pages/create-post/createpost.tsx";
import "./App.css";
import { Navbar } from "./components/navbar.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
