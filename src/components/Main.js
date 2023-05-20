import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    
    const [ people, setPeople ] = useState(null);
    const getPeopleRef = useRef(null); // {current: null }

    const URL = "http://localhost:4000/people/";

    const getPeople = async () => {

        const token = await props.user.getIdToken();
            console.log(token);

        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization':'Bearer ' + token
            }
        });
        const data = await response.json();
        setPeople(data);
    }

    const createPeople = async (person) => {
        if(!props.user) return; // prevent function from executing code below if no auth
        const token = await props.user.getIdToken();

        // make post request to create people
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(person),
        });
        // update list of people
        getPeople();
    };

    const updatePeople = async (id, updatedPerson) => {
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(updatedPerson),
        });
        getPeople();
    };

    const deletePeople = async (id) => {
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        getPeople();
    };

    useEffect(() => {
        getPeopleRef.current = getPeople;
    });

    useEffect (() => {
        if(props.user) {
            getPeopleRef.current(); // solves useEffect getPeople warning
        } else {
            setPeople(null);
        }
    }, [props.user]);

    return (
        <main>
        <Routes>
          <Route path="/" element={
            <Index people={people}
                    createPeople={createPeople}
            />} />
            <Route path="/people/:id" element={
                <Show 
                    people={people} 
                    deletePeople={deletePeople}
                    updatePeople={updatePeople}
                />} 
            />
        </Routes>
      </main>
    );
}

export default Main;