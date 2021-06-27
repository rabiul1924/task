import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const[ users, setUsers] = useState([])
    const[sortType, setSortType] = useState('asc')
    // const[sortDsc, setSortDscS] = useState('dsc')



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

    const handleSorted = () =>{
         setUsers( users.sort((a,b) => {
            const isReverse = (sortType === "asc") ? 1 : -1 
            return isReverse * a.name.localeCompare(b.name) 
         }))
        //  setSortType(sorted)
        //  console.log(sorted)
        // setUsers(sorted)

    }
    console.log(users)
    
    // const handleDscSort = () => {
    //     const sorted = users.sort((a,b) => {
    //         const isReverse = (sortType === "dsc") ? 1 : -1 
    //         return isReverse * a.name.localeCompare(b.name) 
    //      })
    //      setSortType(sorted)
    // }
    
    return (
        <div className="pt-24 text-center">
            <h1>All Users</h1>
            <button className="btn" onClick={handleSorted}>ASC</button>
            {/* <button className="btn" onClick={handleDscSort}>DSC</button> */}
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
                {users.map(user => 
                   <div className="flex justify-between px-12 py-4"> 
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                        <h1>{user.website}</h1>
                   </div> )}
            </div>
        </div>
    );
};

export default AllUsers;