import { useParams } from "react-router-dom";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import EventTypeIcon from "../../../assets/buttons-icons/show-event-type.svg";
import LikeButton from "../../../components/LikeButton/LikeButton";
import "./EventShow.css";

function Evnt(props) {
  const { id } = useParams();

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
            <p className="eventDescriptionP">Description</p>
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
          <div className="hostedAtWrapper">
            <div className="hostedStartingP">
              <p className="eventDescriptionP">Hosted At:</p>
              <p className="eventShowName">Wheelies Kitchen</p>
              <div className="showLocation-wrapper">
                <img src={LocationIcon} alt="eventIcon" className="eventIcon" />
                <p className="eventAddress"> 123 Main Street, {evnt.address}</p>
              </div>
            </div>
            <div className="accessibilityScore">
              <p className="accessibilityP">Accessibility Score:</p>
              <p className="accessibilityNumber">4.0</p>
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
