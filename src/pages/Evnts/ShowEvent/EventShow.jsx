import { useParams } from "react-router-dom";
import ExperienceCard from "../../../components/ExperienceCard/ExperienceCard";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import EventTypeIcon from "../../../assets/buttons-icons/show-event-type.svg";
import Wheelchair from "../../../assets/buttons-icons/amenities-wheelchair.svg";
import Elevators from "../../../assets/buttons-icons/amenities-elevator.svg";
import Handicap from "../../../assets/buttons-icons/amenities-parking.svg";
import Tactile from "../../../assets/buttons-icons/amenities-tac.svg";
import Ramps from "../../../assets/buttons-icons/amenities-ramp.svg";
import Dogs from "../../../assets/buttons-icons/amenities-dog.svg";
import LikeButton from "../../../components/LikeButton/LikeButton";
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

  const twoSuggestions = getRandomEvents(2).map((evnt) => (
    <ExperienceCard key={evnt._id} evnt={evnt} />
  ));

  if (evnts === null) {
    return <p>Loading...</p>; // Display a loading state
  }

  const handleEdit = (e) => {
    e.preventDefault();
    alert("This feature coming soon!");
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
          <hr
            style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}
          />
          <div className="showDescription">
            <h3>Description</h3>
            <p className="eventShowDescription">{evnt.description}</p>
            <div className="buttonFlex">
              <button className="showBtnWebsite" onClick={handleEdit}>
                <p className="showBtnP">Go to website</p>
              </button>
            </div>
          </div>
          <hr
            style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}
          />
          <div className="showVenueDetails">
            <div className="hostedAtWrapper">
              <div className="hostedStartingP">
                <h3>Hosted At:</h3>
                <p className="eventShowName">Wheelies Kitchen</p>
                <div className="showLocation-wrapper">
                  <img
                    src={LocationIcon}
                    alt="eventIcon"
                    className="eventIcon"
                  />
                  <p className="eventAddress">
                    {" "}
                    123 Main Street, {evnt.address}
                  </p>
                </div>
              </div>
              <div className="accessibilityScore">
                <p className="accessibilityP">Accessibility Score:</p>
                <p className="accessibilityNumber">4.0</p>
              </div>
              <div className="hostedStartingP">
                <h3>Amenities</h3>
                <div className="amenitiesIconWrap">
                  <div className="amenitiesInner">
                    <img src={Wheelchair} alt="wheelchair" />
                    <p>Wheelchair-friendly</p>
                  </div>
                  <div className="amenitiesInner">
                    <img src={Elevators} alt="elevators" />
                    <p>Elevators</p>
                  </div>
                  <div className="amenitiesInner">
                    <img src={Handicap} alt="handicap" />
                    <p>Handicap Parking</p>
                  </div>
                  <div className="amenitiesInner">
                    <img src={Tactile} alt="Tactile" />
                    <p>Tactile ADA Signs</p>
                  </div>
                  <div className="amenitiesInner">
                    <img src={Ramps} alt="ramps" />
                    <p>Ramps</p>
                  </div>
                  <div className="amenitiesInner">
                    <img src={Dogs} alt="dogs" />
                    <p>Dogs Allowed</p>
                  </div>
                </div>
              </div>
              <div className="reviewsWrapper">
                <div className="reviewsAmount">
                  <h3>Reviews</h3>
                  <p>(487)</p>
                </div>
                <div className="reviewsInner">
                  <p>"Great staff and accommodations" - Sarah M.</p>
                  <p>"Wheelies Kitchen is an absolute gem!" - David R.</p>
                </div>
                <div className="viewAll cursor-pointer">
                  <p className="viewAllP" onClick={handleEdit}>
                    View All
                  </p>
                </div>
                <div className="createReviewBtn">
                  <button className="showBtnWebsite" onClick={handleEdit}>
                    <p className="createReviewBtnP">Create a review</p>
                  </button>
                </div>
              </div>
              <hr
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  textAlign: "center",
                }}
              />
            </div>
            <div className="recommendWrapper">
              <h3>You Might Also Like:</h3>
              <div className="recContainer">
                <div className="recCard-container" onClick={handleScroll}>
                  {twoSuggestions}{" "}
                </div>
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
