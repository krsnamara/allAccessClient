import React, { useState } from "react";
import { logout, login } from "../../firebase";
import LoginHamburger from '../../assets/buttons-icons/login_hamburger.png';
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
    <>
      {user ? (
        <img src={LoginHamburger} alt="logoutHamburger" style={{ cursor: 'pointer' }} onClick={toggleModal} />
      ) : (
        <img src={LoginHamburger} alt="loginHamburger" style={{ cursor: 'pointer' }} onClick={toggleModal} />
      )}
      
      {modal && (
        <div className="modal"> 
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <div className="navBarModalWrapper">
              {user ? (
                <button onClick={logout}>Log Out</button>
              ) : (
                <button onClick={login}>Log In</button>
              )}
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
