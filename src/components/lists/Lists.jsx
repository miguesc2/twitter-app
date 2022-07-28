import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../containers/Layout'
import '../../assets/styles/others/Lists.css'

function Lists({ username }) {
  return (
    <Layout>
      <div className="container__main_center">
        <div className="divProfile">
          <div className="divProfileHeader">
            <div>
              <Link to='/home'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="" alt="">
                  <g fill="rgb(0,0,0)">
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  </g>
                </svg>
              </Link>
            </div>
            
            <div>
              <p>Lists</p>
              <small>@{ username }</small> 
            </div>
          </div>
          
          <div className="pinnedLists">
            <h5>pinned lists</h5>
            
            <div className="pinnedListsContent">
              <img src="https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019__340.png" alt="" />
              <small>Funny</small>
              {/* <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                <g fill="rgb(83, 100, 113)">
                  <path d="M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z"></path>
                </g>
              </svg> */}
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({ username: state.userLogin.data.user.username }) 
export default connect(mapStateToProps)(Lists)