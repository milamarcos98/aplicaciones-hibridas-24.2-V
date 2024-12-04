import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users/register', userData)
    .then((res) => {
        console.log(res)
        navigate('/login')
    })
    .catch((error) => {
        console.log(error)
        setError(error.response.data.message)
    })
  }


  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={userData.username}
            onChange={(e) => setUserData({...userData, username: e.target.value})}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export { Register };
