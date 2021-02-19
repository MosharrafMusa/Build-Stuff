import React from 'react'

const UserItem =({user:{title, thumbnailUrl}})=> {

        return (
            <div>
                <h4>Title: {title}</h4>
                <img src={thumbnailUrl} alt="" style={{width: '100px'}}/>

            </div>
        )
    }


export default UserItem
