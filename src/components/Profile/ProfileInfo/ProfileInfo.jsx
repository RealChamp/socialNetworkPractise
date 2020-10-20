import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={classes.wallpaper}
                     src="https://www.w3schools.com/howto/img_snow_wide.jpg"
                     alt=""/>
            </div>

            <div className={classes.description}>
                <img src={props.profile.photos.large} alt='avatar'/>
                <p>{props.profile.aboutMe}</p>
            </div>

        </div>
    );
};

export default ProfileInfo;