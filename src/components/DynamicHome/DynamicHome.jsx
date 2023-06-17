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
        <h1>Upcoming</h1>
        <div className="container">
          <div className="card-container">{firstFour}</div>
        </div>
        <h1>Highest Ratings</h1>
        <div className="container">
          <div className="card-container">{lastFour}</div>
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
