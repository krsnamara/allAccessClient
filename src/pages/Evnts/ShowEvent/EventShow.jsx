import { useParams } from "react-router-dom";
import SuggestionCard from "../../../components/SuggestionCard/SuggestionCard";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import EventTypeIcon from "../../../assets/buttons-icons/show-event-type.svg";
import Wheelchair from "../../../assets/buttons-icons/amenities-wheelchair.svg";
import Elevators from "../../../assets/buttons-icons/amenities-elevator.svg";
import Handicap from "../../../assets/buttons-icons/amenities-parking.svg";
import Tactile from "../../../assets/buttons-icons/amenities-tac.svg";
import Ramps from "../../../assets/buttons-icons/amenities-ramp.svg";
import Dogs from "../../../assets/buttons-icons/amenities-dog.svg";
import LikeButton from "../../../components/LikeButton/LikeButton";
import { rating, reviewsNumber } from "../../../Utilities/randomUtils";
import { futureFeature } from "../../../Utilities/eventListener/futureFeature";
import { useScrollToTop } from "../../../Utilities/scrollToTop";

import "./EventShow.css";

function Evnt(props) {
  useScrollToTop();

  const handleScroll = () => {
    const scrollToTop = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 50); // Adjust the scroll speed by changing the value (e.g., 50)
        window.requestAnimationFrame(scrollToTop);
      }
    };

    window.requestAnimationFrame(scrollToTop);
  };

  const { id } = useParams();
  const evnts = props.evnts;

  const getRandomEvents = (count) => {
    const shuffled = props.evnts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const suggestion = getRandomEvents(2).map((evnt) => (
    <SuggestionCard key={evnt._id} evnt={evnt} />
  ));

  if (evnts === null) {
    return <p>Loading...</p>; // Display a loading state
  }

  const handleClick = (e) => {
    e.preventDefault();
    futureFeature(e);
  };

  // console.log(props);

  const evnt = props.evnts ? props.evnts.find((evnt) => evnt._id === id) : null;

  const loaded = () => {
    if (!evnt) {
      // Event not found, handle the error condition
      return <h2>Event not found</h2>;
    }
    return (
      <div className="eventShowWrapper">
        {/* EVENT SECTION */}
        <div className="heartLikeShow">
          <div className="imageContainer">
            <img
              src={evnt.imageUrl}
              alt={evnt.imageUrl}
              className="eventImage"
            />
            <div className="showLikeButton">
              <LikeButton />
            </div>
          </div>
        </div>
        <section className="eventInfo">
          <p className="eventShowName">{evnt.name}</p>
          <div className="locationTypeWrapper">
            <div className="locationWrapper">
              <img
                src={LocationIcon}
                alt="locationIcon"
                className="expLocationIcon"
              />
              <p className="innerP">{evnt.address}</p>
            </div>
            <div className="typeWrapper">
              <img
                src={EventTypeIcon}
                alt="eventTypeIcon"
                className="eventTypeIcon"
              />
              <p className="innerP">{evnt.eventType}</p>
            </div>
          </div>
          <hr className="hrStyle" />
          <div className="showDescription">
            <h3>Description</h3>
            <p className="eventShowDescription">{evnt.description}</p>
            <div className="buttonFlex">
              <button className="showBtnWebsite" onClick={handleClick}>
                <p className="showBtnP">Go to website</p>
              </button>
            </div>
          </div>
          <hr className="hrStyle" />
          {/* HOSTED AT SECTION */}
          <div className="hostedAtWrapper">
            <div className="hostedStartingP">
              <h3>Hosted At:</h3>
              <h1 className="eventVenueName">Wheelies Kitchen</h1>
              <div className="showLocation-wrapper">
                <img src={LocationIcon} alt="eventIcon" className="eventIcon" />
                <p className="eventAddress">
                  123 Main Street, {evnt.address} 12345
                </p>
              </div>
            </div>
            <div className="hostedCentered">
              <div className="accessibilityScore">
                <p className="accessibilityP">Accessibility Score:</p>
                <p className="accessibilityNumber">{rating}</p>
              </div>
            </div>
            <div className="hostedStartingP">
              <h3>Amenities</h3>
              <div className="amenitiesIconWrap">
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Wheelchair} alt="wheelchair" />
                  </div>
                  <p>Wheelchair-friendly</p>
                </div>
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Elevators} alt="elevators" />
                  </div>
                  <p>Elevators</p>
                </div>
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Handicap} alt="handicap" />
                  </div>
                  <p>Handicap Parking</p>
                </div>
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Tactile} alt="Tactile" />
                  </div>
                  <p>Tactile ADA Signs</p>
                </div>
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Ramps} alt="ramps" />
                  </div>
                  <p>Ramps</p>
                </div>
                <div className="amenitiesInner">
                  <div className="amenIconSizing">
                    <img src={Dogs} alt="dogs" />
                  </div>
                  <p>Dogs Allowed</p>
                </div>
              </div>
            </div>
            <div className="reviewsWrapper">
              <div className="reviewsAmount">
                <h3>Reviews</h3>
                <p className="reviewsNumber">({reviewsNumber})</p>
              </div>
              <div className="reviewsInner">
                <p>"Great staff and accommodations" - Sarah M.</p>
                <p>"Wheelies Kitchen is an absolute gem!" - David R.</p>
              </div>
              <div className="viewAll cursor-pointer">
                <p className="viewAllP" onClick={handleClick}>
                  View All
                </p>
              </div>
              <div className="createReviewBtn">
                <button className="showBtnWebsite" onClick={handleClick}>
                  <p className="createReviewBtnP">Create a review</p>
                </button>
              </div>
            </div>
          </div>
          <hr className="hrStyle" />
          {/* SUGGESTIONS SECTION */}
          <div className="recommendWrapper">
            <h3>You Might Also Like:</h3>
            <div className="recCardMap">
              <div className="recSuggestion" onClick={handleScroll}>
                <SuggestionCard
                  key={suggestion[0].props.evnt._id}
                  evnt={suggestion[0].props.evnt}
                />
              </div>
              <div className="recSuggestion" onClick={handleScroll}>
                <SuggestionCard
                  key={suggestion[1].props.evnt._id}
                  evnt={suggestion[1].props.evnt}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.evnts ? loaded() : loading()}</section>;
}

export default Evnt;
