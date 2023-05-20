import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom" 
// a hook that gives us access to the url params 
// to allow us to find from the url params 

// useLocation programaticly nagivates user based on some condition

function Reviews(props) {
    // we need to access the id from the url params
    // const params = useParams();
    // console.log(params);
    // console.log(props);
    const { id } = useParams();
    const navigate = useNavigate();

    const formFields = {
        name: "",
        title: "",
        image: "",
    };
    
    const review = props.reviews 
    
    console.log(`reviews line 22 ${JSON.stringify(review)}`)


    const [editForm, setEditForm] = useState(formFields);

    useEffect(() => {
        if(review) {
            setEditForm(review)
        } 
    }, [review]);

    const handleChange = (event) => {
        setEditForm({
            ...editForm, 
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateReviews(editForm);
    };

    // console.log(navigate); // logs a function

    // use the id to find the specific review in the reviews array to show review
    const loaded = () => {
          return props.reviews.map(review => (
            <div className="review">
              <h1>{review.name}</h1>
              <h3>{review.title}</h3>
              {review.image && <img src={review.image} alt={review.name} />}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="image"
                  value={editForm.image}
                  onChange={handleChange}
                />
                <input type="submit" value="Update Review" />
              </form>
              <button onClick={handleDelete}>Delete This Review</button>
            </div>
          ))
      };

    const loading = () => {
      if (!review) {
      return <div>No review found with the provided ID</div>;
    }
        return <h2>Loading...</h2>;
    };

    const handleDelete = () => {
        props.deleteReviews(id);
        navigate('/');
    };

    return (
        <section>
            {props.reviews ? loaded() : loading()}
        </section>
    );
  }

export default Reviews;