import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom" 
// a hook that gives us access to the url params 
// to allow us to find from the url params 

// useLocation programaticly nagivates user based on some condition

function Review(props) {
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

    const person = props.reviews ? props.reviews.find(review => review._id === id) : null;

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
        props.updateReviews(id, editForm);
    };

    // console.log(navigate); // logs a function

    // use the id to find the specific person in the people array to show person
    const loaded = () => {
        // const person = props.people.find(person => person._id === id); // before refactor
        // console.log(person);
        return (
            <div className="review">
                <h1>{review.name}</h1>
                <h3>{review.title}</h3>
                { review.image &&
                    <img src={review.image} alt={review.name} />
                }
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
        );

    };
    const loading = () => {
        return <h2>Loading...</h2>;
    };

    const handleDelete = () => {
        props.deleteReviews(id);
        navigate('/');
    };

    // return props.reviews ? loaded() : loading();

    return (
        <section>
            {props.reviews ? loaded() : loading()}
            {/* <button onClick={handleDelete}>Delete This Reviews</button> */}
        </section>
    );
  }

export default Review;