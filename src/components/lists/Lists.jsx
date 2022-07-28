import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../containers/Layout'
import '../../assets/styles/others/Lists.css'

function Lists({ username }) {
  // <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
  //   <g fill="rgb(83, 100, 113)">
  //     <path d="M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z"></path>
  //   </g>
  // </svg>

  return (
    <Layout>
      <div className="container__main_center">
        <div className="divProfile">
          <div className="divProfileHeader">
            <div>
              <Link to='/home'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="" alt="imageNotFound">
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
            
            <div className="pinnedListsFlex">
              <div className="pinnedListsContent">
                <img src="https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019__340.png" alt="imageNotFound" />
                <div>
                  <small>Funny</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                    <g fill="rgb(0,0,0)">
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>                </g>
                  </svg>
                </div>
              </div>

              <div className="pinnedListsContent">
                <img src="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg" alt="imageNotFound" />
                <div>
                  <small>Flowers</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                    <g fill="rgb(0,0,0)">
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>                </g>
                  </svg>
                </div>
              </div>
              
              <div className="pinnedListsContent">
                <img src="https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038__340.jpg" alt="imageNotFound" />
                <div>
                  <small>Food</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                    <g fill="rgb(0,0,0)">
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>                </g>
                  </svg>
                </div>
              </div>

              <div className="pinnedListsContent">
                <img src="https://cdn.pixabay.com/photo/2017/08/07/19/07/books-2606859__480.jpg" alt="imageNotFound" />
                <div>
                  <small>Philosophy</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                    <g fill="rgb(0,0,0)">
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>                </g>
                  </svg>
                </div>
              </div>

              <div className="pinnedListsContent">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/04/15/digger-1867268__340.jpg" alt="imageNotFound" />
                <div>
                  <small>Trucks</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                    <g fill="rgb(0,0,0)">
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>                </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="DiscoverLists">
            <h5>Discover new Lists</h5>
            
            <div className="pinnedListsFollow">
              <div className="">
                <div className="pinnedListsFollowNames">
                  <>
                    <img src="https://cdn.pixabay.com/photo/2022/07/24/14/12/path-7341731__340.jpg" alt="imageNotFound" />
                  </>
                  <div>
                    <p>List1</p>
                    <small>Stephanie Mcintosh.</small>
                    <small className="itemPinned">@StephanieMc</small>
                  </div>
                </div>
              </div>

              <div>
                <input type="button" value="To follow"/>
              </div>
            </div>

            <div className="pinnedListsFollow">
              <div className="">
                <div className="pinnedListsFollowNames">
                  <>
                    <img src="https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904__340.jpg" alt="imageNotFound" />
                  </>
                  <div>
                    <p>List2</p>
                    <small>Dustin Steele.</small>
                    <small className="itemPinned">@steele</small>
                  </div>
                </div>
              </div>

              <div>
                <input type="button" value="To follow"/>
              </div>
            </div>
            <div className="pinnedListsFollow">
              <div className="">
                <div className="pinnedListsFollowNames">
                  <>
                    <img src="https://cdn.pixabay.com/photo/2021/06/20/09/56/lionfish-6350449__340.png" alt="imageNotFound" />
                  </>
                  <div>
                    <p>List3</p>
                    <small>Jacqueline Mason.</small>
                    <small className="itemPinned">@jJacquelineMason</small>
                  </div>
                </div>
              </div>

              <div>
                <input type="button" value="To follow"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({ username: state.userLogin.data.user.username }) 
export default connect(mapStateToProps)(Lists)