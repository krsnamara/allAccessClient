import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../assets/buttons-icons/logo.svg";
import LoginModal from "../NavLoginModal/NavLoginModal";
import "./NavBar.css";

function NavBar({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isNewEventsPage = location.pathname === "/events/new";
  const isShowEventPage = location.pathname.includes("/events/");

  return (
    <div className={`app ${isNewEventsPage ? "events-page" : ""}`}>
      <nav className="nav">
        <div className="navBarWrapper">
          <div>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <img src={Logo} alt="logo" className="navBarLogo" />
            </Link>
          </div>
          <div className="searchBarWrapper">
            <SearchBar />
          </div>
          <div className="loginModal">
            <LoginModal user={user} />
          </div>
        </div>
      </nav>
      {(isNewEventsPage || isShowEventPage) && (
        <div className={`eventsNewNav ${isNewEventsPage ? "noNavStyle" : ""}`}>
          <button onClick={() => navigate(-1)} className="backBtnNav">
            <IoChevronBackCircleOutline size={40} />
          </button>
          <p className="backNavP">Back</p>
        </div>
      )}
    </div>
  );
}

export default NavBar;
