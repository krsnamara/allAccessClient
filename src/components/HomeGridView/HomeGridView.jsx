import './HomeGridView.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import LikeButton from '../../components/LikeButton/LikeButton';
import CookingClass from '../../assets/Cooking-Class.png';
import DanceClass from '../../assets/Dance-Class.png';
import DJDanceParty from '../../assets/DJ-Dance-Party.png';
import GhostTours from '../../assets/Ghost-Tours.png';
import GroupHiking from '../../assets/Group-Hiking.png';
import HistoricTour from '../../assets/Historic-Tour.png';
import WineTasting from '../../assets/Wine-Tasting.png';
import ArcadePlayDay from '../../assets/Arcade-Play-Day.png';


export default function HomeGridView() {

    return (
        <>
            <h1>
                Upcoming
            </h1>


            <div className="container">
                <div className="card-container">

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={CookingClass} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Cooking Class</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.0</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={ArcadePlayDay} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Arcade Play Day</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={HistoricTour} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Historic Tour</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={WineTasting} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Wine Tasting</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <h1>
                Highest Ratings
            </h1>

            <div className="container">
                <div className="card-container">
                    

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={DanceClass} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dance Class</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={GhostTours} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Ghost Tours</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={DJDanceParty} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DJ Dance Party</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-picture">
                            <div className="like-button">
                            <LikeButton />
                            </div>
                            <img src={GroupHiking} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Group Hiking</h5>
                            <div className="location">
                                <FaMapMarkerAlt size={24} color="green" />
                                <p className="location-text">Oakland, CA</p>
                            </div>
                            <div className="Rating">
                                <p className="rating-text">Rating: 4.5</p>
                                <p className="rating-amount">{"(487)"}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}