import React, {useCallback, useMemo, useState, useEffect, useRef} from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Mybutton from "../components/UI/button/Mybutton";
import Myinput from "../components/UI/input/Myinput";
import MyModal from "../components/UI/MyModal/MyModal";
import Myselect from "../components/UI/select/Myselect";
import '../styles/app.css';
import PostItem from "../components/PostItem";
import { usePosts } from "../hooks/usePosts";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import { isInaccessible } from "@testing-library/react";
import { useObserver } from "../hooks/useObserver";






function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:"", query:""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages ]= useState(0);
  const [limit, setLimit ]= useState(10);
  const [page, setPage ]= useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  console.log(lastElement);

  const [fetchPosts, isPostLoading, postError ]= useFetching( async(limit, page) => {
      const response = await PostService.getAll(limit,page);
      setPosts([...posts, ...response.data])
      const totalCount = response.headers["x-total-count"]
      setTotalPages(getPageCount(totalCount, limit));
  })
  
  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })


  
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  
  return (
    <>      
      <PostFilter  
        filter={filter}
        setFilter={setFilter}>
      </PostFilter>
      <Mybutton      onClick={fetchPosts}       >Get posts</Mybutton>
      <Mybutton onClick={() => {setModal(true)}}>Create post</Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <Myselect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Count element on page"
        options={[
          {value: 5, name:'5'},
          {value: 10, name:'10'},
          {value: 25, name:'25'},
          {value: -1, name:'All posts'},
        ]}></Myselect>
      <PostList 
        remove={removePost} 
        posts={sortedAndSearchedPosts} 
        title="">
      </PostList>
      <div 
        ref={lastElement} 
        style={{height:50, 
        background: "transparent"}}>
      </div>
      { isPostLoading && <Loader></Loader> }
      <Pagination
        page={page} 
        totalPages={totalPages} 
        changePage={changePage}>
      </Pagination>
    </>
    
  );
}

export default Posts;