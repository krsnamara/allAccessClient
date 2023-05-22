import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LikeButton from '../LikeButton/LikeButton';
import './HomeGridProps.css'



function HomeGridProps(props) {

    const loaded = () => {
        return props.evnts.map(evnt => (
                <div key={evnt._id} className="card">
                <div className="card-picture">
                    <div className="like-button">
                    <LikeButton />
                    </div>
                    <img src={evnt.image} alt={evnt.name} className="card-img-top" />
                </div>
                <div className="card-body">
                    <Link to={'/'}>
                    <h5 className="card-title">{evnt.name}</h5>
                    </Link>
                    <div className="location">
                        <FaMapMarkerAlt size={24} color="green" />
                        <p className="location-text">{evnt.address}</p>
                    </div>
                    <div className="Rating">
                        <p className="rating-text">Rating: 4.0</p>
                        <p className="rating-amount">{"(487)"}</p>
                    </div>
                </div>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <section>
            { props.evnts ? loaded() : loading() }
        </section>
    )
}

export default HomeGridProps;