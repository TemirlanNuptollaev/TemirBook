import React, {useState} from 'react';
import PostList from './PostList';
import Mybutton from './UI/button/Mybutton';
import Myinput from './UI/input/Myinput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:"", body:""});
    const addNewPost = (e) => {
        e.preventDefault()
    
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }
      

    return (

        <form>

        <Myinput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"/>
        <Myinput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Описание поста"/>
        <Mybutton onClick={addNewPost} >Создать пост</Mybutton>
      </form>
    );
}

export default PostForm;
