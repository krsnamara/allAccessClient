import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, login } from "../../firebase";
import { futureFeature } from "../../Utilities/eventListener/futureFeature";
import LoginHamburger from "../../assets/buttons-icons/login-hamburger.svg";
import LoginIcon from "../../assets/buttons-icons/logout.svg";
import MapView from "../../assets/buttons-icons/map-view.svg";
import CreateEvent from "../../assets/buttons-icons/create-event.svg";
import SettingsIcon from "../../assets/buttons-icons/settings.svg";
import LoginLogoutIcon from "../../assets/buttons-icons/logout.svg";
import "./NavLoginModal.css";

export default function Modal({ user }) {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = (e) => {
    e.preventDefault();
    futureFeature(e);
  };

  const handleProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const handleLogoutMessage = (e) => {
    e.preventDefault();
    alert("You have successfully logged out!");
    navigate("/");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="zindexingLoginModal">
      {user ? (
        <img
          src={LoginHamburger}
          alt="logoutHamburger"
          style={{ cursor: "pointer", marginTop: "10px" }}
          onClick={toggleModal}
        />
      ) : (
        <img
          src={LoginHamburger}
          alt="loginHamburger"
          style={{ cursor: "pointer" }}
          onClick={toggleModal}
        />
      )}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="Xicon">
              <p className="closingX" onClick={toggleModal}>
                X
              </p>
              <img src={LoginIcon} alt="loginIcon" className="loginIcon" />
            </div>
            <div className="navBarModalWrapper">
              {user ? (
                <div className="loginLogoutWrapper">
                  <div className="settingsWrapper" onClick={toggleModal}>
                    <div className="loginImgContainer">
                      <img
                        src={user.photoURL}
                        alt="profileUrl"
                        className="cursor-pointer"
                        onClick={handleProfile}
                      />
                    </div>
                    <Link
                      to="/profile"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <p>Profile</p>
                    </Link>
                  </div>
                  <div className="settingsWrapper" onClick={toggleModal}>
                    <img src={MapView} alt="mapView" className="createEvent" />
                    <p className="loginLogout">
                      <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        View Events
                      </Link>
                    </p>
                  </div>
                  <div className="settingsWrapper" onClick={toggleModal}>
                    <img
                      src={CreateEvent}
                      alt="createEvent"
                      className="createEvent"
                    />
                    <p className="loginLogout">
                      <Link
                        to="/events/new"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Create Event
                      </Link>
                    </p>
                  </div>
                  <div className="settingsWrapper" onClick={toggleModal}>
                    <img
                      src={SettingsIcon}
                      alt="settings"
                      className="settings"
                    />
                    <p className="loginLogout" onClick={handleClick}>
                      Settings
                    </p>
                  </div>
                  <div className="loginWrapper" onClick={toggleModal}>
                    <img
                      src={LoginLogoutIcon}
                      alt="loginLogoutIcon"
                      className="loginLogoutIcon"
                    />
                    <p className="loginLogout" onClick={logout}>
                      <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={handleLogoutMessage}
                      >
                        Log out
                      </Link>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="loginLogoutWrapper" onClick={toggleModal}>
                  <div className="loginWrapper">
                    <img
                      src={LoginLogoutIcon}
                      alt="loginLogoutIcon"
                      className="loginLogoutIcon"
                    />
                    <p className="loginLogout" onClick={login}>
                      Login
                    </p>
                  </div>
                  <div className="loginWrapper">
                    <p className="loginLogout">Sign Up</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
