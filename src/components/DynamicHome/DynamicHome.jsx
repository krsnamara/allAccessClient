import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./DynamicHome.css";

function DynamicHome(props) {
  const loaded = () => {
    const firstFour = props.evnts
      .slice(0, 4)
      .map((evnt) => <ExperienceCard key={evnt._id} evnt={evnt} />);

    const lastFour = props.evnts
      .slice(-4)
      .map((evnt) => <ExperienceCard key={evnt._id} evnt={evnt} />);

    const firstSix = props.evnts
      .slice(0, 6)
      .map((evnt) => <ExperienceCard key={evnt._id} evnt={evnt} />);

    const lastSix = props.evnts
      .slice(-6)
      .map((evnt) => <ExperienceCard key={evnt._id} evnt={evnt} />);

    return (
      <>
        <div className="largeContainer">
          <h1>Upcoming Events</h1>
          <div className="expContainer">
            <div className="expCard-container">{firstSix}</div>
          </div>
          <h1>Highest Rated Venues</h1>
          <div className="expContainer">
            <div className="expCard-container">{lastSix}</div>
          </div>
        </div>
        <div className="dynoHomeContainer">
          <h1>Upcoming Events</h1>
          <div className="expContainer">
            <div className="expCard-container">{firstFour}</div>
          </div>
          <h1>Highest Rated Venues</h1>
          <div className="expContainer">
            <div className="expCard-container">{lastFour}</div>
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{props.evnts ? loaded() : loading()}</section>;
}

export default DynamicHome;
