import { render } from '@testing-library/react'
import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id :'1',
                title: 'accusamus beatae ad facilis cum similique qui sunt',
                thumbnailUrl: 'https://via.placeholder.com/150/92c952'
            },
            {
                id :'2',
                title: 'reprehenderit est deserunt velit ipsam',
                thumbnailUrl: 'https://via.placeholder.com/150/771796'
            },
            {
                id :'3',
                title: 'officia porro iure quia iusto qui ipsa ut modi',
                thumbnailUrl: 'https://via.placeholder.com/150/24f355'
            }
        ]
    }
   render(){
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>(
                    <UserItem key = {user.id} user = {user}/>
                ))}
            </div>
        )
    }
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2 rem'
}


export default Users
