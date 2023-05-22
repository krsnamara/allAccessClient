import { Routes, Route } from "react-router-dom";
import useEvnts from '../Utilities/evnts'; // Import the custom hook
import useReviews from '../Utilities/reviews'; 
import Home from "../pages/Home/Home";
import HomeGridProps from "./HomeGridProps/HomeGridProps";
import ReviewsIndex from "../pages/Reviews/ReviewsIndex/ReviewsIndex";
import ReviewShow from "../pages/Reviews/ReviewShow/ReviewShow";
import NewReview from "../pages/Reviews/NewReview/NewReview";
import EvntsIndex from '../pages/Evnts/EvntsIndex/EvntsIndex'
import EvntsShow from '../pages/Evnts/EvntShow/EvntShow'
import NewEvnt from '../pages/Evnts/NewEvnt/NewEvnt'
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

function Main(props) {

  const { evnts, createEvnts, updateEvnts, deleteEvnts } = useEvnts(props); // Use the custom hook
  const { reviews, createReviews, updateReviews, deleteReviews } = useReviews(props); // Use the custom hook

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/proto" element={<HomeGridProps evnts={evnts} />} />
        <Route path="/create" element={<CreateProfile user={props.user} />} />
        <Route path="/reviews" element={<ReviewsIndex reviews={reviews} />} />
        <Route path="/review/new" element={<NewReview reviews={reviews} createReviews={createReviews} />} />
        <Route path="/reviews/:id" element={<ReviewShow deleteReviews={deleteReviews} reviews={reviews} updateReviews={updateReviews} />} />
        <Route path="/evnts" element={<EvntsIndex evnts={evnts} />} />
        <Route path="/evnts/new" element={<NewEvnt evnts={evnts} createEvnts={createEvnts} />} />
        <Route path="/evnts/:id" element={<EvntsShow deleteEvnts={deleteEvnts} evnts={evnts} updateEvnts={updateEvnts} />} />
      </Routes>
    </main>
  );
}



export default Main;
