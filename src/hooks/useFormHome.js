import React, { useState } from 'react'

function useFormHome() {
    const arrayCategories = [ "movie", "game", "album", "book", "shoes", "watch", "furniture" ]
    const [ usersArray, setUsersArray ] = useState([])
    const editedUsersArray = []
  
    usersArray.map( item => {
        Object.assign( item, { image: `https://api.lorem.space/image/${ arrayCategories[ Math.floor( Math.random() * 7 ) ] }?w=515&amp;amp;amp;amp;h=300` } )
        editedUsersArray.push( item )
    })

    editedUsersArray.sort(( a, b ) => {
        if ( a.id < b.id ) { return -1 } 
        if ( a.id > b.id ) { return 1 }
        return 0
    })

    return {
        setUsersArray, editedUsersArray
    }
}

export default useFormHome