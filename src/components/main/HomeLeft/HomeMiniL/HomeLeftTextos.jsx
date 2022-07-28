import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomeLeftTextos = ({ username }) => (
  <div className="home__list_textos">
    { useLocation().pathname === `/home`
      ? 
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li>Beginning</li>
          </a>
      : 
        <Link to="/home">
          <li>Beginning</li>
        </Link> 
    }


    { useLocation().pathname === `/explore`
      ? 
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li className="">To explore</li>
        </a>
      : 
        <Link to="/explore">
          <li className="">To explore</li>
        </Link> 
    }


    { useLocation().pathname === `/notifications`
      ?
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li className="orderToDisappear2">Notifications</li>
        </a>
      :
        <Link to="/notifications">
          <li className="orderToDisappear2">Notifications</li>
        </Link>
    }


    { useLocation().pathname === `/messages`
      ?
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li className="orderToDisappear3">Messages</li>
        </a>
      :
        <Link to="/messages">
          <li className="orderToDisappear3">Messages</li>
        </Link>
    }


    { useLocation().pathname === `/saved`
      ?
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li className="orderToDisappear4">Saved</li>
        </a>
      :
        <Link to="/saved">
          <li className="orderToDisappear4">Saved</li>
        </Link>
    }


    { useLocation().pathname === `/lists`
      ?
        <a href="#x" style={{ cursor: 'default', fontWeight: 'bold' }}>
          <li className="orderToDisappear5">Lists</li>
        </a>
      :
        <Link to="/lists">
          <li className="orderToDisappear5">Lists</li>
        </Link>
    }


    { useLocation().pathname === `/profile/${ username }` 
      ?
        <a href="#x" style={{ cursor: 'default '}}>
          <li>Profile</li>
        </a> 
      :
        <Link to={ `/profile/${ username }` }>
          <li>Profile</li>
        </Link> 
    }


    <li className="orderToDisappear1">More Options</li>
  </div>
)

export default HomeLeftTextos