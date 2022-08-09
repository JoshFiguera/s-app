import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from '../MyPosts/AddPostFormRedux'


const MyPosts = React.memo(props => {
//    console.log('r');

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    let newPostElement = React.createRef();


    let addNewPost = (values) => {
        props.addPost(values.newPostText);

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});


export default MyPosts;