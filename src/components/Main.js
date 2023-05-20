import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { API_URLS } from "../urls";
import Home from "../pages/Home/Home";
import Reviews from "../pages/Reviews";
import Review from "../pages/Review";
import NewReview from "../pages/NewReview";
import CreateProfile from "../pages/CreateProfile/CreateProfile";

function Main(props) {

  const [reviews, setReviews] = useState(null);
  // const getReviewsRef = useRef(null);

  // const URL = "http://localhost:4000/reviews/";
  const URL = `${API_URLS.REVIEWS}`;

  const getReviews = async () => {

    const token = await props.user.getIdToken();

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + token

      },
    });
    const data = await response.json();
    setReviews(data);
  };

  console.log(`main.js line 32 ${JSON.stringify(reviews)}`)

  const createReviews = async (review) => {
    if (!props.user) return; // prevent function from executing code below if no auth
    const token = await props.user.getIdToken();

    // make post request to create reviews
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(review),
    });
    // update list of reviews
    getReviews();
  };

  const updateReviews = async (id, updatedReview) => {
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(updatedReview),
    });
    getReviews();
  };

  // const deleteReviews = async (id) => {
  //   const token = await props.user.getIdToken();
  //   await fetch(URL + id, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   getReviews();
  // };

  // useEffect(() => {
  //   getReviewsRef.current = getReviews;
  // });

  // useEffect(() => {
  //   if (props.user) {
  //     getReviewsRef.current(); // solves useEffect getReviews warning
  //   } else {
  //     setReviews(null);
  //   }
  // }, [props.user]);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateProfile user={props.user} />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/review/new" element={<NewReview reviews={reviews} createReviews={createReviews} />} />
        <Route path="/reviews/:id" element={<Review reviews={reviews} updateReviews={updateReviews} />} />
      </Routes>
    </main>
  );
}

export default Main;
