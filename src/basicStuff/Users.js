import { render } from '@testing-library/react'
import React from 'react'
import UserItem from './UserItem'

const Users=({users, loading})=> {
    
        return (
            <div style={userStyle}>
                {users.map(user =>(
                    <UserItem key = {user.id} user = {user}/>
                ))}
            </div>
        )
    }


const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2 rem'
}


export default Users
