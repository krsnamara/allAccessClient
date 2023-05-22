import { useState } from "react";
import {Link} from 'react-router-dom';
import { logout, login } from "../../firebase";
import LoginHamburger from '../../assets/buttons-icons/login_hamburger.png';
import LoginIcon from '../../assets/buttons-icons/loginModalicon.png';
import ProfileSmallCircle from '../../assets/buttons-icons/profileSmallCircle.png';
import CreateEvent from '../../assets/buttons-icons/mdi_events.png';
import SettingsIcon from '../../assets/buttons-icons/settings.png';
import LoginLogoutIcon from '../../assets/buttons-icons/loginLogOutIcon.png';
import "./NavLoginModal.css";

export default function Modal({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="zindexingLoginModal">
      {user ? (
        <img src={LoginHamburger} alt="logoutHamburger" style={{ cursor: 'pointer' }} onClick={toggleModal} />
      ) : (
        <img src={LoginHamburger} alt="loginHamburger" style={{ cursor: 'pointer' }} onClick={toggleModal} />
      )}
      
      {modal && (
        <div className="modal"> 
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="Xicon">
                <p className="closingX" onClick={toggleModal} >X</p>
                <img src={LoginIcon} alt="loginIcon" className="loginIcon" />
            </div>
            <div className="navBarModalWrapper">
              {user ? (
                <div className="loginLogoutWrapper">
                <div className="profileCircleWrapper">
                    <img src={ProfileSmallCircle} alt="profileSmallCircle" className="profileSmallCircle" />
                    <p className="loginLogout" > <Link to="/profile" style={{ color: 'white', textDecoration: 'none'}}>Profile</Link> </p>
                </div>
                <div className="createEventWrapper">
                    <img src={CreateEvent} alt="createEvent" className="createEvent" />
                    <p className="loginLogout" ><Link to="/evnts/new" style={{ color: 'white', textDecoration: 'none'}}>Create Event</Link></p>    
                </div>
                <div className="settingsWrapper">
                <img src={SettingsIcon} alt="settings" className="settings" />
                <p className="loginLogout" >Settings</p>
                </div>
                <div className="loginWrapper">
                    <img src={LoginLogoutIcon} alt="loginLogoutIcon" className="loginLogoutIcon" />
                    <p className="loginLogout" onClick={logout} >Log out</p>
                </div>
                </div>
              ) : (
                <div className="loginLogoutWrapper">
                    <div className="loginWrapper">
                        <img src={LoginLogoutIcon} alt="loginLogoutIcon" className="loginLogoutIcon" />
                        <p className="loginLogout" onClick={login} >Login</p>
                    </div>
                    <div className="loginWrapper">
                        <p className="loginLogout" >Sign Up</p>
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
