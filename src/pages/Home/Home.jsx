
import React from 'react'
// import Carousel from '../../components/Carousel/Carousel';
import '../Home/Home.css';
import '../../App.css';


function Home() {
  return (
    // <div>
    //   <Carousel />
    // </div>
    <>
      <h1>
        Popular
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1611095772763-4b7b7b0b2b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyZCUyMGFydCUyMHRoZSUyMGJlYXV0eSUyMGNhcmQlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
