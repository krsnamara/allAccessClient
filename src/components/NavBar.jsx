import { login, logout } from "../firebase";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
      <nav className="nav">
          <>
              {props.user ?
                  <>
                      <Link to="/">Welcome</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews">Reviews</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews/new">Post Review</Link>
                      &nbsp; | &nbsp;
                      <button onClick={logout}>Logout</button>
                  </>
                  :
                  <>
                      <Link to="/">Home</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews">Reviews</Link>
                      &nbsp; | &nbsp;
                      <button onClick={login}>Login</button>
                  </>
              }
          </>
      </nav>
  );
};

export default NavBar;