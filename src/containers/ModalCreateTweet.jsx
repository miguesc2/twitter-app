import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { baseUrlPosts } from '../services/urls'

function ModalCreateTweet({ username }) {
    const [ message, setMessage ] = useState("")
    const handleChange = e => setMessage(e.target.value)
    
    const postTweet = async() => {
        if ( message.length !== 0 ) {
            try { 
                await axios.post(baseUrlPosts, { author: username, body: message, likes: [] })
                .then(() => setMessage("")) 
            } 
            catch( error ) { 
                console.log( error.message ) 
            }
        }
    }
    
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="mb-3">
                                <textarea className="form-control" id="message-text" maxLength='250' onChange={ handleChange } value={ message }></textarea>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={ postTweet }>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({ username: state.userLogin.data.user.username })
export default connect(mapStateToProps, null)(ModalCreateTweet)