import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    };

    return (
        <div className={classes.postBlock}>
           <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText} />
                <div>
                <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
               {postElements}
            </div>
        </div>
    );
};

export default MyPosts;