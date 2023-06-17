import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./DynamicHome.css";

function DynamicHome(props) {
  const loaded = () => {
    const firstFour = props.images
      .slice(0, 4)
      .map((image) => <ExperienceCard key={image._id} image={image} />);

    const lastFour = props.images
      .slice(-4)
      .map((image) => <ExperienceCard key={image._id} image={image} />);

    return (
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
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{props.images ? loaded() : loading()}</section>;
}

export default DynamicHome;
