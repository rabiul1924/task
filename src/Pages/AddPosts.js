import React, { useContext, useState } from 'react';
import {UserContext} from "../App.js"

const AddPosts = () => {
    const [posts, setPosts] = useContext(UserContext)
    const [updatedInfo, setUpadtedInfo] = useState({title:"", body:""})

    const handleChange = e => {
        setUpadtedInfo({
            ...updatedInfo,
            [e.target.name]: e.target.value
        })
    }
    
       const handleSubmit = (e) => {
         e.preventDefault()
        setPosts([...posts, updatedInfo])
       }
       
    return (
        <>
          <form onSubmit={handleSubmit} className="pt-24">
                <input name="title" onChange={handleChange} type="text" placeholder="title" />
                <input name="body" onChange={handleChange} type="text" placeholder="body" />
               <button type="submit" className="btn">Add Post</button>
            </form>
        </>
    );
};

export default AddPosts;