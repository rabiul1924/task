import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleUserDetails = () => {
    const {id} = useParams();
    const[ users, setUsers] = useState([]);
    const[ userDetails, setUserDetails] = useState({});
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(3);
    const pageNumbers = [];
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    for (let i =1; i <= Math.ceil(users.length / postsPerPage); i++){
        pageNumbers.push(i)
    }
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => res.json())
        .then(data =>  setUsers(data))
    },[id])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data =>  setUserDetails(data))
    },[id])
  

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage; 
    const currentPosts = users?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="pt-24">
           <h2>User Details</h2>
              <div>
                  <h3>{userDetails.name}</h3>
                  <h3>{userDetails.username}</h3>
                  <h3>{userDetails.email}</h3>
                  <h3>{userDetails.phone}</h3>
                  <h3>{userDetails.website}</h3>
              </div>
            <h2>User All Posts</h2>
            {currentPosts.map(post => (
                <div>
                 <h4> <span className="font-bold">ID:</span>{post?.id}</h4>
                 <h3><span className="font-bold">Title: </span>{post.title}</h3>
                 <p><span className="font-bold">Body: </span>{post.body}</p>
                 </div>
            ))}
            <div className="flex">
                {pageNumbers.map(pageNumber => (
                    <button className="btn" onClick={() => paginate(pageNumber)}>{pageNumber}</button>
                ))}
            </div>
        </div>
        
    );
};

export default SingleUserDetails;