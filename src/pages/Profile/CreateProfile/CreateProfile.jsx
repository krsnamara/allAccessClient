import { useState } from 'react';

const CreateProfile = ({ user, createProfile }) => {
    const [ showP2, setShowP2 ] = useState(false)
    const [ showP3, setShowP3 ] = useState(false)
    const [ formData, setFormData ] = useState({
        preferredName: '',
        state: '',
        city: ''
    })

    // console.log(user.uid, '-- user.uid')

    // e.preventDefault();
    // props.createReviews(newForm);
    // setNewForm(formFields);
    // navigate("/reviews"); 

    const handleSubmit = (event) => {
        event.preventDefault()
        const formDataCopy = {...formData}
        createProfile(formDataCopy)
        setFormData(formDataCopy)
        console.log(formData, 'submitted form data')
        // navigate("/reviews"); 
    }

    const handleChange = (event) => {
        console.log(event.target.id)
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
          error: ''
        });
        console.log("this is the form data: ", formData);
    }

    const handleShowP2 = () => {
        setShowP2(true)
    }

    const handleShowP3 = () => {
        setShowP2(false)
        setShowP3(true)
    }

    return (
        <>
            <h1>Create Profile</h1>
            <form onSubmit={handleSubmit}>
                { showP2 && !showP3 ? 
                <>
                <label>What state do you live in?</label>
                <input type='text' name='state' id='state' value={formData.state} onChange={handleChange} />
                <div>
                <button onClick={handleShowP3}>Next</button>
                </div>
                </>
                : !showP2 && showP3 ?
                <>
                <label>What city do you live in?</label>
                <input type='text' name='city' id='city' value={formData.city} onChange={handleChange} />
                <div>
                <button type='submit'>Create</button>
                </div>
                </>
                :
                <>
                <label>What is your preferred name?</label>
                <input type='text' name='preferredName' id='preferredName' value={formData.preferredName} onChange={handleChange} />
                <div>
                <button onClick={handleShowP2}>Next</button>
                </div>
                </>
                }
            </form>
        </>
    )
}  

export default CreateProfile