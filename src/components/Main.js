import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Show from "../pages/Show";
import NewReview from "../pages/NewReview";

function Main(props) {
    
    const [ reviews, setReviews ] = useState(null);
    const getReviewsRef = useRef(null); // {current: null }

    // const URL = "http://localhost:4000/reviews/";
    const URL = `${API_URLS.REVIEWS}`;
    
    const getReviews = async () => {

        const token = await props.user.getIdToken();
            console.log(token);

        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + token
            }
        });
        const data = await response.json();
        setReviews(data);
    }

    const createReviews = async (review) => {
        if(!props.user) return; // prevent function from executing code below if no auth
        const token = await props.user.getIdToken();

        // make post request to create reviews
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
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
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(updatedReview),
        });
        getReviews();
    };

    const deleteReviews = async (id) => {
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        getReviews();
    };

    useEffect(() => {
        getReviewsRef.current = getReviews;
    });

    useEffect (() => {
        if(props.user) {
            getReviewsRef.current(); // solves useEffect getReviews warning
        } else {
            setReviews(null);
        }
    }, [props.user]);

    return (
        <main>
        <Routes>
          <Route path="/" element={
            <NewReview reviews={reviews}
                    createReviews={createReviews}
            />} />
            <Route path="/reviews/:id" element={
                <Show 
                    reviews={reviews} 
                    deleteReviews={deleteReviews}
                    updateReviews={updateReviews}
                />} 
            />
        </Routes>
      </main>
    );
}

export default Main;