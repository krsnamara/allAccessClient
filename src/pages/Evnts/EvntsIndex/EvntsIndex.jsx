import { Link } from "react-router-dom";
import './EvntsIndex.css';


function EvntsIndex(props) {

    //loaded function
    const loaded = () => {
        return props.evnts.map(evnt => (
            <div className="evntsIndexWrapper">
                <div key={evnt._id} className="evntsCard">
                    <Link to={`/evnts/${evnt._id}`}>
                        <h1>{evnt.name}</h1>
                    </Link>
                    <img src={evnt.image} alt={evnt.name} className="evntsImage" />
                    <h3>{evnt.eventType}</h3>
                </div>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <section>
            { props.evnts ? loaded() : loading() }
        </section>
    )
  }

export default EvntsIndex;