import { login, logout } from "../../firebase";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline, IoGlobeOutline } from 'react-icons/io5'
import Logo from '../../assets/icon.png';
import LoginHamburger from '../../assets/login_hamburger.png'
import './NavBar.css';


function NavBar(props) {
    // console.log(`this is nav ${props}`)
  return (
      <nav className="nav">
          <div className="mainNav">
              {props.user ?
                  <>
                      <Link to="/" style={{color: 'black', textDecoration: 'none'}}>Welcome { props.user.email }</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews" style={{color: 'black', textDecoration: 'none'}}>Reviews</Link>
                      &nbsp; | &nbsp;
                      <Link to="/review/new" style={{color: 'black', textDecoration: 'none'}}>Post Review</Link>
                      &nbsp; | &nbsp;
                      <button onClick={logout}>Logout</button>
                  </>
                  :
                  <div className="navBarWrapper">
                    <div>
                        <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                            <img src={ Logo } alt="logo" className="navBarLogo" />
                        </Link>
                    </div>
                    <img src={LoginHamburger} alt="loginHamburger" style={{cursor: 'pointer'}} onClick={login} />
                    <div>
                      <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                      <IoGlobeOutline size={40}/>
                      </Link>
                    </div>
                  </div>
              }
          </div>
          <div className="reviewNav">
            <Link to="/" className="backBtnNav" style={{color: 'black', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <IoChevronBackCircleOutline size={40}/>
            <p className="backNavP">Back</p>
            </Link>
          </div>
      </nav>
  );
};

export default NavBar;