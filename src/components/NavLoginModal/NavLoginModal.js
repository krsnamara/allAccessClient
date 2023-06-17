import { useState } from "react";
import { Link } from "react-router-dom";
import { logout, login } from "../../firebase";
import LoginHamburger from "../../assets/buttons-icons/login-hamburger.svg";
import LoginIcon from "../../assets/buttons-icons/logout.svg";
import ProfileSmallCircle from "../../assets/buttons-icons/profile-img.svg";
import GalleryView from "../../assets/buttons-icons/grid-view.svg";
import MapView from "../../assets/buttons-icons/map-view.svg";
import CreateEvent from "../../assets/buttons-icons/create-event.svg";
import SettingsIcon from "../../assets/buttons-icons/settings.svg";
import LoginLogoutIcon from "../../assets/buttons-icons/logout.svg";
import "./NavLoginModal.css";

export default function Modal({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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
                  <div className="profileCircleWrapper" onClick={toggleModal}>
                    <img
                      src={ProfileSmallCircle}
                      alt="profileSmallCircle"
                      className="profileSmallCircle"
                    />
                    <p className="loginLogout">
                      {" "}
                      <Link
                        to="/profile"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Profile
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="createEventWrapper" onClick={toggleModal}>
                    <img
                      src={GalleryView}
                      alt="galleryView"
                      className="createEvent"
                    />
                    <p className="loginLogout">
                      <Link
                        to="/images"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Gallery View Events
                      </Link>
                    </p>
                  </div>
                  <div className="createEventWrapper" onClick={toggleModal}>
                    <img src={MapView} alt="mapView" className="createEvent" />
                    <p className="loginLogout">
                      <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Map View Events
                      </Link>
                    </p>
                  </div>
                  <div className="createEventWrapper" onClick={toggleModal}>
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
                    <p className="loginLogout">Settings</p>
                  </div>
                  <div className="loginWrapper" onClick={toggleModal}>
                    <img
                      src={LoginLogoutIcon}
                      alt="loginLogoutIcon"
                      className="loginLogoutIcon"
                    />
                    <p className="loginLogout" onClick={logout}>
                      Log out
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
