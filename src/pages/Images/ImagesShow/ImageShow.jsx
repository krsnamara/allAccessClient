import { useParams, useNavigate } from "react-router-dom";
import StaticRender from "../../../assets/static_renders/static_evntsShow.png";
import "./ImageShow.css";

function Evnt(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const evnt = props.evnts ? props.evnts.find((evnt) => evnt._id === id) : null;

  console.log("evnts:", props.evnts);
  console.log("id:", id);
  console.log("evnt:", evnt);

  const loaded = () => {
    return (
      <div className="evntShowWrapper">
        <h1>{evnt.name}</h1>
        <h3>{evnt.eventType}</h3>
        {evnt.image && (
          <img src={evnt.image} alt={evnt.name} className="evntImage" />
        )}
        <button onClick={() => navigate(-1)}>Go Back</button>
        <img src={StaticRender} alt="StaticRender" className="staticRender" />
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.evnts ? loaded() : loading()}</section>;
}

export default Evnt;
