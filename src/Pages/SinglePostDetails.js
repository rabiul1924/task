import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostDetails = () => {
    const [comments, setComments] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])
    return (
        <div className="pt-24">
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