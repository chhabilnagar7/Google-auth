import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userInfo,setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  },[])

  const handlelogout = ()=>{
    localStorage.removeItem('user-info');
    navigate('/login')
  }
  return (
    <div className='login'> 
      <img src={userInfo?.image} alt={userInfo?.email}/>
      <h1>Welcome {userInfo?.name}</h1>
      <h3>Email: {userInfo?.email}</h3>
     
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Dashboard
