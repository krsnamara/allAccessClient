import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './EvntsIndex.css';

function EvntsIndex(props) {
  // loaded function
  const loaded = () => {
    return props.evnts.map((evnt) => (
        <div key={evnt._id} className="evntsIndexWrapper">
            <Link to={`/evnts/${evnt._id}`}>
            <div className="evntcard">
                            <div className="evntcard-picture">
                                <div className="like-button">
                                <LikeButton />
                                </div>
                                <img src={evnt.image} className="evntcard-img-top" alt={evnt.name} />
                            </div>
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
                        </div>
            </Link>
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section className="flex-container">{props.evnts ? loaded() : loading()}</section>;
}

export default EvntsIndex;
