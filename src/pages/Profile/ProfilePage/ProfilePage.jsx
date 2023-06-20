import ProfileImg from "../../../assets/images/profile-sophia.svg";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="profileBody">
        <div className="picCont">
          <img src={ProfileImg} alt="profile" className="profileImg" />
          <button className="profileBtnEdit">
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
            <p className="numbersP">0</p>
            <p className="statsP">Reviews</p>
          </div>
          <div className="statsBox">
            <p className="numbersP">0</p>
            <p className="statsP">Saved</p>
          </div>
        </div>
        <div className="reviewBtn">
          <button className="profileBtn">
            <p className="profileP">Create a Review</p>
          </button>
        </div>
        <hr style={{ width: "90%", maxWidth: "600px", textAlign: "center" }} />
        <div className="createEventWrapper">
          <p className="eventsP">Events</p>
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
