import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions/'

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs()
    }, []);


        return (
            <div>
                {props.smurfs.map(smurf => {
                    return (
                        <div className="smurf-card">
                            <h2>{smurf.name}</h2>
                            <h4>Age: {smurf.age}</h4>
                            <h4>Height: {smurf.height}</h4>
                        </div>
                    )
                })}
            </div>
        )

}

const mapPropsToState = state => {
    return {
        smurfs: state.smurfs
    }
  }

export default connect(mapPropsToState, {fetchSmurfs})(Smurfs)