import React from 'react'

const UserContainer = ({user,logout}) => {
  return (
   <div className="user-container">
    {user ? (
    <> 
    <p>Hello there {user?.name?.toUpperCase()}</p>
    <button className='btn' onClick={logout}>logout
    </button>
    </>
    )
    :(
    <p>Pls login </p>
    
    )}
   </div>
  )
 }

export default UserContainer