import { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  const [user, setUser] = useState(null);

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))

    return () => {
      // cleanup actions
      unsubscribe();
    }

  }, []);
  return (
    <>
      <NavBar user={user}/>
      <Main user={user}/>
      <Footer />
    </>
  )
};

export default App;
