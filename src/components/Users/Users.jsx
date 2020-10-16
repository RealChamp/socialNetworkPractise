import React from 'react'

import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
                    followed: false,
                    fullName: 'Matthew',
                    status: 'I am a boss',
                    location: {city: 'Volgograd', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
                    followed: true,
                    fullName: 'Andrey',
                    status: 'I am a Andrey',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a Dmitry',
                    location: {city: 'Saint-Petesburg', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
                    followed: false,
                    fullName: 'Vika',
                    status: 'I am a Vika',
                    location: {city: 'Krasnodar', country: 'Russia'}
                },
            ]
        )
    }

    return (
        <div>
            <h2 className={classes.title}>Users</h2>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={classes.userItemContainer}>
                        <div className={classes.userItem}>
                            <div>
                                <img className={classes.userAvatar}
                                     src={user.photoUrl}
                                     alt="avatar"/>
                            </div>
                            <div className={classes.userInfoContainer}>
                                <div className={classes.userInfo}>
                                    <span>{user.fullName}</span>
                                    <div>
                                        {user.location.city},<br/> {user.location.country}
                                    </div>
                                </div>
                                <div>{user.status}</div>

                            </div>
                        </div>
                        {user.followed
                            ? <button
                                onClick={() => {
                                    props.unfollow(user.id)
                                }}
                                className={classes.userFollow}>Unfollow</button>
                            : <button
                                onClick={() => {
                                    props.follow(user.id)
                                }}
                                className={classes.userFollow}>follow</button>
                        }
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users