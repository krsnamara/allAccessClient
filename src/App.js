import { useState, useEffect } from "react";
import Header from "./components/Header";
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
      <Header user={user} />
      <Main user={user} />
    </div>
  )
};

export default App;
