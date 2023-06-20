import { Routes, Route } from "react-router-dom";
// Import custom hooks
import useEvnts from "../Utilities/evnts";
import useImages from "../Utilities/images";
import Home from "../pages/Home/Home";
import ImagesIndex from "../pages/Images/ImagesIndex/ImagesIndex";
import ImagesShow from "../pages/Images/ImagesShow/ImageShow";
import NewEvnt from "../pages/Evnts/NewEvnt/NewEvnt";
import CreateProfile from "../pages/Profile/CreateProfile/CreateProfile";
import ProfilePage from "../pages/Profile/ProfilePage/ProfilePage";
import "./Main.css";

function Main(props) {
  // Invoke custom hooks
  const { evnts, createEvnts } = useEvnts(props);
  const { images, deleteImages } = useImages(props);

  return (
    <main className="mainJs">
      <Routes>
        <Route exact path="/" element={<Home images={images} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreateProfile user={props.user} />} />
        <Route path="/images" element={<ImagesIndex images={images} />} />
        <Route
          path="/events/new"
          element={<NewEvnt evnts={evnts} createEvnts={createEvnts} />}
        />
        <Route
          path="/images/:id"
          element={<ImagesShow images={images} deleteImages={deleteImages} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
