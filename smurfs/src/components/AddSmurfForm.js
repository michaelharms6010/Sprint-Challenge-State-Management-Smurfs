import React, {useState,  useContext} from 'react';
import {SmurfContext} from "../contexts/SmurfContext"
import axios from "axios"

function AddSmurfForm() {
    const {setSmurfs} = useContext(SmurfContext)

    const [addSmurf, setAddSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e => {
        setAddSmurf({
            ...addSmurf,
            [e.target.name]: e.target.value
        })
    }

    const addNewSmurf = e => {
        e.preventDefault();
        axios.post("http://localhost:3333/smurfs", addSmurf)
        .then(r => {
            setSmurfs(r.data)
            setAddSmurf({
                name: "",
                age: "",
                height: ""
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <form className="add-form" onSubmit={addNewSmurf}>

            <input
            onChange={handleChange}
            name="name"
            value={addSmurf.name}
            placeholder="Name"
            />
            <input
            onChange={handleChange}
            name="age"
            value={addSmurf.age}
            placeholder="Age"
            />
            <input
            onChange={handleChange}
            name="height"
            value={addSmurf.height}
            placeholder="Height"
            />
            <button type="submit">Add Smurf</button>

        </form>

    )
}

export default AddSmurfForm;
