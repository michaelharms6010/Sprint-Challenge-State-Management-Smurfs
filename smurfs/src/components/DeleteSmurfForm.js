import React, {useState} from 'react'
import {connect} from 'react-redux';
import {deleteSmurf} from '../actions';

const DeleteSmurfForm = props => {
    const [id, setId] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        props.deleteSmurf(id);
        setId("");
    };

    const handleChange = e => {
        setId(e.target.value)
    };

    return(
        <div className="smurf-form">
            <h3>Delete a Smurf by ID</h3> 
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    placeholder="id to delete"
                    value={id}
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

export default connect(mapStateToProps,{deleteSmurf})(DeleteSmurfForm)
