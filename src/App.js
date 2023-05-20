import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
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
      <Main user={user} />
    </div>
  )
};

export default App;
