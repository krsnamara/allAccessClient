import { useState } from 'react';

const CreateProfile = ({ user }) => {
    const [ showP2, setShowP2 ] = useState(false)
    const [ showP3, setShowP3 ] = useState(false)
    const [ formData, setFormData ] = useState({
        preferredName: '',
        state: '',
        city: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const formDataCopy = {...formData}
        setFormData(formDataCopy)
    }

    const handleChange = (event) => {
        console.log(event.target.id)
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
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
                <input id='state' value={formData.state} onChange={handleChange} />
                <div>
                <button onClick={handleShowP3}>Next</button>
                </div>
                </>
                : !showP2 && showP3 ?
                <>
                <label>What city do you live in?</label>
                <input id='city' value={formData.city} onChange={handleChange} />
                <div>
                <button type='submit'>Create</button>
                </div>
                </>
                :
                <>
                <label>What is your preferred name?</label>
                <input id='preferredName' value={formData.preferredName} onChange={handleChange} />
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