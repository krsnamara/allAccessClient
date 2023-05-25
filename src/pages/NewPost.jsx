import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URLS } from "../urls";

export default function NewPost() {  

  const [file, setFile] = useState()
  const [caption, setCaption] = useState("")

  const navigate = useNavigate()
  const URL = `${API_URLS.IMAGE_POST}`;

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("caption", caption)
    await axios.post('https://localhost:4000/posts/', formData, { headers: {'Content-Type': 'multipart/form-data'}})

    navigate("/evnts")
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="flex flex-col items-center justify-center">

        <form onSubmit={submit} style={{width:650}} className="flex flex-col space-y-5 px-5 py-14">
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}