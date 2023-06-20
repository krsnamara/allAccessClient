import { Link, useLocation } from "react-router-dom";
import { IoChevronBackCircleOutline, IoSearchOutline } from "react-icons/io5";
import Logo from "../../assets/buttons-icons/logo.svg";
import LoginModal from "../NavLoginModal/NavLoginModal";
import "./NavBar.css";

function NavBar({ user }) {
  const location = useLocation();
  const isNewReviewPage = location.pathname === "/new-review";

  return (
    <nav className="nav">
      <div className="navBarWrapper">
        <div>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <img src={Logo} alt="logo" className="navBarLogo" />
          </Link>
        </div>
        <div className="searchBarWrapper">
          <div className="navBarSearch">
            <div className="searchIconLink">
              <IoSearchOutline size={25} />
            </div>
            <p>Location, landmark, or address</p>
          </div>
        </div>
        <div className="loginModal">
          <LoginModal user={user} />
        </div>
      </div>
      {isNewReviewPage && (
        <div className="reviewNav">
          <Link
            to="/"
            className="backBtnNav"
            style={{
              color: "black",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <IoChevronBackCircleOutline size={40} />
            <p className="backNavP">Back</p>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
