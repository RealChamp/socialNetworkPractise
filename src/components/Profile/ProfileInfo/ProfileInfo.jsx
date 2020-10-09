import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>

            <div>
                <img className={classes.wallpaper} src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
            </div>

            <div className={classes.description}>
                avatar + description
            </div>

        </div>
    );
};

export default ProfileInfo;