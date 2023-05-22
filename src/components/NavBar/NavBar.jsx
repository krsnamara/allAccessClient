import { Link, useLocation } from "react-router-dom";
import { IoChevronBackCircleOutline, IoGlobeOutline, IoSearchOutline } from 'react-icons/io5'
import Logo from '../../assets/buttons-icons/icon.png';
import LoginModal from '../NavLoginModal/NavLoginModal';
import './NavBar.css';

function NavBar({ user }) {
  // useLocation programmatically navigates user based on some condition
  const location = useLocation();

  // Check if the current location is "/new-review"
  const isNewReviewPage = location.pathname === "/new-review";

  return (
    <nav className="nav">
      <div className="mainNav"> 
        {user ? 
        <>
          <div className="navBarWrapper">
            <div>
              <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
                <img src={Logo} alt="logo" className="navBarLogo" />
              </Link>
            </div>
            <div className="loginModal">
              <LoginModal user={user} /> {/* Pass the user prop here */}
            </div>
            <div>
              <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
                <IoGlobeOutline size={40} />
              </Link>
            </div>
          </div>
        </>
        :
        <div className="navBarWrapper">
          <div>
            <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
              <img src={Logo} alt="logo" className="navBarLogo" />
            </Link>
          </div>
          <div className="loginModal">
            <LoginModal user={user} /> {/* Pass the user prop here */}
          </div>
          <div>
            <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
              <IoGlobeOutline size={40} />
            </Link>
          </div>
        </div>
        }
      </div>
      <div className="searchBarWrapper">
        <div className="navBarSearch">
          <div className="searchIconLink">
            <IoSearchOutline size={25} />
          </div>
          <p>Location, landmark, or address</p>
        </div>
      </div>
      {isNewReviewPage && (
        <div className="reviewNav">
          <Link to="/" className="backBtnNav" style={{ color: 'black', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <IoChevronBackCircleOutline size={40} />
            <p className="backNavP">Back</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
