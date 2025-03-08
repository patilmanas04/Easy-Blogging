import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]); // Global state for posts

  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile posts={posts} setPosts={setPosts} />} />
        <Route path="/edit-post/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
