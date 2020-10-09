import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.kp.ru/afisha/wp-content/uploads/2018/08/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg"
                 alt=""/>
             { props.message };
            <div>Like: {props.likes}</div>
        </div>
    );
};

export default Post;