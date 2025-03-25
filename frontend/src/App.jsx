import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route,Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import {Toaster} from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import About from "./components/About"
import Contact from "./components/Contact";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="p-5">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/course" element={authUser ? <Courses/> : <Navigate to='/signup' />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={authUser? <Contact /> : <Navigate to='/signup' />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;