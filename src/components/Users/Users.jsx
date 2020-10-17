import React from 'react'
import axios from 'axios'

import userAvatar from '../../assets/images/user.jpg'
import classes from './Users.module.css'


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
            })
    }

    render() {
        return (
            <div>
                <h2 className={classes.title}>Users</h2>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div className={classes.userItemContainer}>
                            <div className={classes.userItem}>
                                <div>
                                    <img className={classes.userAvatar}
                                         src={user.photos.small !== null ? user.photos.small : userAvatar}
                                         alt="avatar"/>
                                </div>
                                <div className={classes.userInfoContainer}>
                                    <div className={classes.userInfo}>
                                        <span>{user.name}</span>
                                        <div>
                                            {"user.location.city"},<br/> {"user.location.country"}
                                        </div>
                                    </div>
                                    <div>{user.status !== null ? user.status : 'There placed your status'}</div>

                                </div>
                            </div>
                            {user.followed
                                ? <button
                                    onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}
                                    className={classes.userFollow}>Unfollow</button>
                                : <button
                                    onClick={() => {
                                        this.props.follow(user.id)
                                    }}
                                    className={classes.userFollow}>Follow</button>
                            }
                        </div>

                    </div>)
                }
            </div>
        )
    }
}


/*const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(
                    response.data.items
                )
            })
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
                                     src={user.photos.small !== null ? user.photos.small : userAvatar}
                                     alt="avatar"/>
                            </div>
                            <div className={classes.userInfoContainer}>
                                <div className={classes.userInfo}>
                                    <span>{user.name}</span>
                                    <div>
                                        {"user.location.city"},<br/> {"user.location.country"}
                                    </div>
                                </div>
                                <div>{user.status !== null ? user.status : 'There placed your status'}</div>

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
                                className={classes.userFollow}>Follow</button>
                        }
                    </div>

                </div>)
            }
        </div>
    )
}
*/

export default Users