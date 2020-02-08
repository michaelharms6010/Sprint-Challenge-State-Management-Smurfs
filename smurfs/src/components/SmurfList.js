import React, {useState, useEffect,  useContext} from 'react';
import {SmurfContext} from "../contexts/SmurfContext"
import axios from "axios"

function SmurfList() {
    const {smurfs, setSmurfs} = useContext(SmurfContext)
    const [editedSmurf, setEditedSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    useEffect(_ => {
        axios.get("http://localhost:3333/smurfs")
            .then(r =>
                setSmurfs(r.data)
            )
            .catch(err => console.log(err))
    }, [])

    const editSmurf = smurf => {
        if (editedSmurf.id === undefined) {
            setEditedSmurf(smurf);
        } else {
            axios.put(`http://localhost:3333/smurfs/${smurf.id}`, editedSmurf)
                .then(r => { 
                    setSmurfs(r.data);
                    setEditedSmurf({
                        name: "",
                        age: "",
                        height: ""
                    });
                })
                .catch(err => console.log(err))
        }
    }

    const handleChange = e => {
        setEditedSmurf({
            ...editedSmurf,
            [e.target.name]: e.target.value
        });
    }
    

    const deleteSmurf = id => {
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(r => setSmurfs(r.data))
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

  return (
    <div className="smurf-list">

        {smurfs.map(item => 
        editedSmurf.id !== item.id ? 
        <div className="smurf-card" key={item.id}>
            <h3>{item.name}</h3>    
            <h3>Age: {item.age}</h3>  
            <h3>Height: {item.height}</h3> 
            <button onClick={ _ => editSmurf(item)}>Edit</button> 
            <button onClick={ _ => deleteSmurf(item.id) }>Delete</button>
        </div>
        : 
        <form className="edit-form" key={item.id} onSubmit={handleSubmit}> 
        <input
            onChange={handleChange}
            name="name"
            value={editedSmurf.name} />
            <input
            onChange={handleChange}
            name="age"
            value={editedSmurf.age} />
            <input
            onChange={handleChange}
            name="height"
            value={editedSmurf.height} />
            <button onClick={ _ => editSmurf(item)}>Edit</button> 
            <button onClick={ _ => deleteSmurf(item.id) }>Delete</button>
        </form>
             )}
        

    </div>
  );
}

export default SmurfList;
