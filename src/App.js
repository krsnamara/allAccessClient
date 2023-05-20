import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";



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
    <div className="App">
      <NavBar user={user} />
      <HomePage />
      <Footer />
    </div>
  )
};

export default App;
