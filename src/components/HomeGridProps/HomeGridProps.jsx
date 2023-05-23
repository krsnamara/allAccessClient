import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LikeButton from '../LikeButton/LikeButton';
import './HomeGridProps.css'



function HomeGridProps(props) {
    const loaded = () => {
        const firstFour = props.evnts.slice(0, 4).map((evnt) => (
            <>
                <div key={evnt._id} className="evntsIndexWrapper">
                    <div className="evntcard">
                        <div className="evntcard-picture">
                            <div className="like-button">
                                <LikeButton />
                            </div>
                            <img src={evnt.image} className="evntcard-img-top" alt={evnt.name} />
                        </div>
                        <Link to={`/evnts/${evnt._id}`}>
                            <div className="evntcard-body">
                                <h5 className="evntcard-title">{evnt.eventType}</h5>
                                <div className="location">
                                    <FaMapMarkerAlt size={24} color="green" />
                                    <p className="location-text">{evnt.address}</p>
                                </div>
                                <div className="Rating">
                                    <p className="rating-text">Rating: 4.0</p>
                                    <p className="rating-amount">{"(487)"}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        ));

        const lastFour = props.evnts.slice(-4).map((evnt) => (
            <>
                <div key={evnt._id} className="evntsIndexWrapper">
                    <div className="evntcard">
                        <div className="evntcard-picture">
                            <div className="like-button">
                                <LikeButton />
                            </div>
                            <img src={evnt.image} className="evntcard-img-top" alt={evnt.name} />
                        </div>
                        <Link to={`/evnts/${evnt._id}`}>
                            <div className="evntcard-body">
                                <h5 className="evntcard-title">{evnt.eventType}</h5>
                                <div className="location">
                                    <FaMapMarkerAlt size={24} color="green" />
                                    <p className="location-text">{evnt.address}</p>
                                </div>
                                <div className="Rating">
                                    <p className="rating-text">Rating: 4.0</p>
                                    <p className="rating-amount">{"(487)"}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        ));

        return (
            <>
            <h1>
                Upcoming
            </h1>
                <div className="container">
                    <div className="card-container">
                            {firstFour}
                    </div>
                </div>  
                <div className="container">
                    <div className="card-container">
                        {lastFour}
                    </div>
                </div>       
            </>
        )
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

            