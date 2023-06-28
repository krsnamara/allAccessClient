import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { yearJoined } from "../../../Utilities/randomUtils";
import {
  formatDateTime,
  formatedUpdatedDateTime,
} from "../../../Utilities/formatDateTime";
import { formatGoogleDate } from "../../../Utilities/formatGoogleDate";
import { randomCityState } from "../../../Utilities/randomCities";
import { futureFeature } from "../../../Utilities/eventListener/futureFeature";
import ProfileImg from "../../../assets/images/profile-sophia.svg";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import { useScrollToTop } from "../../../Utilities/scrollToTop";
import Spinner from "../../../components/Spinner/Spinner";
import "./ProfilePage.css";

const ProfilePage = ({ evnts, user, deleteEvnts }) => {
  useScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(evnts);

  const userCreationTime =
    user && user.metadata ? user.metadata.creationTime : null;
  const formattedTime = formatGoogleDate(userCreationTime);

  const [sortedEvnts, setSortedEvnts] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    if (sortBy === "name") {
      const sortedByName = [...evnts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortedEvnts(sortedByName);
    } else if (sortBy === "date") {
      const sortedByDate = [...evnts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setSortedEvnts(sortedByDate);
    }
  }, [evnts, sortBy]);

  if (evnts === null || user === null) {
    return <Spinner />; // Display a loading state
  }

  const handleDelete = (evntId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      deleteEvnts(evntId)
        .then(() => {
          navigate("/profile");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting event:", error);
        });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    futureFeature(e);
  };

  return (
    <div className="profilePage">
      <div className="profileBody">
        <div className="picCont">
          {user ? (
            <div className="profileImgContainer">
              <img src={user.photoURL} alt="profile" className="profileImg" />
            </div>
          ) : (
            <img src={ProfileImg} alt="profile" className="profileImg" />
          )}
          <button className="profileBtnEdit" onClick={handleEdit}>
            <p className="profileP">Edit</p>
          </button>
        </div>
        <div className="profileInfo">
          <h1>{user.displayName}</h1>
          <div className="userInfo">
            <p>{randomCityState}</p>
            <p className="verticalLine">&nbsp; | &nbsp;</p>
            {user ? (
              <p>
                Joined {formattedTime.gMonth} {formattedTime.gDay},{" "}
                {formattedTime.gYear} at {formattedTime.gTime}
              </p>
            ) : (
              <p>Joined May {yearJoined}</p>
            )}
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
          <button className="profileBtn" onClick={handleEdit}>
            <p className="profileP">Create a Review</p>
          </button>
        </div>
        <hr style={{ width: "90%", maxWidth: "600px", textAlign: "center" }} />
        <div className="createEventWrapper">
          <p className="eventsP">Events</p>
          <div className="sortButtons">
            <button onClick={() => setSortBy("name")} className="eventsBtnSort">
              Sort by Name
            </button>
            <button onClick={() => setSortBy("date")} className="eventsBtnSort">
              Sort by Date
            </button>
          </div>
          <div className="eventsMapWrapper">
            {sortedEvnts.map((evnt) => {
              const evntDateTime = formatDateTime(evnt.createdAt);
              const updatedDateTime = formatedUpdatedDateTime(evnt.updatedAt);

              return (
                <div className="eventsMap" key={evnt._id}>
                  <div className="eventsMapFlexbox">
                    <img
                      src={evnt.imageUrl}
                      alt="event"
                      className="profileEventsImg"
                    />
                    <div className="eventsMapText">
                      <p className="eventNameP">{evnt.name}</p>
                      <p className="eventVenueP">@ Avenger Studio</p>
                      <div className="eventLocation-wrapper">
                        <img
                          src={LocationIcon}
                          alt="eventIcon"
                          className="eventIcon"
                        />
                        <p className="eventAddress">
                          123 Main Street {evnt.address}
                        </p>
                      </div>
                      <div className="profileCardBtns">
                        <button
                          className="eventsBtnEdit"
                          onClick={() => navigate(`/update/${evnt._id}`)}
                        >
                          <p className="editBtnP">Edit</p>
                        </button>
                        {user && (
                          <button
                            onClick={() => handleDelete(evnt._id)}
                            className="eventsBtnEdit"
                          >
                            <p className="editBtnP">Delete</p>
                          </button>
                        )}
                        <p className="eventAddress">
                          Date Updated: {updatedDateTime.monthUpdated}-
                          {updatedDateTime.dayUpdated}-
                          {updatedDateTime.yearUpdated} at{" "}
                          {updatedDateTime.timeUpdated}
                        </p>
                        <p className="eventAddress">
                          Date Created: {evntDateTime.month}-{evntDateTime.day}-
                          {evntDateTime.year} at {evntDateTime.time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="moreDetails">
                    <Link to={`/events/${evnt._id}`} style={{ color: "black" }}>
                      <p className="moreDetailsHref">More Details</p>
                    </Link>
                  </div>
                </div>
              );
            })}
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
