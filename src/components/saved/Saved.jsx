import React from 'react'
import Layout from '../../containers/Layout'
import { connect } from 'react-redux'
import '../../assets/styles/others/Saved.css'

function Saved({ username }) {
  return (
    <Layout>
      <div className="container__main_center">
        <div className="divProfile">
          <div className="divSavedHeader">            
            <h5>Saved</h5>
            <small>@{username}</small> 
          </div>
          
          <div className="centralContentSaved">
            <img src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-400x200.v1.png" alt="imageNotFound" />
            <p>There are no saved tweets</p>         
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({ username: state.userLogin.data.user.username }) 
export default connect(mapStateToProps)(Saved)