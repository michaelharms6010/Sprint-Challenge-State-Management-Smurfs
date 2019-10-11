import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

const AddSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });


    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(newSmurf)
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
            id: props.smurfs.length
         })
    };

    return(
        <div className="add-smurf-form">
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
                <button type="submit">Populate</button> 
            </form>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
 
    }
}

export default connect(mapStateToProps,{addSmurf})(AddSmurfForm)
