import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom" 
// a hook that gives us access to the url params 
// to allow us to find from the url params 

// useLocation programaticly nagivates user based on some condition

function Review(props) {
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

    const person = props.people ? props.people.find(person => person._id === id) : null;

    const [editForm, setEditForm] = useState(formFields);

    useEffect(() => {
        if(person) {
            setEditForm(person)
        } 
    }, [person]);

    const handleChange = (event) => {
        setEditForm({
            ...editForm, 
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updatePeople(id, editForm);
    };

    // console.log(navigate); // logs a function

    // use the id to find the specific person in the people array to show person
    const loaded = () => {
        // const person = props.people.find(person => person._id === id); // before refactor
        // console.log(person);
        return (
            <div className="person">
                <h1>{person.name}</h1>
                <h3>{person.title}</h3>
                { person.image &&
                    <img src={person.image} alt={person.name} />
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
                        value={editForm.title} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text"
                        name="image"
                        value={editForm.image} 
                        onChange={handleChange} 
                    />
                    <input type="submit" value="Update Person" />
                </form>
                <button onClick={handleDelete}>Delete This Person</button>
            </div>
        );

    };
    const loading = () => {
        return <h2>Loading...</h2>;
    };

    const handleDelete = () => {
        props.deletePeople(id);
        navigate('/');
    };

    // return props.people ? loaded() : loading();

    return (
        <section>
            {props.people ? loaded() : loading()}
            {/* <button onClick={handleDelete}>Delete This Person</button> */}
        </section>
    );
  }

export default Review;