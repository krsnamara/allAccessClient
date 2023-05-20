function NewReview(props) {
    const formFields = {
        name: "",
        image: "",
        title: ""
    };

    const [newForm, setNewForm ] = useState(formFields);

    // TODO: finish this after form build. Add event logic
    const handleChange = (event) => {
        // When the set state function is called
        // new state is passed in as argument
        // the new state is then used to replace old state
        // in summary: old state will always be overridden with new state
        // event.preventDefault();
        setNewForm({
            ...newForm, 
            [event.target.name]: event.target.value 
        });
    };

    // TODO: finish this after form. 
    // Lifting up state function/ lift form state up the 
    // component hiearchy to Main component's createPeople function
    const handleSubmit = (e) => {
        e.preventDefault(); // this prevents a page refresh
        props.createPeople(newForm);
        setNewForm(formFields); // reset form to empty fields
    };

    //loaded function
    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                {/* <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3> */}
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    // return props.people ? loaded() : loading();
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    value={newForm.name} 
                />
                <input 
                    type="text" 
                    name="image" 
                    onChange={handleChange} 
                    value={newForm.image}
                />
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={newForm.title} 
                />
                <input type="submit" value="Add Person" />
            </form>
            { props.people ? loaded() : loading() }
        </section>
    )
  }

export default NewReview;