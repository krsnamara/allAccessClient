import ProfileImg from "../../../assets/images/profile-sophia.svg";
import { Link } from "react-router-dom";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import "./ProfilePage.css";

const ProfilePage = (evnts) => {
  const handleEdit = (e) => {
    e.preventDefault();
    alert("This feature coming soon!");
  };
  const handleMore = (e) => {
    e.preventDefault();
    alert("More details coming soon!");
  };

  return (
    <div className="profilePage">
      <div className="profileBody">
        <div className="picCont">
          <img src={ProfileImg} alt="profile" className="profileImg" />
          <button className="profileBtnEdit" onClick={handleEdit}>
            <p className="profileP">Edit</p>
          </button>
        </div>
        <div className="profileInfo">
          <h3>Sophia</h3>
          <div className="flex-ctr-ctr">
            <p>Oakland, CA</p>
            <p>&nbsp; | &nbsp;</p>
            <p>Joined May 2023</p>
          </div>
        </div>
        <hr style={{ width: "90%", maxWidth: "600px", textAlign: "center" }} />
        <div className="reviewsCont">
          <div className="statsBox">
            <p className="numbersP">1</p>
            <p className="statsP">Reviews</p>
          </div>
          <div className="statsBox">
            <p className="numbersP">0</p>
            <p className="statsP">Saved</p>
          </div>
        </div>
        <div className="reviewBtn">
          <button className="profileBtn" onClick={handleEdit}>
            <p className="profileP">Create a Review</p>
          </button>
        </div>
        <hr style={{ width: "90%", maxWidth: "600px", textAlign: "center" }} />
        <div className="createEventWrapper">
          <p className="eventsP">Events</p>
          <div className="eventsMapWrapper">
            {evnts.evnts.slice(-4).map((evnt) => (
              <div className="eventsMap">
                <button className="eventsBtnEdit" onClick={handleEdit}>
                  <p className="editBtnP">Edit</p>
                </button>
                <p className="eventNameP">{evnt.name}</p>
                <p className="eventVenueP">@ Avenger Studio</p>
                <div className="eventLocation-wrapper">
                  <img
                    src={LocationIcon}
                    alt="eventIcon"
                    className="eventIcon"
                  />
                  <p className="eventAddress">
                    {" "}
                    123 Main Street {evnt.address}
                  </p>
                </div>
                <div className="moreDetails">
                  <Link to={`/events/${evnt._id}`} style={{ color: "black" }}>
                    <p className="moreDetailsHref">More Details</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="eventBtn">
            <Link to="/events/new">
              <button className="profileBtn">
                <p className="profileP">Create Event</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
