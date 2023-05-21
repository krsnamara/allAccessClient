import { Link } from "react-router-dom";


function Reviews(props) {

    //loaded function
    const loaded = () => {
        return props.reviews.map(review => (
            <div key={review._id} className="review">
                <Link to={`/reviews/${review._id}`}>
                    <h1>{review.name}</h1>
                </Link>
                <img src={review.image} alt={review.name} />
                <h3>{review.title}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <section>
            { props.reviews ? loaded() : loading() }
        </section>
    )
  }

export default Reviews;