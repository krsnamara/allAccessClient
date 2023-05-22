import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom" 
import './EvntShow.css';
// import { events } from "../../../../../server/models/events";

// a hook that gives us access to the url params 
// to allow us to find from the url params 

// useLocation programaticly nagivates user based on some condition

function Evnt(props) {
    // we need to access the id from the url params
    // const params = useParams();
    // console.log(params);
    // console.log(props);
    const { id } = useParams();
    const navigate = useNavigate();

    const formFields = {
        name: "",
        title: "",
        image: "",
    };

    const evnt = props.evnts ? props.evnts.find(evnt => evnt._id === id) : null;

    const [editForm, setEditForm] = useState(formFields);

    useEffect(() => {
        if(evnt) {
            setEditForm(evnt)
        } 
    }, [evnt]);

    const handleChange = (event) => {
        setEditForm({
            ...editForm, 
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateEvnts(id, editForm);
    };

    // console.log(navigate); // logs a function

    // use the id to find the specific person in the people array to show person
    const loaded = () => {
        // const person = props.people.find(person => person._id === id); // before refactor
        // console.log(person);
        return (
            <div className="evnt">
                <h1>{editForm.name}</h1>
                <h3>{editForm.eventType}</h3>
                { evnt.image &&
                    <img src={editForm.image} alt={editForm.name} className="evntImage" />
                }
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        value={editForm.name} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text"
                        name="title"
                        value={editForm.eventType} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text"
                        name="image"
                        value={editForm.image} 
                        onChange={handleChange} 
                    />
                    <input type="submit" value="Update Event" />
                </form>
                <button onClick={handleDelete}>Delete This Event</button>
            </div>
        );

    };
    const loading = () => {
        return <h2>Loading...</h2>;
    };

    const handleDelete = () => {
        props.deleteEvnts(id);
        navigate('/evnts');
    };

    return (
        <section>
            {props.evnts ? loaded() : loading()}
        </section>
    );
  }

export default Evnt;