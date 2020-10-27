import React from 'react'
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <h2 className={classes.title}>Users</h2>
            <div className={classes.pagination}>
                {pages.map(page => (
                    <span
                        key={page}
                        className={props.currentPage === page ? classes.selectedPage : ''}
                        onClick={props.currentPage !== page ? () => {
                            props.onPageChanged(page)
                        } : ''}
                    >{page}
                    </span>
                ))}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={classes.userItemContainer}>
                        <div className={classes.userItem}>
                            <div>
                                <NavLink to={'/profile' + user.id}>
                                    <img className={classes.userAvatar}
                                         src={user.photos.small !== null ? user.photos.small : userAvatar}
                                         alt="avatar"/>
                                </NavLink>
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
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow?${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "aba9ac70-e6ff-4b2d-827c-6e1ddd911830"
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}
                                className={classes.userFollow}>Unfollow</button>
                            : <button
                                onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow?${user.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "aba9ac70-e6ff-4b2d-827c-6e1ddd911830"
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })
                                }}
                                className={classes.userFollow}>Follow</button>
                        }
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users