
import React from 'react'
// import Carousel from '../../components/Carousel/Carousel';
import '../Home/Home.css';
// import '../../App.css';
import LikeButton from '../../components/LikeButton/LikeButton';



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
        <div className="card-container">


            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card">
              <div className="card-picture">
                <div className="like-button">
                  <LikeButton />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beautifull Card</h5>
                <p className="card-text">This is a beautifull card</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            

        </div>
      </div>


    </>
  );
}

export default Home;
