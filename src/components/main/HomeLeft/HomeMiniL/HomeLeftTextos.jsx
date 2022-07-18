import React from 'react'
import { Link } from 'react-router-dom'

function HomeLeftTextos({ username }) {
  return (
    <div className="home__list_textos">
        <Link to="/home"><li>Beginning</li></Link>
        <li>To explore</li>
        <li>Notifications</li>
        <li>Posts</li>
        <li>Saved</li>
        <li>Lists</li>
        <Link to={ `/profile/${ username }` }> <li>Profile</li> </Link>
        <li>More Options</li>
    </div>
  )
}

export default HomeLeftTextos