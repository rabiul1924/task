import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostDetails = () => {
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
    return (
        <div className="pt-24">
            <div>
                <h4>Post ID: {post.id}</h4>
                <h4>Title: {post.title}</h4>
                <h4>Body: {post.body}</h4>
            </div>
            <header className="text-center">All Comments</header>
           <div className="grid grid-cols-2">
           {comments.map(comment => (    
                <div className="shadow-md p-4 cursor-pointer">
                    <h4>Comments by :{comment.name}</h4>
                    <h4>Email :{comment.email}</h4>
                    <h4>Description :{comment.body}</h4>
                </div>
            ))}
           </div>
        </div>
    );
};

export default SinglePostDetails;