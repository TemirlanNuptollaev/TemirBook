import React from 'react';
import PostItem from './PostItem';



const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return(
            <h1 className='exo-text' style={{textAlign: "center"}}>
            Post is not defined :( </h1>
        )
    }
    return (
        <div className='exo-text'>
            <h1 style={{textAlign:"center", fontSize:"46pt"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
}

export default PostList;
