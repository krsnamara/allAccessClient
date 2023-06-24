import { Routes, Route } from "react-router-dom";
// Import custom hooks
import useEvnts from "../Utilities/evnts";
import useImages from "../Utilities/images";
import Home from "../pages/Home/Home";
import EventShow from "../pages/Evnts/ShowEvent/EventShow";
import NewEvnt from "../pages/Evnts/NewEvnt/NewEvnt";
import UpdateEvnt from "../pages/Evnts/UpdateEvnts/UpdateEvnt";
import CreateProfile from "../pages/Profile/CreateProfile/CreateProfile";
import ProfilePage from "../pages/Profile/ProfilePage/ProfilePage";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Main.css";

function Main(props) {
  // Invoke custom hooks
  const { evnts, deleteEvnts, createEvnts, updateEvnts } = useEvnts(props);

  // console.log(evnts);

  return (
    <main className="mainJs">
      <Routes>
        <Route exact path="/" element={<Home evnts={evnts} />} />
        <Route
          path="/profile"
          element={
            <ProfilePage
              evnts={evnts}
              deleteEvnts={deleteEvnts}
              user={props.user}
            />
          }
        />
        <Route path="/create" element={<CreateProfile user={props.user} />} />
        <Route
          path="/events/new"
          element={<NewEvnt createEvnts={createEvnts} />}
        />
        <Route
          path="/events/:id"
          element={
            <EventShow
              evnts={evnts}
              deleteEvnts={deleteEvnts}
              user={props.user}
            />
          }
        />
        <Route
          path="/update/:id"
          element={
            <UpdateEvnt
              evnts={evnts}
              updateEvnts={updateEvnts}
              user={props.user}
            />
          }
        />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </main>
  );
}

export default Main;
