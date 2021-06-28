import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const[ users, setUsers] = useState([])
    const [sort, setSort] = useState('');
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(3);
    const pageNumbers = [];
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    for (let i =1; i <= Math.ceil(users.length / postsPerPage); i++){
        pageNumbers.push(i)
    }

    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>  setUsers(data))
    },[])

    const handleTextChange = e => {
       const filterUser = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
       setUsers(filterUser);
    }
    const handleEmailChange = e => {
       const filterUser = users.filter(user => user.email.toLowerCase().includes(e.target.value.toLowerCase()))
       setUsers(filterUser);
    }
    const handleWebsiteChange = e => {
       const filterUser = users.filter(user => user.website.toLowerCase().includes(e.target.value.toLowerCase()))
       setUsers(filterUser);
    }

    const handleSorted = (sortType) => {
        const sorted = users.sort((a, b) => {
            const isReverse = (sortType === "asc") ? 1 : -1
            return isReverse * a.name.localeCompare(b.name)
        })
        setSort(sortType)
        setUsers(sorted)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage; 
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    
    return (
        <div className="pt-24 text-center">
            <h1>All Users</h1>
            <div>
            <button className="btn" onClick={() => handleSorted('asc')}>ASC</button>
            <button className="btn" onClick={() => handleSorted('dsc')}>DSC</button>
            </div>
            <div>
                <select onChange={(e) => setPostsPerPage(parseInt(e.target.value))}>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value={users.length}>All</option>
                </select>
            </div>
           
            <div className="flex justify-between px-12 py-4 bg-gray-400 text-white">
                <h1>Name</h1>
                <h1>Email</h1>
                <h1>Website</h1>
            </div>
            <div className="flex justify-between px-12 py-4">
                <input onChange={handleTextChange} type="text" placeholder="Name" />
                <input onChange={handleEmailChange} type="text" placeholder="Gmail" />
                <input onChange={handleWebsiteChange} type="text" placeholder="Website" />
            </div>
            <div>
                {currentPosts.map(user => 
                   <div className="flex justify-between px-12 py-4"> 
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                        <h1>{user.email}</h1>
                        <h1>{user.website}</h1>
                   </div> )}
            </div>
            <div className="flex">
                {pageNumbers.map(pageNumber => (
                    <button className="btn" onClick={() => paginate(pageNumber)}>{pageNumber}</button>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;