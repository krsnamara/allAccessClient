import { login, logout } from "../../firebase";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline, IoGlobeOutline, IoSearchOutline } from 'react-icons/io5'
// import { IoIosSearch } from 'react-icons/ios'
import Logo from '../../assets/buttons-icons/icon.png';
import LoginHamburger from '../../assets/buttons-icons/login_hamburger.png';
import LangGlobe from '../../assets/buttons-icons/langGlobe.png';
import './NavBar.css';


function NavBar(props) {
    // console.log(`this is nav ${props}`)
  return (
      <nav className="nav">
          <div className="mainNav">
              {props.user ?
                  <>
                      <div className="navBarWrapper">
                    <div>
                        <Link to="/" style={{color: 'black', textDecoration: 'none', backgroundColor: 'green'}}>
                            <img src={ Logo } alt="logo" className="navBarLogo" />
                        </Link>
                    </div>
                    <img src={LoginHamburger} alt="loginHamburger" style={{cursor: 'pointer'}} onClick={logout} />
                    <div>
                      <Link to="/" style={{color: 'black', textDecoration: 'none', backgroundColor: 'green'}}>
                      <IoGlobeOutline size={40}/>
                      </Link>
                    </div>
                  </div>
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
                      <img src={LangGlobe} alt="langGlobe" className="navLangGlobe"/>
                      </Link>
                    </div>
                  </div>
              }
          </div>
          <div className="searchBarWrapper">
            <div className="navBarSearch">
              <div className="searchIconLink">
                <IoSearchOutline size={25}/>
              </div>
              <p>Location, landmark, or address</p>
            </div>
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