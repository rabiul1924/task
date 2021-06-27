import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const[visibleItems, setVisibleItems ] = useState(10);
    const history = useHistory()
    useEffect(()=>{
        const loadData = async () => {
            const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPosts(data)
        }
        loadData();
    },[visibleItems])

    const handleShowPosts = ()=> {
        setVisibleItems(prevState => prevState + 10);
    }
   
    return (
        <React.Fragment>
        <div className="grid grid-cols-3 gap-4 pt-24 px-16 pb-8">
           {posts.slice(0, visibleItems)?.map(post => (
               <div className="shadow-md p-4 cursor-pointer" onClick={() => history.push(`/post/${post.id}`)}>
                   <h4> <span className="font-bold">ID:</span>{post.id}</h4>
                   <h3><span className="font-bold">Title: </span>{post.title}</h3>
                   <p><span className="font-bold">Body: </span>{post.body}</p>
               </div>
           ))}
        </div>
        <button className="btn" onClick={handleShowPosts}>Load More</button>
        </React.Fragment>
    );
};

export default Posts;