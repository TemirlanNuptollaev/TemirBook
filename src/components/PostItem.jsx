import React from 'react';
import { useHistory } from 'react-router-dom';
import Mybutton from './UI/button/Mybutton';


const PostItem = (props, remove) => {
  const router = useHistory()
  console.log(router)
  
  return (
    <div className="post">
      <div className="post__content">
      <div className="post__title"><strong>{props.post.id}.{" " + props.post.title}</strong></div>
      <div className="post__body">
          {props.post.body}
      </div>
      </div>  
      <div className="post__btns">
        <Mybutton onClick={() => router.push('/posts/'+ props.post.id )}>Open</Mybutton>
        <Mybutton onClick={() => props.remove(props.post)}>Delete</Mybutton>
      </div>
    </div> 
  );
}

export default PostItem;
