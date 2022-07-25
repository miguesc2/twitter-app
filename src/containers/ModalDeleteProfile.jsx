import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { baseUrlUser } from '../services/urls'

function ModalCreateTweet({ idUser }) {
    const deleteUser = e => {
        e.preventDefault()
        
        axios.delete(`${ baseUrlUser }${ idUser }`)
        .then(() => {
            localStorage.clear()
            window.location.reload();
        })
    }

    return (
        <>
            <div className="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure you want to delete your user?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    
                        <div className="modal-body">
                            <p>You will be redirected to the login page in case it is successfully removed.</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={ deleteUser }>Accept</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({ 
    username: state.userLogin.data.user.username,
    idUser: state.userLogin.data.user.id
})

export default connect( mapStateToProps, null )( ModalCreateTweet )