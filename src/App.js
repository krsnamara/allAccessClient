import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Review from "./pages/Review";
import NewReview from "./pages/NewReview";
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
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reviews/:id" element={<Review />} />
        <Route path="/newreview" element={<NewReview user={user}/>} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
  )
};

export default App;
