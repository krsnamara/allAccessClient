import { useState } from "react";
import { Link } from "react-router-dom";

function NewReview(props) {
    const formFields = {
        name: "",
        image: "",
        title: ""
    };

    const [newForm, setNewForm ] = useState(formFields);

    // TODO: finish this after form build. Add event logic
    const handleChange = (event) => {
        // When the set state function is called
        // new state is passed in as argument
        // the new state is then used to replace old state
        // in summary: old state will always be overridden with new state
        // event.preventDefault();
        setNewForm({
            ...newForm, 
            [event.target.name]: event.target.value 
        });
    };

    // TODO: finish this after form. 
    // Lifting up state function/ lift form state up the 
    // component hiearchy to Main component's createPeople function
    const handleSubmit = (e) => {
        e.preventDefault(); // this prevents a page refresh
        props.createReviews(newForm);
        setNewForm(formFields); // reset form to empty fields
    };

    //loaded function
    const loaded = () => {
        return props.reviews.map(review => (
            <div key={review._id} className="review">
                <Link to={`/reviews/${review._id}`}>
                    <h1>{review.name}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleChange} 
                        value={newForm.name}
                        placeholder="Whats the Name?" 
                        />
                    <input 
                        type="text" 
                        name="image" 
                        onChange={handleChange} 
                        value={newForm.image}
                        placeholder="Enter URL of Image" 
                        />
                    <input 
                        type="text" 
                        name="title" 
                        onChange={handleChange} 
                        value={newForm.title}
                        placeholder="What is the title"  
                        />
                    <input type="submit" value="Submit Review" />
                </form>
                { props.reviews ? loaded() : loading() }
            </section>
        </>
    )
  }

export default NewReview;