import React, {useState} from 'react'
import {connect} from 'react-redux';
import {updateSmurf} from '../actions';

const EditSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });


    const handleSubmit = e => {
        e.preventDefault()
        props.updateSmurf(newSmurf)
        setNewSmurf({
            name: "",
            age: "",
            height: "",
            id: ""
        })
    };

    const handleChange = e => {
        setNewSmurf({ 
            ...newSmurf,
            [e.target.name]: e.target.value,
            })
    };

    return(
        <div className="smurf-form">
            <h3>Edit a Smurf by ID</h3>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    placeholder="name"
                    value={newSmurf.name}
                    name="name"
                />
                <input
                    onChange={handleChange}
                    placeholder="age"
                    value={newSmurf.age}
                    name="age"
                />
                <input
                    onChange={handleChange}
                    placeholder="height"
                    value={newSmurf.height}
                    name="height"
                />
                <input
                    onChange={handleChange}
                    placeholder="id to edit"
                    value={newSmurf.id}
                    name="id"
                />
                <button type="submit">Edit</button> 
            </form>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
 
    }
}

export default connect(mapStateToProps,{updateSmurf})(EditSmurfForm)
