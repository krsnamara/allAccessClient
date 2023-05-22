import './ProfilePage.css';
import profilePic from '../../assets/profileSmpl.png';

const ProfilePage = () => {
    return (
        <div className="profileBody">
            <div className='editCont'>
                <button className='profileBtn'><h1>Edit</h1></button>
            </div>
            <div className='picCont'>
                <img src={profilePic} alt="profile"/>
            </div>
            <div className='profileInfo'>
                <h3>Test User 420</h3>
                <h4>Joined &nbsp; | &nbsp; May 2023</h4>
            </div>
            <hr />
            <div className="reviewsCont">
                <div className='totalReview'>
                    <h2>0</h2>
                    <h2>Reviews</h2>
                </div>
                <div className='reviewsSaved'>
                    <h2>0</h2>
                    <h2>Saved</h2>
                </div>
            </div>
            <div className='reviewBtn'>
                <button className='profileBtn'><h1>Add Review</h1></button>
            </div>
            <hr />
            <div className='eventsCont'>
                <h2>Events</h2>
            </div>
            <div className='eventBtn'>
                <button className='profileBtn'><h1>Create Event</h1></button>
            </div>
        </div>
    )
}

export default ProfilePage;