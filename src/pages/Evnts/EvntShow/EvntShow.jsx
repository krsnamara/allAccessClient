import { useParams } from "react-router-dom";
import StaticRender from '../../../assets/static_renders/static_evntsShow.png';
import './EvntShow.css';

function Evnt(props) {
  const { id } = useParams();

  const loaded = () => {
    const evnt = props.evnts.find((evnt) => evnt._id === id);
    return (
      <div className="evntShowWrapper">
        <h1>{evnt.name}</h1>
        <h3>{evnt.eventType}</h3>
        {evnt.image && <img src={evnt.image} alt={evnt.name} className="evntImage" />}
        <img src={StaticRender} alt="StaticRender" />
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.evnts ? loaded() : loading()}</section>;
}

export default Evnt;
