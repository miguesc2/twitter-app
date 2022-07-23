import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { stateDeletePostt } from '../actions/action'
import { baseUrlPosts } from '../services/urls'

function Modal( props ) {
    const deleteSecondStep = () => {
        axios.delete(`${ baseUrlPosts }${ props.postToDelete }`)
        .then(() => props.stateDeletePostt( !props.stateDelete ))
        .catch(e => console.log( e.message ))
    }

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Are you sure you want to delete the post?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>                        
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal" onClick={ deleteSecondStep }>Accept</button>
                            <button className="btn btn-success" data-bs-dismiss="modal" type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        postToDelete : state.deletePost,
    }
}
const mapDispatchToProps = { stateDeletePostt }

export default connect(mapStateToProps, mapDispatchToProps) (Modal)