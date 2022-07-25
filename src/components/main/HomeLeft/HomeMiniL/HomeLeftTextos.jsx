import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomeLeftTextos = ({ username }) => (
  <div className="home__list_textos">
    { useLocation().pathname === `/home`
      ? 
        <a href="#x" style={{ cursor: 'default '}}><li>Beginning</li></a>
      : 
        <Link to="/home"><li>Beginning</li></Link> 
    }
    <li className="orderToDisappear1">To explore</li>
    <li className="orderToDisappear2">Notifications</li>
    <li className="orderToDisappear3">Posts</li>
    <li className="orderToDisappear4">Saved</li>
    <li className="orderToDisappear5">Lists</li>
    { useLocation().pathname === `/profile/${ username }` 
      ?
        <a href="#x" style={{ cursor: 'default '}}><li>Profile</li></a> 
      :
        <Link to={ `/profile/${ username }` }> <li>Profile</li> </Link> 
    }
    <li>More Options</li>
  </div>
)

export default HomeLeftTextos