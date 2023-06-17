import { Routes, Route } from "react-router-dom";
import useEvnts from "../Utilities/evnts"; // Import the custom hook
import useReviews from "../Utilities/reviews";
import useImages from "../Utilities/images";
import Home from "../pages/Home/Home";
import ReviewsIndex from "../pages/Reviews/ReviewsIndex/ReviewsIndex";
import ReviewShow from "../pages/Reviews/ReviewShow/ReviewShow";
import NewReview from "../pages/Reviews/NewReview/NewReview";
import EvntsIndex from "../pages/Evnts/EvntsIndex/EvntsIndex";
import EvntsShow from "../pages/Evnts/EvntShow/EvntShow";
import ImagesIndex from "../pages/Images/ImagesIndex/ImagesIndex";
import ImagesShow from "../pages/Images/ImagesShow/ImageShow";
import NewEvnt from "../pages/Evnts/NewEvnt/NewEvnt";
import CreateProfile from "../pages/Profile/CreateProfile/CreateProfile";
import ProfilePage from "../pages/Profile/ProfilePage/ProfilePage";
import "./Main.css";

function Main(props) {
  const { evnts, createEvnts } = useEvnts(props); // Use the custom hook
  const { reviews, createReviews } = useReviews(props);
  const { images, deleteImages } = useImages(props);

  return (
    <main className="mainJs">
      <Routes>
        <Route exact path="/" element={<Home images={images} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreateProfile user={props.user} />} />
        <Route path="/reviews" element={<ReviewsIndex reviews={reviews} />} />
        <Route path="/events" element={<EvntsIndex evnts={evnts} />} />
        <Route path="/images" element={<ImagesIndex images={images} />} />
        <Route
          path="/events/new"
          element={<NewEvnt evnts={evnts} createEvnts={createEvnts} />}
        />
        <Route
          path="/review/new"
          element={
            <NewReview reviews={reviews} createReviews={createReviews} />
          }
        />
        <Route path="/reviews/:id" element={<ReviewShow reviews={reviews} />} />
        <Route path="/events/:id" element={<EvntsShow evnts={evnts} />} />
        <Route
          path="/images/:id"
          element={<ImagesShow images={images} deleteImages={deleteImages} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
