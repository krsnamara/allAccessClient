import { login, logout } from "../../firebase";
import { Link } from "react-router-dom";

function NavBar(props) {
    // console.log(`this is nav ${props}`)
  return (
      <nav className="nav">
          <>
              {props.user ?
                  <>
                      <Link to="/" style={{color: 'black', textDecoration: 'none'}}>Welcome</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews" style={{color: 'black', textDecoration: 'none'}}>Reviews</Link>
                      &nbsp; | &nbsp;
                      <Link to="/review/new" style={{color: 'black', textDecoration: 'none'}}>Post Review</Link>
                      &nbsp; | &nbsp;
                      <button onClick={logout}>Logout</button>
                  </>
                  :
                  <>
                      <Link to="/" style={{color: 'black', textDecoration: 'none'}}>Home</Link>
                      &nbsp; | &nbsp;
                      <Link to="/reviews" style={{color: 'black', textDecoration: 'none'}}>Reviews</Link>
                      &nbsp; | &nbsp;
                      <button onClick={login}>Login</button>
                  </>
              }
          </>
      </nav>
  );
};

export default NavBar;