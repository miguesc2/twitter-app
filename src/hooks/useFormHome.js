import { useState } from 'react'

function useFormHome() {
    const [ usersArray, setUsersArray ] = useState([])
    const [ getComment, setGetComment ] = useState([])
    const arrayCategories = [ "movie", "game", "album", "book", "shoes", "watch", "furniture" ]
  
    usersArray.map( itemArr => 
        Object.assign(itemArr, {
            image: `https://api.lorem.space/image/${ arrayCategories[ Math.floor( Math.random() * 7 ) ] }?w=515&amp;amp;amp;amp;h=300` }, { comments: getComment.filter(item => item.social_post === itemArr.id) 
        })
    )
    usersArray.sort(( a, b ) => {
        if ( a.id < b.id ) { return -1 } 
        if ( a.id > b.id ) { return 1 }
        return 0
    })
    
    return { setUsersArray, setGetComment, usersArray, getComment }
}
















export default useFormHome