import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));

    return () => {
      // cleanup actions
      unsubscribe();
    };
  }, []);
  return (
    <>
      <NavBar user={user} />
      <Main user={user} />
      <Footer />
    </>
  );
}

export default App;
